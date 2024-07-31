import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
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
