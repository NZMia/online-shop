import React from "react";
import Card from "./components/Card";
import CartItem from "./components/CartItem";
const App = () => {
  return (
    <div className="page">
      <header>Header</header>
      <div className="page__left">
        <Card />
      </div>
      <div className="page__right">
        <CartItem />
      </div>
    </div>
  );
};

export default App;
