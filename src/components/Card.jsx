/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price } = product;

  const handleAddToCart = (e) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card flex flex-col space-y-4" role="card">
      <h5 className="card__title" role="title">
        {name}
      </h5>

      <p className="card__subTitle" role="subTitle">
        ${price}
      </p>

      <button
        className="px-10 py-2 font-semibold rounded-full bg-yellow text-dark hover:text-pampas"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
