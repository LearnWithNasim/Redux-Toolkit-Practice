import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../feature/cart/slice";
import { isCloseModal } from "../feature/Modal/Modal";

function Modal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modalSlice);
  const { cartItems } = useSelector((store) => store.cartSlice);
  return (
    <div>
      <aside className="modal-container">
        <div className="modal">
          <h4> Remove all item for your shopping card.</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              type="button"
              onClick={() => {
                dispatch(clearCart()), dispatch(isCloseModal());
              }}
            >
              confirm
            </button>
            <button
              className="btn clear-btn"
              type="button"
              onClick={() => dispatch(isCloseModal())}
            >
              cencel
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Modal;
