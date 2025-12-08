
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function CardPayment() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: "Your payment is being processed...",
    });
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
            <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Pay with Card</h1>
          </div>

          <p className="text-gray-600 text-center mb-8">
            Enter your card details to complete the payment
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                maxLength={19}
                className="text-lg"
                required
              />
            </div>

            {/* Card Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <Input
                type="text"
                placeholder="JOHN DOE"
                value={formData.cardName}
                onChange={(e) => setFormData({ ...formData, cardName: e.target.value.toUpperCase() })}
                required
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  maxLength={5}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <Input
                  type="password"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  maxLength={3}
                  required
                />
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <Lock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-green-800">
                <p className="font-medium mb-1">Secure Payment</p>
                <p>Your card information is encrypted and secure. We never store your card details.</p>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
            >
              Pay Now
            </Button>
          </form>

          {/* Accepted Cards */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-2">We accept</p>
            <div className="flex justify-center gap-3">
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">Visa</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">Mastercard</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">Amex</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">Rupay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
