import React from "react";
import Card from "./components/Card";
import CartItem from "./components/CartItem";

import { useSelector } from "react-redux";

const App = () => {
  const { currentProducts } = useSelector((state) => state.product);

  return (
    <div className="page">
      <header>Header</header>
      <div className="page__left">
        {currentProducts?.map((product) => {
          return <Card product={product} key={product._id} />;
        })}
      </div>
      <div className="page__right">
        <CartItem />
      </div>
    </div>
  );
};

export default App;
