import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../database";

export const userSlice = createSlice({
  name: "products",
  initialState: { products: productsData },
  reducers: {
    addProduct: (state, action) => {
      state.users = [...state.products, action.payload];
    },
  },
});

export const { addProduct } = userSlice.actions;
export default userSlice.reducer;
