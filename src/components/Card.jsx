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
    <div className="card" role="card">
      <h5 className="card__title" role="title">
        {name}
      </h5>

      {/* <div className="flex justify-between items-center mb-2"> */}
      <span className="card__subTitle" role="subTitle">
        ${price}
      </span>

      <button
        className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
      {/* </div> */}
    </div>
  );
};

export default Card;
