import { useState } from "react";
import { addNews } from "./NewsSlice";
import { useDispatch } from "react-redux";

const AddNews = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");
  const [newsImage, setNewsImage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newsText && newsImage) {
      const newNewsItem = {
        id: Date.now(),
        title: newsTitle,
        text: newsText,
        user: "Current User", // Replace with actual user data
        time: "Just now",
        image: newsImage,
        upvotes: 0,
        comments: 0,
      };
      const newNewsItems = {
        id: Date.now(),
        title: newsTitle,
        text: newsText,
        user: "Current User", // Replace with actual user data
        time: "Just now",
        image: newsImage,
        upvotes: 0,
        comments: 0,
      };
      dispatch(addNews(newNewsItems));
      console.log("added");
      console.log(newNewsItems);
      setNewsText("");
      setNewsImage("");
    }
  };
  return (
    <div className="">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add news text..."
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add news text..."
          value={newsText}
          onChange={(e) => setNewsText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL..."
          value={newsImage}
          onChange={(e) => setNewsImage(e.target.value)}
        />
        <button type="submit">Add News</button>
      </form>
    </div>
  );
};

export default AddNews;
