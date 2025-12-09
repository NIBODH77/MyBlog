import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Loader2 } from "lucide-react";

interface RazorpayPaymentProps {
  amount: number;
  planName: string;
  onSuccess?: (paymentId: string) => void;
  onFailure?: (error: string) => void;
}

export function RazorpayPayment({
  amount,
  planName,
  onSuccess,
  onFailure,
}: RazorpayPaymentProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Demo Mode",
        description: `Payment for ${planName} (₹${amount}) - Backend integration required for real payments.`,
      });
      
      const mockPaymentId = `demo_${Date.now()}`;
      onSuccess?.(mockPaymentId);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Payment failed",
        variant: "destructive",
      });
      onFailure?.(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
      data-testid="button-razorpay-payment"
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
