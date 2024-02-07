import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../constants";

export default function GPTSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="" className="h-screen md:h-auto object-cover"/>
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
}
