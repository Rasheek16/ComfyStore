import { useSelector } from "react-redux";
import { SectionTitle, CheckoutForm, CartTotals } from "../Components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("Login to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const CartTotal = useSelector((state) => state.cartState.cartTotal);
  // console.log(cartItems);
  if (CartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place you order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
