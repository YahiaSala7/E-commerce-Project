import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
      <div className="container py-12">
        <PaymentElement />

        <button className="block w-full px-12 py-3 mt-5 text-sm font-medium text-white rounded shadow bg-primary hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
