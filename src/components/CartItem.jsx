/* eslint-disable jsx-a11y/aria-role */
import React from "react";

const CartItem = () => {
  const handleRemove = (e) => {
    console.log("e.target.value", e.target);
  };
  return (
    <div className="card" role="card">
      <h5 className="card__title" role="title">
        title
      </h5>

      <div className="flex justify-between items-center mb-2">
        <span className="card__subTitle" role="subTitle">
          $99.99
        </span>
        <span className="card__subTitle" role="qty">
          7
        </span>

        <button
          className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleRemove}
        >
          Remove From Cart
        </button>
      </div>
      <p className="card__subTitle" role="subTotal">
        subTitle: $89899
      </p>
    </div>
  );
};

export default CartItem;
