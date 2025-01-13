import React, { useState } from "react";
import { useSelector } from "react-redux";
// import AddNews from "./AddDetails";
import AddNewsForm from "./AddNewsForms";
import { Link, useNavigate } from "react-router-dom";
import bell from "../assets/BellSimple.svg";
import Logo from "../assets/Logo.svg";
import plus from "../assets/Plus.svg";
import funel from "../assets/Funnel.svg";
import search from "../assets/MagnifyingGlass.svg";

const NewsHeader = () => {
  const [query, setQuery] = useState("");
  const News = useSelector((state) => state.news.News);
  const navigate = useNavigate();
  // const filteredNews = News.filter((item) => {
  //   item.title?.toLowerCase.includes(query.toLowerCase());
  // });
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpen = () => {
    setOpenAdd(!openAdd);
  };
  const filteredNews = News.filter((item) => {
    const title = typeof item.title === "string" ? item.title : "";
    return title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="md:px-8  py-2">
      <div className="hidden md:flex justify-between items-center">
        <div className="logo ">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="search w-1/2 relative">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
              className="w-full px-8  py-2  border-gray-300 rounded bg-[#1C1C1C] outline-none"
            />
            <img src={search} alt="" className="absolute top-3 left-2" />
          </div>
          {query && (
            <ul className="bg-white border border-gray-300 rounded mt-2">
              {filteredNews.map((item) => (
                <li
                  key={item.id}
                  className="p-2 hover:bg-gray-100"
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
          <div className="absolute top-3 right-2  bg-[#454545]  rounded">
            <img src={funel} alt="" />
          </div>
        </div>
        <div className="">
          <img src={bell} alt="" />
        </div>
      </div>
      <div className="notification"></div>
      {/* <AddNews /> */}
      <div
        className=" w-fit fixed bottom-20 right-10 cursor-pointer border bg-gray-300 rounded-full p-2"
        onClick={handleOpen}
      >
        <img src={plus} alt="" />
      </div>
      {openAdd && <AddNewsForm />}
      <div className="mobile md:hidden">
        <div className="flex justify-between">
          <div className="logo ">
            <img src={Logo} alt="" />
          </div>
          <div className="">
            <img src={bell} alt="" />
          </div>
        </div>
        <div className="mt-4">
          <div className="search relative ">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
              className="w-full p-2 border border-gray-300 rounded"
            />
            {query && (
              <ul className="bg-white border border-gray-300 rounded mt-2">
                {filteredNews.map((item) => (
                  <li
                    key={item.id}
                    className="p-2 hover:bg-gray-100"
                    onClick={() => navigate(`/news/${item.id}`)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
            <div className="absolute top-3 right-2  bg-[#D1D1D1] rounded ">
              <img src={funel} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
