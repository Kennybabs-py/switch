import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { productsData as data } from "../../database";

const slice = createSlice({
  name: "products",
  initialState: {
    data: data,
    isAddData: false,
    isEditing: false,
    editData: {},
  },

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
    getEditData: (state, action) => {
      const currentProduct = state.data.find(
        (item) => item.id === action.payload.id
      );
      return { ...state, editData: { ...currentProduct } };
    },

    edit: (state, action) => {
      if (action.payload.id) {
        const editedData = {
          id: action.payload.id,
          productName: action.payload.productName,
          category: action.payload.category,
          productPrice: action.payload.productPrice,
        };

        const updatedData = state.data.map((item) => {
          return item.id === action.payload.id ? editedData : item;
        });

        return { ...state, data: updatedData };
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
    toggleEditState: (state, action) => {
      return { ...state, isEditing: action.payload.isEditing };
    },
  },
});

export const { add, edit, del, toggleAddState, getEditData, toggleEditState } =
  slice.actions;
export default slice.reducer;
