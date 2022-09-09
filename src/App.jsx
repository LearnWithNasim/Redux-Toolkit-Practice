import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./container/cartContainer";
import Modal from "./container/Modal";
import { calculateTotal, getCartItems } from "./feature/cart/slice";
import Navbar from "./Navbar";

export default function App() {
  const { cartItems, loading } = useSelector((store) => store.cartSlice);
  const { isOpen } = useSelector((store) => store.modalSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h4>loading...</h4>
      </div>
    );
  }

  return (
    <>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}
