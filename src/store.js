import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/UserSlice";
import cartReducers from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducers,
  },
});

export default store;
