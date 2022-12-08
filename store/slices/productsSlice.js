import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { productsData as data } from "../../database";

const slice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    add: (state, action) => {
      if (action.payload.productName) {
        let newState = [...state];
        newState.push({
          id: uuid(),
          productName: action.payload.productName,
          category: action.payload.category,
          productPrice: action.payload.totalValue,
        });
        return newState;
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
        let newState = [...state];
        newState = newState.filter((item) => item.id != action.payload.id);
        return newState;
      }
    },
  },
});

export const { add, edit, del } = slice.actions;
export default slice.reducer;
