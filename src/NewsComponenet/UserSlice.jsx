import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "user-id",
    name: "John Doe",
    profilePic: "https://example.com/profile.jpg",
    notifications: [],
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
export const { addNotification, markNotificationRead } = userSlice.actions;
export default userSlice.reducer;
