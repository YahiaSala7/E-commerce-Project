import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
      <div className="container">
        <PaymentElement />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
