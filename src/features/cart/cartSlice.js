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
    incrementItemQuantity(state, action) {
      // payload = item Name
      state.items = state.items.map((item) =>
        item.name === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementItemQuantity(state, action) {
      // payload = item Name
      // const item = state.items.filter((item) => item.name === action.payload);
      // if (item.quantity === 1) {
      //   deleteItem(item.name);
      //   return;
      // }
      state.items = state.items
        .map((item) =>
          item.name === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    },
  },
});

export const {
  deleteItem,
  addItem,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
