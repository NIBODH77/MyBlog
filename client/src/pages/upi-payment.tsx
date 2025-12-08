
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Link } from "wouter";
import { ArrowLeft, Check, Copy } from "lucide-react";
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Pay with UPI
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Complete your MyBlog+ subscription payment
          </p>

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-6">
            <div className="bg-white p-4 rounded-lg w-64 h-64 mx-auto flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">QR Code</span>
                </div>
                <p className="text-xs text-gray-500">Scan with any UPI app</p>
              </div>
            </div>
          </div>

          {/* UPI ID Section */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 text-center mb-2">Or pay using UPI ID</p>
            <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
              <code className="flex-1 text-center font-mono text-lg">{upiId}</code>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopy}
                className="flex items-center gap-2"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900">How to pay:</h3>
            <ol className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-semibold">1</span>
                <span>Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-semibold">2</span>
                <span>Scan the QR code or enter the UPI ID</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-semibold">3</span>
                <span>Enter the amount and complete the payment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-semibold">4</span>
                <span>Your subscription will be activated instantly</span>
              </li>
            </ol>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              Having trouble? <Link href="/help" className="text-blue-600 hover:underline font-medium">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
