import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import styles from "./Row.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl, islargrow }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(fetchurl);
        // console.log(response);
        setMovie(response.data.results);
      } catch (error) {
        console.error("fecthing error:", error);
      }
    }
    fetchdata();
  }, [fetchurl]);

  // console.log(Movie);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    movieTrailer(movie.title || movie.name || movie.original_name)
      .then((url) => {
        if (url) {
          const videoId = new URL(url).searchParams.get("v");
          setTrailerUrl(videoId);
        }
      })
      .catch(() => console.log("Trailer not found"));
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className={styles["row-outer"]}>
        <h2>{title}</h2>

        <div className={styles["row-posters"]}>
          {movie.map((item) => (
            <img
              key={item.id}
              onClick={() => handleClick(item)}
              className={`${styles.poster} ${
                islargrow ? styles["poster-large"] : ""
              }`}
              src={`${baseurl}${
                islargrow ? item.poster_path : item.backdrop_path
              }`}
              alt="movie poster"
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
