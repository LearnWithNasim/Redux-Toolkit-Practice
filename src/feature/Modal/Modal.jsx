import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isOpenModal: (state, action) => {
      state.isOpen = true;
    },
    isCloseModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { isOpenModal, isCloseModal } = ModalSlice.actions;
export default ModalSlice.reducer;
