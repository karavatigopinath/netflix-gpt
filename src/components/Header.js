import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/GPTSlice";
import { SUPPORTED_LANGUAGES } from "../constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGPTSearch = useSelector(store=>store.showGPTSearch.showGPTSearch);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGPTSearch = ()=>{
    dispatch(toggleGPTSearch())
  }
  const chooseLang = (e)=>{
     dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-full md:px-8 px-0 md:py-2 bg-gradient-to-b from-black z-10 justify-between
      flex flex-col md:flex-row">
      <img
        className="w-40 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
      {user && (
        <div className="flex p-2">
         {showGPTSearch && <select onChange={chooseLang} className="p-2 m-2 text-white bg-gray-800">
          {
            SUPPORTED_LANGUAGES.map(language=><option key={language.identifier} value={language.identifier}>{language.name}</option>)
          }
          </select>}
          
        <button onClick={handleGPTSearch} className="bg-purple-800 text-white mx-4 px-4 py-0 my-2 rounded-lg">
        { showGPTSearch ? "Homepage" : "GPT Search"}
        </button>
          <img
            className="w-10 h-10 m-2 rounded-lg my-3"
            alt="UImg"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignout}
            className="bg-red-500 w-22  px-4 text-center rounded-lg my-4 h-8"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
