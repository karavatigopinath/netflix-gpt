import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="w-4/12 absolute p-12 my-36 mx-auto bg-black bg-opacity-80 right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4"> {isSignIn ? "Sign In" : "Sign Up"}</h1>
        <input
          type="text"
          placeholder="email"
          className="p-2 my-4 w-full rounded-lg bg-gray-700"
        />
        {!isSignIn && <input
          type="text"
          placeholder="Full name"
          className="p-2 my-4 w-full rounded-lg bg-gray-700"
        />}
         <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full rounded-lg bg-gray-700"
        />
        <button className="p-4 rounded-lg my-6 bg-red-600 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>
        {isSignIn ? "New to Netflix? SignUp Now!" : "Already Registered, Sign In Now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
