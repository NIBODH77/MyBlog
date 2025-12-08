
import Razorpay from 'razorpay';
import crypto from 'crypto';

// Razorpay instance
export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_ID',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET',
});

// Create order
export async function createRazorpayOrder(amount: number, currency: string = 'INR') {
  const options = {
    amount: amount * 100, // amount in smallest currency unit (paise)
    currency,
    receipt: `receipt_${Date.now()}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
}

// Verify payment signature
export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const keySecret = process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET';
  const generatedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generatedSignature === signature;
}
