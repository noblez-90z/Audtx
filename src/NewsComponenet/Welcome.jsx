import { Link } from "react-router-dom";
import frame from "../assets/frame.svg";
const Welcome = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className=" md:w-[60%] mx-auto my-6 p-6 rounded-lg bg-[#121212] text-center text-white">
        <img src={frame} alt="" className="w-[200px] mx-auto mb-4" />
        <h1 className="font-bold text-2xl mb-2">Welcome to AudtX</h1>
        <p className="text-gray-500 leading-tight font-normal">
          {" "}
          We are glad to have you here, Your contribution is what keeps us going{" "}
        </p>
        <button className="bg-[#367852] capitalize text-white block px-3 py-2 mx-auto my-4 w-full md:w-[60%]  rounded-lg font-bold">
          <Link to="/Home">get started</Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
