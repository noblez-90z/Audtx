import { createSlice } from "@reduxjs/toolkit";
import protest from "../assets/protest.svg";
import runing from "../assets/Runing.svg";
import police from "../assets/police.jpg";

const initialState = {
  News: [
    {
      id: "1",
      title: "try",
      text: "wertyuiousut",
      image: protest,
      upvotes: 10,
      downvotes: 2,
      comments: [],
    },
    {
      id: "2",
      title: "again",
      text: "wertyuiousut",
      image: runing,
      upvotes: 7,
      downvotes: 4,
      comments: [],
    },
    {
      id: 3,
      title: "diff",
      text: "wertyuiousut",
      image: police,
      upvotes: 13,
      downvotes: 2,
      comments: [],
    },
    {
      id: 4,
      title: "for",
      text: "wertyuiousut",
      image: protest,
      upvotes: 9,
      downvotes: 5,
      comments: [],
    },
  ],
  Trending: ["1", "2"], //both string and number id working fine
  Recent: [3, 4],
};
const NewsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    addNews: (state, action) => {
      const {
        id,
        title = "",
        text,
        image,
        upvotes = 0,
        downvotes = 0,
        comments = [],
        isTrending = false,
      } = action.payload;
      const newNews = {
        id,
        title: typeof title === "string" ? title : "",
        text: typeof text === "string" ? text : "",
        image,
        upvotes,
        downvotes,
        comments,
      };
      state.News.push(newNews);

      state.Recent.unshift(id);
      if (state.Recent.length > 5) state.Recent.pop();

      if (isTrending) {
        state.Trending.unshift(id);
        if (state.Trending.length > 5) state.Trending.pop();
      }
    },
    deleteNews: (state, action) => {
      const newsId = action.payload;
      state.News = state.News.filter((news) => news.id !== newsId);
      state.Recent = state.Recent.filter((id) => id !== newsId);
      state.Trending = state.Trending.filter((id) => id !== newsId);
    },

    setTrending: (state, action) => {
      const { id } = action.payload;
      if (!state.Trending.includes(id)) {
        state.Trending.unshift(id);
        if (state.Trending.length > 6) state.Trending.pop();
      }
    },
    addComment: (state, action) => {
      const { newsId, comment } = action.payload;
      const newsItem = state.News.find((news) => news.id === newsId);
      if (newsItem) newsItem.comments.push(comment);
    },
    upvoteNews: (state, action) => {
      const newsItem = state.News.find((news) => news.id === action.payload);
      if (newsItem) newsItem.upvotes += 1;
    },
    downvoteNews: (state, action) => {
      const newsItem = state.News.find((news) => news.id === action.payload);
      if (newsItem) newsItem.downvotes += 1;
    },
  },
});
export const {
  addNews,
  deleteNews,
  setTrending,
  addComment,
  upvoteNews,
  downvoteNews,
} = NewsSlice.actions;
export default NewsSlice.reducer;

// addNews: (state, action) => {
//   state.News.push(action.payload);
//   state.Recent.unshift(action.payload.id);
//   if (state.Recent.length > 5) state.Recent.pop();
// },
// setTrending: (state, action) => {
//   state.Trending = action.payload;
// },
