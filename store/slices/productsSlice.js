import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { productsData as data } from "../../database";

const slice = createSlice({
  name: "products",
  initialState: { data: data, isAddData: false },
  reducers: {
    add: (state, action) => {
      if (action.payload.productName) {
        const newProduct = {
          id: uuid(),
          productName: action.payload.productName,
          category: action.payload.category,
          productPrice: action.payload.productPrice,
        };

        return { ...state, data: [...state.data, newProduct] };
      }
    },
    edit: (state, action) => {
      // loop to check if the id exists in the list, and then change the data according to the id
      for (let i in state) {
        if (state[i].id === action.payload.id) {
          state[i].productName = action.payload.productName;
          state[i].category = action.payload.category;
          state[i].productPrice = action.payload.totalValue;
        }
      }
    },
    del: (state, action) => {
      if (action.payload.id) {
        const newState = state.data.filter(
          (item) => item.id != action.payload.id
        );
        return { ...state, data: newState };
      }
    },
    toggleAddState: (state) => {
      return { ...state, isAddData: !state.isAddData };
    },
  },
});

export const { add, edit, del, toggleAddState } = slice.actions;
export default slice.reducer;
