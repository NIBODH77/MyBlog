import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createRazorpayOrder, verifyRazorpaySignature } from "./razorpay";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post('/api/translate', async (req, res) => {
    try {
      const { text, targetLang, sourceLang = 'auto' } = req.body;

      if (!text || !targetLang) {
        return res.status(400).json({ error: 'Missing text or targetLang' });
      }

      const encodedText = encodeURIComponent(text);
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodedText}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Translation failed: ${response.status}`);
      }

      const data = await response.json();

      let translatedText = '';
      if (data && data[0]) {
        for (const segment of data[0]) {
          if (segment && segment[0]) {
            translatedText += segment[0];
          }
        }
      }

      res.json({ translatedText: translatedText || text });
    } catch (error) {
      console.error('Translation error:', error);
      res.status(500).json({ error: 'Translation failed', original: req.body?.text });
    }
  });

  app.post('/api/translate/batch', async (req, res) => {
    try {
      const { texts, targetLang, sourceLang = 'auto' } = req.body;

      if (!texts || !Array.isArray(texts) || !targetLang) {
        return res.status(400).json({ error: 'Missing texts array or targetLang' });
      }

      const results: { [key: string]: string } = {};

      const batchSize = 5;
      for (let i = 0; i < texts.length; i += batchSize) {
        const batch = texts.slice(i, i + batchSize);
        const promises = batch.map(async (text: string) => {
          try {
            const encodedText = encodeURIComponent(text);
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodedText}`;

            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed');

            const data = await response.json();
            let translatedText = '';
            if (data && data[0]) {
              for (const segment of data[0]) {
                if (segment && segment[0]) {
                  translatedText += segment[0];
                }
              }
            }
            return { original: text, translated: translatedText || text };
          } catch {
            return { original: text, translated: text };
          }
        });

        const batchResults = await Promise.all(promises);
        batchResults.forEach(({ original, translated }) => {
          results[original] = translated;
        });

        if (i + batchSize < texts.length) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }

      res.json({ translations: results });
    } catch (error) {
      console.error('Batch translation error:', error);
      res.status(500).json({ error: 'Batch translation failed' });
    }
  });

  // Create Razorpay order
  app.post("/api/payment/create-order", async (req, res) => {
    try {
      const { amount, currency } = req.body;

      if (!amount) {
        return res.status(400).json({ error: "Amount is required" });
      }

      const order = await createRazorpayOrder(amount, currency || 'INR');

      res.json({
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        key: process.env.RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_ID',
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Verify Razorpay payment
  app.post("/api/payment/verify", async (req, res) => {
    try {
      const { orderId, paymentId, signature } = req.body;

      if (!orderId || !paymentId || !signature) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const isValid = verifyRazorpaySignature(orderId, paymentId, signature);

      if (isValid) {
        // Here you can update your database to mark the payment as successful
        res.json({ success: true, message: "Payment verified successfully" });
      } else {
        res.status(400).json({ success: false, message: "Invalid signature" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  return httpServer;
}