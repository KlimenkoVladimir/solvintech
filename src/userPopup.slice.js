import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: null,
};

export const userPopupSlice = createSlice({
  name: "userModal",
  initialState,
  reducers: {
    setUserPopup: (state, action) => {
      state.selectedUser = action.payload;
    },
    clearUserPopup: (state) => {
      state.selectedUser = null;
    },
  },
});

export const { setUserPopup, clearUserPopup } = userPopupSlice.actions;
export default userPopupSlice.reducer;
