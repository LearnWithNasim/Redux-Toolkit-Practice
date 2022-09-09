import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isOpenModal } from "../feature/Modal/Modal";
import CartItem from "./cartItem";

export default function CartContainer() {
  const dispatch = useDispatch();
  const { amount, total, cartItems } = useSelector((store) => store.cartSlice);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h3>Your Bag</h3>
          <h5 className="emty-cart">is currently emty...</h5>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h3>Your Bag</h3>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total :<span> ${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn btn-clear"
          onClick={() => dispatch(isOpenModal())}
        >
          Clear-cart
        </button>
      </footer>
    </section>
  );
}
