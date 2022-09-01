import React, { useEffect } from "react";
import Card from "./components/Card";
import CartItem from "./components/CartItem";

import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "./store/cartSlice";

const App = () => {
  const dispatch = useDispatch();

  const { currentProducts } = useSelector((state) => state.product);
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const isEmpty = cartItems.length <= 0;

  const limitedAddedProduct = cartItems.find(
    (cartItem) => cartItem.promoCode === 2
  );

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);
  return (
    <div className="mainLayout">
      <header>Header</header>
      <div className="page justify-around">
        <div className="page__left flex flex-col space-y-4">
          {currentProducts?.map((product) => {
            return (
              <Card
                product={product}
                key={product._id}
                limitedAddedProduct={limitedAddedProduct}
              />
            );
          })}
        </div>

        <div className="page__right flex flex-col space-y-4">
          {cartItems?.map((cartItem) => {
            return <CartItem cartItem={cartItem} key={cartItem._id} />;
          })}

          {!isEmpty && <p>Total: ${cartTotalAmount} </p>}

          {cartTotalAmount && cartTotalAmount > 500 && (
            <CartItem
              cartItem={currentProducts.find(
                (product) => product.promoCode === 1
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
