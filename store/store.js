import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import products from "./slices/productsSlice";

const extraReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      products: {
        products: [
          ...action.payload.products.products,
          ...state.products.products,
        ],
      },
    };
    return nextState;
  } else {
    return products;
  }
};
const makeStore = () =>
  configureStore({ reducer: { products }, devTools: true });
export const wrapper = createWrapper(makeStore);
