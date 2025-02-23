// components/SignUpForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "./UserSlice";
import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/Google.svg";
import Apple from "../assets/Vector.svg";
import eye from "../assets/eye.svg";
import eyeOff from "../assets/EyeOff.svg";

const SignUpForm = () => {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    const newUser = { FullName, email, password };
    dispatch(SignUp(newUser)); // Dispatch sign-up action with user details
    // alert("Sign-up successful! You can now log in.");
    console.log(newUser);
    alert("Sign-up successful! You can now log in.");
  };
  const [showPassword, setShowPassword] = useState(false);
  const validate = () => {
    if (!name || !email || !password || !Cpassword) {
      alert("all fields are required");
    }
    if (!email.includes("@")) {
      alert("invalid email");
    }
    if (password.length < 6) {
      alert("password must be at least 6 characters");
    }
    if (password !== Cpassword) {
      alert("password does not match");
    } else {
      handleSignUp();
      navigate("/SignIn");
    }
  };

  return (
    <div className="flex justify-center items-center bg-black ">
      <div className="bg-[#121212] text-white shadow-lg rounded-lg w-full md:w-[70%]  my-20">
        <h2 className="py-3 px-6 font-bold text-2xl">Create your account </h2>
        <div className=" px-6">
          <div className="py-2 mt-3">
            <label htmlFor="" className="font-semibold capitalize">
              FullName{" "}
            </label>
            <input
              type="text"
              placeholder="Name"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              className=" w-full rounded-md px-2 py-2 outline-none bg-[#1c1c1c] text-white"
            />
          </div>

          <div className="py-2">
            <label htmlFor="" className="font-semibold capitalize">
              Email{" "}
            </label>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full rounded-md px-2 py-2 outline-none bg-[#1c1c1c] text-white"
            />
          </div>
          <div className="py-2 relative">
            <label htmlFor="" className="font-semibold capitalize">
              create password{" "}
            </label>

            <input
              type={showPassword ? "password" : "text"} // Show password if showPassword is true
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full rounded-md px-2 py-2 outline-none bg-[#1c1c1c] text-white"
            />
            <div
              className="translateY(-50%) right-3 absolute top-12 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <img src={eye} alt="eye" />
              ) : (
                <img src={eyeOff} alt="eye" />
              )}
            </div>
          </div>
          <div className="py-2 relative">
            <label htmlFor="" className="font-semibold capitalize">
              Confirm Password{" "}
            </label>

            <input
              type={showPassword ? "password" : "text"} // Show password if showPassword is true
              placeholder="Confirm password"
              value={Cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              className=" w-full rounded-md px-2 py-2 outline-none bg-[#1c1c1c] text-white"
            />
            <div
              className="translateY(-50%) right-3 absolute top-12 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <img src={eye} alt="eye" />
              ) : (
                <img src={eyeOff} alt="eye" />
              )}
            </div>
          </div>
          <p className="text-center">
            By signing up u accept our{" "}
            <span className="text-[#367852]">terms of service</span> and{" "}
            <span className="text-[#367852]">privacy</span>{" "}
          </p>
          <button
            className="bg-[#367852] text-white block px-3 py-2 mx-auto my-4 w-full md:w-[60%]  rounded-lg font-bold"
            onClick={validate}
          >
            Create account
          </button>
          <p className="w-full text-center  py-2 capitalize ">
            already have an account?{" "}
            <span className="text-[#367852]">
              <Link to="/SignIn"> sign in </Link>
            </span>{" "}
          </p>
          {/* <p className="capitalize text-center py-3">
            return to
            <Link className="pl-2 text-blue-600 capitalize" to="/">
              HomePage
            </Link>
          </p> */}
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

export default SignUpForm;
