/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, price, qty, subTotal } = cartItem;
  const unitPrice = parseFloat(price).toFixed(2);

  const handleRemove = (e) => {
    dispatch(removeFromCart(cartItem));
  };
  return (
    <div className="card flex flex-col space-y-4" role="card">
      <h5 className="card__title" role="title">
        {name}
      </h5>

      <p className="card__subTitle" role="subTitle">
        ${unitPrice}
      </p>
      <p className="card__subTitle" role="qty">
        {qty}
      </p>

      <button
        className="px-10 py-2 font-semibold rounded-full bg-pampas text-dark hover:text-yellow"
        onClick={handleRemove}
      >
        Remove From Cart
      </button>

      <p className="card__subTitle" role="subTotal">
        subTitle: ${subTotal}
      </p>
    </div>
  );
};

export default CartItem;
