import { createSlice } from "@reduxjs/toolkit";
import { couponCode } from "../data";
// {
// code: 1,
//   message: "Over $500 get ONE 'Deanston 12 years old' FREE",
// },
// {
//   code: 3,
//   message: "Ten for $750",
// },
// {
//   code: 2,
//   message: "One Limited",
// },
// {
//   code: 4,
//   message: "Buy Four get ONE FREE",
// },
const setPromoPrice = ({ promoCode, unitPrice, currentQty }) => {
  const { code } = couponCode.find((item) => item.code === promoCode);

  switch (code) {
    case 4:
      return parseFloat(
        (+currentQty - Math.trunc(currentQty / 4)) * unitPrice
      ).toFixed(2);
    case 3:
      return +currentQty >= 12
        ? parseFloat(currentQty * 75).toFixed(2)
        : parseFloat(currentQty * unitPrice).toFixed(2);
    case 2:
      return parseFloat(unitPrice).toFixed(2);
    default:
      return parseFloat(currentQty * unitPrice).toFixed(2);
  }
};
const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    cartTotalAmount: 0,
  },

  reducers: {
    // add product into cart
    addToCart: (state, action) => {
      const { price, promoCode, _id } = action.payload;

      // existing check
      const exitingIndex = state.cartItems.findIndex(
        (item) => item._id === _id
      );

      // add to cart directlly if none existing
      if (exitingIndex < 0) {
        const tempProductItem = {
          ...action.payload,
          qty: 1,
          subTotal: price,
        };
        state.cartItems.push(tempProductItem);
      }

      // update the product's quantity if existing
      else {
        const currentQty = state.cartItems[exitingIndex].qty + 1;
        const unitPrice = state.cartItems[exitingIndex].price;
        const subTotal = setPromoPrice({ promoCode, unitPrice, currentQty });

        state.cartItems[exitingIndex] = {
          ...state.cartItems[exitingIndex],
          qty: currentQty,
          subTotal: subTotal,
        };
      }
    },

    // remove product from cart
    removeFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        // get matched product from _id
        if (cartItem._id === action.payload._id) {
          // remove it from the cartItem
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;
        }
        return state;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
