import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = item object
      if (state.items.some((item) => item.name === action.payload.name)) return;
      state.items.push(action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    deleteItem(state, action) {
      // payload = item ID
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

export const { deleteItem, addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
