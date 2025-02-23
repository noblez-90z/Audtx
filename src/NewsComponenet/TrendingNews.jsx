import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { downvoteNews, upvoteNews } from "./NewsSlice";
import Arrowright from "../assets/ArrowLineUpRight.svg";
import Dot from "../assets/ChatDots.svg";
import ArrowUp from "../assets/ArrowFatLinesUp.svg";
import ArrowDown from "../assets/ArrowFatLinesDown.svg";
import { useEffect, useState } from "react";

import SkeletonLoading from "./SkeletonLoaing";

const TrendingNews = () => {
  const trendingNews = useSelector((state) =>
    state.news.News.filter((news) => state.news.Trending.includes(news.id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a delay
    setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds delay
  }, []);

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Trending News</h2>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trendingNews.map((news) => (
            <div key={news.id} className=" p-3 rounded h-fit">
              <img
                src={news.image}
                alt=""
                className="w-full h-[200px]  rounded object-cover object-center"
              />
              <h3
                className="font-bold cursor-pointer mt-3"
                onClick={() => navigate(`/news/${news.id}`)}
              >
                {news.title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p>{news.text.substring(0, 100)}...</p>
                <img src={Arrowright} alt="" />
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => dispatch(upvoteNews(news.id))}
                    className="text-green-500  flex items-center"
                  >
                    <img src={ArrowUp} alt="" />
                    <p>{news.upvotes}</p>
                  </button>
                  <button
                    onClick={() => dispatch(downvoteNews(news.id))}
                    className="text-red-500 flex items-center"
                  >
                    <img src={ArrowDown} alt="" />
                    <p>{news.downvotes}</p>
                  </button>
                </div>
                <Link to={`/news/${news.id}`}>
                  <span className="flex items-center">
                    <img src={Dot} alt="" />
                    <p>{news.comments.length}</p>{" "}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingNews;

{
  /* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  {trendingNews.map((news) => (
    <div key={news.id} className=" p-3 rounded h-fit">
      <img
        src={news.image}
        alt=""
        className="w-full h-[200px]  rounded object-cover object-center"
      />
      <h3
        className="font-bold cursor-pointer mt-3"
        onClick={() => navigate(`/news/${news.id}`)}
      >
        {news.title}
      </h3>
      <div className="flex items-center justify-between mt-2">
        <p>{news.text.substring(0, 100)}...</p>
        <img src={Arrowright} alt="" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex space-x-2">
          <button
            onClick={() => dispatch(upvoteNews(news.id))}
            className="text-green-500  flex items-center"
          >
            <img src={ArrowUp} alt="" />
            <p>{news.upvotes}</p>
          </button>
          <button
            onClick={() => dispatch(downvoteNews(news.id))}
            className="text-red-500 flex items-center"
          >
            <img src={ArrowDown} alt="" />
            <p>{news.downvotes}</p>
          </button>
        </div>
        <Link to={`/news/${news.id}`}>
          <span className="flex items-center">
            <img src={Dot} alt="" />
            <p>{news.comments.length}</p>{" "}
          </span>
        </Link>
      </div>
    </div>
  ))}
</div>; */
}
//code is working fine
