import React, { useEffect } from "react";
import Card from "./components/Card";
import CartItem from "./components/CartItem";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const { currentProducts } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="mainLayout">
      <header>Header</header>
      <div className="page">
        <div className="page__left flex flex-col space-y-4">
          {currentProducts?.map((product) => {
            return <Card product={product} key={product._id} />;
          })}
        </div>
        <div className="page__right flex flex-col space-y-4">
          {cartItems?.map((cartItem) => {
            return <CartItem cartItem={cartItem} key={cartItem._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
