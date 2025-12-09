
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Check, Smartphone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function UPIPayment() {
  const [upiId, setUpiId] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleUPIPayment = async () => {
    if (!upiId) {
      toast({
        title: "UPI ID Required",
        description: "Please enter your UPI ID",
        variant: "destructive",
      });
      return;
    }

    // Validate UPI ID format
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    if (!upiRegex.test(upiId)) {
      toast({
        title: "Invalid UPI ID",
        description: "Please enter a valid UPI ID (e.g., username@paytm)",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast({
          title: "Error",
          description: "Failed to load payment gateway",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Create order on backend
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 299, currency: "INR" }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error("Failed to create order");
      }

      // Razorpay UPI options
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "MyBlog+",
        description: "Monthly Subscription",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            // Verify payment on backend
            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              toast({
                title: "Payment Successful!",
                description: "Your subscription has been activated.",
              });
              setTimeout(() => {
                setLocation("/");
              }, 1500);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            toast({
              title: "Verification Failed",
              description: "Payment verification failed. Please contact support.",
              variant: "destructive",
            });
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
          vpa: upiId, // Pre-fill UPI ID
        },
        method: {
          upi: true,
        },
        theme: {
          color: "#2563eb",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            toast({
              title: "Payment Cancelled",
              description: "You cancelled the payment",
            });
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Payment failed",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/subscription">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subscription
          </Button>
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Pay with UPI</h1>
          </div>
          
          <p className="text-gray-600 text-center mb-8">
            Complete your MyBlog+ subscription payment using UPI
          </p>

          {/* UPI Payment Form */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your UPI ID
            </label>
            <Input
              type="text"
              placeholder="username@paytm, username@phonepe, etc."
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full text-lg mb-4"
              disabled={loading}
            />
            
            <Button
              onClick={handleUPIPayment}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <Smartphone className="mr-2 h-5 w-5" />
                  Pay ₹299 with UPI
                </>
              )}
            </Button>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900 text-lg">How to pay:</h3>
            <ol className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span className="pt-1">Enter your UPI ID (e.g., yourname@paytm, yourname@phonepe)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span className="pt-1">Click on "Pay ₹299 with UPI" button</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <span className="pt-1">You'll receive a payment request on your UPI app</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <span className="pt-1">Approve the payment in your UPI app to complete the subscription</span>
              </li>
            </ol>
          </div>

          {/* Supported UPI Apps */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-5 mb-6 border border-blue-100">
            <h4 className="font-semibold text-gray-900 mb-3">Supported UPI Apps:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Google Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>PhonePe</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Paytm</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>BHIM</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Amazon Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>WhatsApp Pay</span>
              </div>
            </div>
          </div>

          {/* Amount Info */}
          <div className="bg-amber-50 rounded-lg p-5 mb-6 border border-amber-100">
            <h4 className="font-semibold text-gray-900 mb-2">Subscription Amount</h4>
            <p className="text-2xl font-bold text-blue-600">₹299 <span className="text-sm font-normal text-gray-600">/month</span></p>
            <p className="text-xs text-gray-500 mt-1">Or ₹2,999/year (Save 17%)</p>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
            <p className="text-sm text-gray-600">
              Having trouble? <Link href="/help" className="text-blue-600 hover:underline font-medium">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
