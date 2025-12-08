
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Loader2 } from "lucide-react";

interface RazorpayPaymentProps {
  amount: number;
  planName: string;
  onSuccess?: (paymentId: string) => void;
  onFailure?: (error: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function RazorpayPayment({
  amount,
  planName,
  onSuccess,
  onFailure,
}: RazorpayPaymentProps) {
  const [loading, setLoading] = useState(false);
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

  const handlePayment = async () => {
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
        body: JSON.stringify({ amount, currency: "INR" }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error("Failed to create order");
      }

      // Razorpay options
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "MyBlog+",
        description: `Subscription: ${planName}`,
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
              onSuccess?.(response.razorpay_payment_id);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            toast({
              title: "Verification Failed",
              description: "Payment verification failed. Please contact support.",
              variant: "destructive",
            });
            onFailure?.("Verification failed");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
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
      onFailure?.(error.message);
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-5 w-5" />
          Pay ₹{amount} with Razorpay
        </>
      )}
    </Button>
  );
}
