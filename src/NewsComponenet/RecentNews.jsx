import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteNews, downvoteNews, upvoteNews } from "./NewsSlice";
import Dot from "../assets/ChatDots.svg";
import ArrowUp from "../assets/ArrowFatLinesUp.svg";
import ArrowDown from "../assets/ArrowFatLinesDown.svg";
import Arrowright from "../assets/ArrowLineUpRight.svg";
import dotThree from "../assets/DotsThree.svg";
import { useEffect, useState } from "react";
import SkeletonLoading from "./SkeletonLoaing";
import { addNotification } from "./UserSlice";
import Notification from "./Notification";

const RecentNews = () => {
  const recentNews = useSelector((state) =>
    state.news.News.filter((news) => state.news.Recent.includes(news.id))
  );
  const news = useSelector((state) => state.news.News);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subMenu, setSubMenu] = useState(null);
  // const handleSub = () => {
  //   setSubMenu(subMenu === news.id ? null : news.id);
  // };

  const [time, setTime] = useState(new Date());
  const [relativeTime, setRelativeTime] = useState("");

  const formatRelativeTime = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return "just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  // Update relative time every 30 seconds
  useEffect(() => {
    setRelativeTime(formatRelativeTime(time));

    const interval = setInterval(() => {
      setRelativeTime(formatRelativeTime(time));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [time]);

  const handleDelete = (id) => {
    dispatch(deleteNews(id));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a delay
    setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds delay
  }, []);
  //sending Notification

  // const { user } = useSelector((state) => state.user);
  const handleSendNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      read: false,
    };
    dispatch(addNotification(newNotification));
  };

  return (
    <div className="mt-5">
      <h2 className="text-lg font-semibold mb-4">Recent News</h2>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {recentNews.map((news) => (
            <div key={news.id} className=" p-4 rounded bg-[#1C1C1C] mb-6">
              <div className="flex justify-between py-2">
                <div className="flex space-x-2 items-center">
                  <p>name</p>
                  <span className="font-bold text-xl mb-2 text-[#d1d1d1]">
                    .
                  </span>
                  {/* <span>{Date.now()}</span> */}
                  {/* <span>{new Date().toISOString()}</span> */}
                  {/* <span>{new Date().toLocaleString()}</span> */}
                  <span>{relativeTime}</span>
                </div>
                <div
                  className="cursor-pointer relative"
                  onClick={() =>
                    setSubMenu(subMenu === news.id ? null : news.id)
                  }
                >
                  <img src={dotThree} alt="" className="w-[20px]" />
                  <div className="">
                    {subMenu === news.id && (
                      <div className="absolute top-5 right-2 list-none">
                        <button onClick={() => handleDelete(news.id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <h3
                className="font-bold cursor-pointer"
                onClick={() => navigate(`/news/${news.id}`)}
              >
                {news.title}
              </h3>
              <p>{news.text.substring(0, 100)}...</p>
              <div className="my-3">
                <img
                  src={news.image}
                  alt=""
                  className="w-full h-[250px] object-cover object-center"
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-between mt-2  space-x-3">
                  <button
                    onClick={() => dispatch(upvoteNews(news.id))}
                    className="text-green-500  px-2 flex items-center  bg-[#454545] rounded-xl space-x-2 "
                  >
                    <img
                      src={ArrowUp}
                      alt=""
                      onClick={() =>
                        handleSendNotification("Your post was liked!")
                      }
                    />
                    <p>upvote</p>
                    <span
                      className=" h-5 bg-[#D1D1D1] 
                  border"
                    ></span>
                    <span>{news.upvotes}</span>
                  </button>
                  <span>
                    <Link
                      to={`/news/${news.id}`}
                      className="flex items-center space-x-1"
                    >
                      <img src={Dot} alt="" />
                      <p>{news.comments.length}</p>
                    </Link>
                  </span>
                  <button
                    onClick={() => dispatch(downvoteNews(news.id))}
                    className="text-red-500 flex items-center space-x-1"
                  >
                    <img src={ArrowDown} alt="" />
                    <p>{news.downvotes}</p>
                  </button>
                </div>
                <p>
                  <Link to={`/news/${news.id}`}>
                    <img src={Arrowright} alt="" className="w-[20px]" />
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <div className="">
        <h2>news</h2>
        {news.map((news) => (
          <div className="">
            <h3
              className="font-bold cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)}
            >
              {news.title}
            </h3>
            <p>{news.text.substring(0, 100)}...</p>
          </div>
        ))}
      </div> */}
      {/* //news working fine */}
    </div>
  );
};

export default RecentNews;

//  <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen(dropdownOpen === news.id ? null : news.id)}
//                 className="text-gray-500 hover:text-black focus:outline-none"
//               >
//                 ⋮
//               </button>
//               {dropdownOpen === news.id && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//                   <button
//                     onClick={() => handleDelete(news.id)}
//                     className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

// const [dropdownOpen, setDropdownOpen] = useState(null);
