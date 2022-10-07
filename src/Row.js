// import axios from 'axios';
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import instance from "./axios";
import "./Row.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
    }
    fetchData();
  }, [fetchUrl]);
//   console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log(movie)
    if(trailerUrl)setTrailerUrl("");
    else{
        const ret = movie?.name || movie?.original_title || movie?.title || "";
        console.log(ret)
        movieTrailer(ret)//null,{tmdbId:movie.id})
        .then(url=>{
            console.log(url)
            const Url = new URL(url).searchParams;
            console.log(Url)
            const urlParams = new URLSearchParams(Url);
            console.log(urlParams)
            setTrailerUrl(urlParams.get("v"))
        }).catch(err=>console.log(err))
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* container => posters */}
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
