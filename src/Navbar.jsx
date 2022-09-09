import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "./CartIcons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cartSlice);
  return (
    <nav>
      <div className="nav-center">
        <h2>Redux Toolkit</h2>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
