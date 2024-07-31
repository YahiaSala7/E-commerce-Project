import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { cartContext } from "../_context/cartContext";
import { useUser } from "@clerk/nextjs";
import orderApis from "../_utils/orderApis";
const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(cartContext);
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState();
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    // Create New Order
    createOrder();
    // Send an Email
    // sendEmail();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const createOrder = () => {
    let productIds = [];
    cart.forEach((el) => {
      productIds.push(el?.product?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds,
      },
    };
    orderApis.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((el) => {
          CartApis.deleteCartItem(el?.id).then((result) => {});
        });
      }
    });
  };
  // const sendEmail = async () => {
  // 	const res = await fetch('api/send-email', {
  // 		method: 'POST',
  // 		body: JSON.stringify({
  // 			amount: amount,
  // 			email: user.primaryEmailAddress.emailAddress,
  // 			fullName: user.fullName
  // 		})
  // 	})
  // }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container py-12">
        <header className="text-center">
          <h1 className="mb-5 text-xl font-bold text-gray-900 sm:text-3xl">
            Check out
          </h1>
        </header>
        <PaymentElement />

        <button className="block w-full px-12 py-3 mt-5 text-sm font-medium text-white rounded shadow bg-primary hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
