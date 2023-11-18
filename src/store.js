import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users.slice";
import userPopupReducer from "./userPopup.slice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    users: usersReducer,
    userPopup: userPopupReducer,
  },
  middleware: [thunk],
});

export default store;
