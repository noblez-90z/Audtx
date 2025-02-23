import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    id: null,
    name: "",
    surname: "",
    email: "",
    profilePic: "",
    password: "",
    notifications: [],
  },
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignUp: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser); //pushing new user to users array,// Store new user in the users array
    },
    Login: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        state.user = existingUser;
        state.isAuthenticated = true;
      }
    },
    Logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = {
        id: null,
        name: "",
        surname: "",
        email: "",
        profilePic: "",
        password: "",
        notifications: [],
      };
    },
    addNotification: (state, action) => {
      state.user.notifications.push(action.payload);
    },
    markNotificationRead: (state, action) => {
      const notif = state.user.notifications.find(
        (n) => n.id === action.payload
      );
      if (notif) notif.read = true;
    },
  },
});
export const { SignUp, Login, Logout, addNotification, markNotificationRead } =
  userSlice.actions;
export default userSlice.reducer;
