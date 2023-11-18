import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [], start: 0, loading: false, error: null };

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
    },
    increaseStart: (state) => {
      state.start += 4;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, increaseStart, setLoading, setError } =
  usersSlice.actions;
export default usersSlice.reducer;
