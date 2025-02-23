import { useDispatch, useSelector } from "react-redux";
import { markNotificationRead } from "./UserSlice";
import arrowLeft from "../assets/ArrowLeft.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleMarkAsRead = () => {
    dispatch(markNotificationRead());
  };
  const handleMarkAllAsRead = () => {
    user.notifications.forEach((notif) => {
      if (!notif.read) {
        dispatch(markNotificationRead(notif.id));
      }
    });
  };
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
  useEffect(() => {
    setRelativeTime(formatRelativeTime(time));

    const interval = setInterval(() => {
      setRelativeTime(formatRelativeTime(time));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [time]);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#121212] flex justify-center h-[700px] w-full">
      <div className="px-4 py-10  rounded md:w-1/2 mt-6  bg-[#1C1C1C] text-white ">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={arrowLeft}
              alt=""
              className="w-5 cursor-pointer"
              onClick={handleGoBack}
            />
            <h2>Notifications</h2>
          </div>
          <button
            onClick={handleMarkAllAsRead}
            disabled={user.notifications.every((notif) => notif.read)}
          >
            Mark All as Read
          </button>
        </div>
        <ul>
          {user.notifications.map((notif) => (
            <li
              key={notif.id}
              style={{ color: notif.read ? "gray" : "white" }}
              className="bg-[#454545] p-2 my-2 rounded-md"
            >
              <p className="mb-5">{notif.message}</p>
              <span>{relativeTime}</span>

              {/* {!notif.read && (
              <button onClick={() => handleMarkAsRead(notif.id)}>
                Mark as Read
              </button>
            )} this marks each of the notification as read */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
