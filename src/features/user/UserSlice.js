import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  userName: "",
  address: "",
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
    updateDetails(state, action) {
      state.userName = action.payload.username;
      state.address = action.payload.address;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const {updateDetails, updateName} = userSlice.actions;
export default userSlice.reducer;
