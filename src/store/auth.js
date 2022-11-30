import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: !!localStorage.getItem('email'),
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      localStorage.setItem("email" , actions.payload);
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem("email");
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;