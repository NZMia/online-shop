import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const productSlice = createSlice({
  name: "product",

  initialState: {
    currentProducts: products,
    loading: false,
  },
});

export default productSlice.reducer;
