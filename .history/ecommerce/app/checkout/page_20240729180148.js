"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../_Components/CheckoutForm";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function page() {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get(amount)),
  };
  const searchParams = useSearchParams();
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get(amount))} />
    </Elements>
  );
}

export default page;
