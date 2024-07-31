"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../_Components/CheckoutForm";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function page() {
  const searchParams = useSearchParams();
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 100,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={100} />
    </Elements>
  );
}

export default page;
