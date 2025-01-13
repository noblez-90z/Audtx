import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "./NewsSlice";
import cancelMenu from "../assets/cancel menu.svg";
import send from "../assets/send.svg";

const AddNewsForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isTrending, setIsTrending] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `news-${Date.now()}`;
    dispatch(addNews({ id, title, text, image, isTrending }));
    setTitle("");
    setText("");
    setImage("");
    setIsTrending(false);
    handleOpen();
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
    }
  };
  const [openAdd, setOpenAdd] = useState(true);
  const handleOpen = () => {
    setOpenAdd(false);
  };
  return (
    <div className="">
      {openAdd && (
        <form
          onSubmit={handleSubmit}
          className="p-4 mx-4 rounded md:w-[60%] absolute top-40 left-0 right-0 md:mx-auto z-10 bg-[#1C1C1C] shadow-lg"
        >
          <div className="flex justify-between py-3">
            <h2 className="text-lg font-semibold mb-4">Add News</h2>
            <div className="w-fit cursor-pointer" onClick={handleOpen}>
              <img src={cancelMenu} alt="" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2  rounded bg-[#454545]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2  rounded bg-[#454545]"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{ width: "200px", marginTop: "10px" }}
              />
            )}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={isTrending}
              onChange={(e) => setIsTrending(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm font-medium">Mark as Trending</label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              <img src={send} alt="" className="w-8" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNewsForm;
