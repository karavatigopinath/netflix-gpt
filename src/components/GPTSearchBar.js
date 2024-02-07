import React, { useRef } from "react";
import { lang } from "../languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openAI from "../utils/openai";
import { API_OPTIONS } from "../constants";
import { json } from "react-router-dom";
import { addGPTMovieResult } from "../utils/GPTSlice";


const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.selectLag.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieInTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
    const json = await data.json();
    return json.results;
   }
  const handleGPTSearchClick = async () => {
    const query =
      "act as a movie recommendation system and suggest some movie for the query: " +
      searchText.current.value +
      ".only give the names of 5 movies, comma separated with example given ahead. Example Result : Kitakitalu, jambalakadipamba, hellobrother,fittingmaster, ahanapellanta";
    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptMovie = gptResults?.choices[0]?.message.content.split(',');
    const promiseArray = gptMovie.map(movie =>searchMovieInTMDB(movie));
    const tmdnResult = await Promise.all(promiseArray);
    dispatch(addGPTMovieResult({movieNames:gptMovie, tmdnResult:tmdnResult}));
  };
  return (
    <div className="md:pt-[10%] pt-[45%] flex justify-center">
      <form
        className="md:w-1/2 w-full grid grid-cols-12 bg-black bg-opacity-70 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 text-black"
          placeholder={lang[langKey].searchPlaceHolder}
        />
        <button
          className="bg-red-500 rounded-lg py-2 px-4 col-span-3 m-4 text-white"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
