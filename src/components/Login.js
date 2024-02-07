import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButton = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) {
      return;
    }

    if (!isSignIn) {
      // Sign Up login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const { uid, email, displayName,photoURL} = user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJ7auY0YjBwAgBOpJdSLQQzd7dqjWyV3l-06GXQ0szbQIU=s432-c-no"
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName,photoURL} = auth.currentUser;
            dispatch(addUser({ uid, email, displayName,photoURL }));
          }).catch((error) => {
            setErrorMessage(error.message);
            // An error occurred
            // ...
          });
          dispatch(addUser({ uid, email, displayName,photoURL }));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName,photoURL } = user;
          dispatch(addUser({ uid, email, displayName,photoURL }));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-auto"
          src={BG_URL}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-4/12 w-full absolute md:p-12 p-6 md:my-36 my-24 mx-auto rounded-lg bg-black bg-opacity-80 right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 my-4 w-full rounded-lg bg-gray-700"
        />
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full name"
            className="p-2 my-4 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-2 my-4 w-full rounded-lg bg-gray-700"
        />
        <p className="text-red-400 text-lg font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 rounded-lg my-6 bg-red-600 w-full"
          onClick={handleButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? SignUp Now!"
            : "Already Registered, Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
