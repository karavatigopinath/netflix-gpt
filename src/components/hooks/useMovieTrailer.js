import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../constants";
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const getMovieBackground = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
          API_OPTIONS
        );
        const json = await data.json();
    
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
        console.log(trailer)
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieBackground();
      }, []);
    
}

export default useMovieTrailer