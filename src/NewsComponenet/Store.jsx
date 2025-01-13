import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./NewsSlice";
import UserSlice from "./UserSlice";

const Store = configureStore({
  reducer: {
    news: NewsSlice,
    user: UserSlice,
  },
});
export default Store;
