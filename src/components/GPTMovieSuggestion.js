import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  // const movieNames = useSelector(store=>store.showGPTSearch.movieNames);
  //const gptResults = useSelector(store=>store.showGPTSearch.tmdnResult);
  const { movieNames, tmdbResult } = useSelector(
    (store) => store.showGPTSearch
  );
  if (!movieNames) return;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
      <div>
        {movieNames.map((name, index) => (
          <MovieList key={name} title={name} movies={tmdbResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
