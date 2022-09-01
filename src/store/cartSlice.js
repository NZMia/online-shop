import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    cartTotalAmount: 0,
  },

  reducers: {
    // add product into cart
    addToCart: (state, action) => {
      const { price, _id } = action.payload;

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

        state.cartItems[exitingIndex] = {
          ...state.cartItems[exitingIndex],
          qty: currentQty,
          subTotal: currentQty * unitPrice,
        };
      }
    },

    // remove product from cart
    removeFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        console.log(action.payload);
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
