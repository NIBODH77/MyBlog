
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Link } from "wouter";
import { ArrowLeft, Check, Copy, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function UPIPayment() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const upiId = "myblog@upi";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    toast({
      title: "UPI ID Copied",
      description: "UPI ID has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
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

          {/* UPI ID Section */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 text-center mb-4 font-medium">Pay using UPI ID</p>
            <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-100">
              <code className="flex-1 text-center font-mono text-xl font-semibold text-gray-800">{upiId}</code>
              <Button
                size="lg"
                variant="default"
                onClick={handleCopy}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900 text-lg">How to pay:</h3>
            <ol className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span className="pt-1">Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span className="pt-1">Copy the UPI ID by clicking the "Copy" button above</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <span className="pt-1">Paste the UPI ID in your payment app and enter the amount</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <span className="pt-1">Complete the payment and your subscription will be activated instantly</span>
              </li>
            </ol>
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
