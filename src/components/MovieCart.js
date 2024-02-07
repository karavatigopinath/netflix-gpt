import React from "react";
import { IMG_CDN_URL } from "../constants";

const MovieCart = ({ poster_path }) => {
  if (!poster_path) return;
  return (
    <div className="md:w-52 w-36 pr-4">
      {poster_path && <img alt="movie-cart" src={IMG_CDN_URL + poster_path} />}
    </div>
  );
};

export default MovieCart;
