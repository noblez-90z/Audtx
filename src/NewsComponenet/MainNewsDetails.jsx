import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addComment, downvoteNews, upvoteNews } from "./NewsSlice";
import arrowLeft from "../assets/ArrowLeft.svg";
import chatdot from "../assets/ChatDots.svg";
import arrowup from "../assets/ArrowFatLinesUp.svg";
import arrowdown from "../assets/ArrowFatLinesDown.svg";
import arrowline from "../assets/ArrowLineUpRight.svg";
import Arrowup from "../assets/ArrowUp.svg";
import send from "../assets/send.svg";

// import { addComment } from '../store/newsSlice';

const MainNewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const newsItem = useSelector((state) =>
  //   state.news.News.find((news) => news.id === id)
  // );
  const newsItem = useSelector((state) =>
    state.news.News.find((news) => String(news.id) === String(id))
  );
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");

  if (!newsItem) {
    return <p>News not found.</p>;
  }

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: `comment-${Date.now()}`,
        text: commentText,
        user: {
          id: user.id,
          name: user.name,
          profilePic: user.profilePic,
        },
        timestamp: new Date().toISOString(),
      };
      dispatch(addComment({ newsId: id, comment: newComment }));
      setCommentText("");
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="border  bg-[#121212]">
      <div className="container relative mx-auto px-4 py-10   rounded md:w-1/2 mt-6  bg-[#1C1C1C] text-white">
        <div className="mt-6">
          <h1 className="text-2xl font-bold mb-4">{newsItem.title}</h1>
          <p className="text-white mb-6">{newsItem.text}</p>
        </div>
        <div className="my-3">
          <img
            src={newsItem.image}
            alt=""
            className="w-full h-[250px] object-cover object-center"
          />
        </div>
        <div className="flex   items-center">
          <button
            onClick={() => dispatch(upvoteNews(newsItem.id))}
            className="text-green-500  text-sm"
          >
            Upvote {newsItem.upvotes}
          </button>
          <div className=" h-fit  flex item-center mx-2">
            <span className="text-xl font-bold mb-2 text-[#d1d1d1]">.</span>
          </div>
          <p className="text-sm">comments {newsItem.comments.length}</p>
          <div className=" h-fit  flex item-center mx-2">
            <span className="text-xl font-bold mb-2 text-[#d1d1d1]">.</span>
          </div>

          <button
            onClick={() => dispatch(downvoteNews(newsItem.id))}
            className="text-red-500 text-sm"
          >
            Downvote {newsItem.downvotes}
          </button>
        </div>

        <div className="mb-6 mt-6 ">
          {/* <h2 className="text-lg font-semibold mb-2">Comments</h2> */}
          <ul className="space-y-4">
            {newsItem.comments.map((comment) => (
              <li
                key={comment.id}
                className=" px-3 rounded text-white bg-[#454545]"
              >
                <div className="flex items-center mb-2">
                  <img
                    src={comment.user.profilePic}
                    alt={comment.user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="">
                    <span className="font-semibold">{comment.user.name}</span>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(comment.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-white">{comment.text}</p>

                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <img src={arrowup} alt="" className="w-4" />
                    <img src={chatdot} alt="" className="w-4" />
                    <img src={arrowdown} alt="" className="w-4" />
                  </div>
                  <img src={arrowline} alt="" className="w-6" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold mb-2">Add a Comment</h2>
          <div className="flex items-center  rounded h-fit">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full p-2  rounded mb-2 bg-[#454545] outline-none "
            />
            <button
              onClick={handleAddComment}
              className="px-2 py-1 bg-gray-500  rounded"
            >
              <img src={send} alt="" className="w-8" />
            </button>
          </div>
        </div>

        <div
          className=" w-fit absolute top-2 left-3 cursor-pointer flex space-x-3 items-center "
          onClick={handleGoBack}
        >
          <img src={arrowLeft} alt="" className="w-5" />
          <p className="font-semibold">post</p>
        </div>
      </div>
    </div>
  );
};

export default MainNewsDetails;
