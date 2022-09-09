import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/slice";
import modalReducer from "../feature/Modal/Modal";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    modalSlice: modalReducer,
  },
});
