import { createSlice } from "@reduxjs/toolkit";

// ✅ Load from localStorage
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // LOGIN
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // LOGOUT
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      // Remove from localStorage
      localStorage.removeItem("user");
    },

  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;