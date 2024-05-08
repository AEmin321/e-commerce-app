import express from "express";
import stripe from "stripe";

const Stripe = stripe(process.env.STRIPE_KEY);
const stripeRouter = express.Router();

stripeRouter.post("/payment", async (req, res) => {
  const { amount, token } = req.body;
  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount: amount,
      currency: "try",
      source: token,
    });
    res.status(200).json({ message: "Payment Intent created", paymentIntent });
  } catch (error) {
    res.status(500).json({ error: "Payment Intent creation failed" });
  }
});

export default stripeRouter;
