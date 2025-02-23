// components/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./UserSlice";
import { Link, useNavigate } from "react-router-dom";

import eye from "../assets/eye.svg";
import eyeOff from "../assets/EyeOff.svg";

import Google from "../assets/Google.svg";
import Apple from "../assets/Vector.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(Login({ email, password }));
    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else if (!isAuthenticated) {
      alert("Login failed! Please check your credentials.");
    } else {
      alert("Login successful");
      navigate("/Home");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-black text-white flex justify-center items-center w-full h-svh">
      <div className="block rounded-lg shadow-lg w-full md:w-[60%]  bg-[#121212] ">
        <h2 className="py-3 text-center font-bold text-xl">
          Sign in to account{" "}
        </h2>
        <div className=" px-6">
          <div className="py-6">
            <label htmlFor="" className="font-semibold capitalize">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full rounded-md px-2 py-2 outline-none bg-[#1c1c1c]"
            />
          </div>
          <div className=" relative">
            <label htmlFor="" className="font-semibold capitalize">
              Password
            </label>
            <input
              type={showPassword ? "password" : "text"} // Show password if showPassword is true
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full rounded-md px-2 py-2 outline-none bg-[#1c1c1c]"
            />
            <div
              className="translateY(-50%) right-3 absolute top-10 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <img src={eye} alt="eye" />
              ) : (
                <img src={eyeOff} alt="eye" />
              )}
            </div>
          </div>
          <p className="py-2 text-left font-bold ">
            <Link to="/PasswordReset" className="capitalize">
              forgot password?{" "}
              <span className="text-[#367852] font-normal">resend it </span>
            </Link>
          </p>
          <button
            className="bg-[#367852] text-white block px-3 py-2 mx-auto  w-full md:w-[60%] my-4 rounded-lg font-bold"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <p className="w-full text-center py-4 capitalize">
            don't have an account?{" "}
            <span className="text-[#367852]">
              <Link to="/signUp"> sign up</Link>
            </span>{" "}
          </p>
          {isAuthenticated && (
            <p>
              Welcome, {user.name} {user.surname}!
            </p>
          )}
          <div className="flex space-x-3 justify-center items-center">
            <span className="h-[1px] w-full bg-gray-400"></span>
            <p className="w-full text-center text-gray-500">
              or continue with{" "}
            </p>
            <span className="h-[1px] w-full bg-gray-400"></span>
          </div>
          <div className="flex  justify-center gap-8 my-3">
            <div className="flex space-x-2 items-center py-2 px-5  rounded-md bg-[#1c1c1c] text-white">
              <img src={Google} alt="" className="w-5" />
              <p className="font-semibold">Google</p>
            </div>
            <div className="flex space-x-2 items-center py-2 px-5  rounded-md bg-[#1c1c1c] text-white">
              <img src={Apple} alt="" />

              <p className="font-semibold">apple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
