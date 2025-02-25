import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";


function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fechdata() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        console.log(request);

        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fechdata();
  }, []);
  // console.log(movie);
 const truncate = (str, num) => {
   return str?.length > num ? str.substr(0, num - 1) + "..." : str;
 };

  const baseurl = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${baseurl}${movie.backdrop_path})`,
        }}
      >
        <div className={styles["banner-content"]}>
          <div className={styles.title}>
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          </div>
          <div className={styles.button}>
            <button className={styles["paly-button"]}>play</button>
            <button className={styles["mylist-button"]}>Mylist</button>
          </div>
          <div className={styles["banner-discription"]}>{truncate(movie.overview,150)}</div>
        </div>
        <div className={styles["banner-shadow"]}></div>
      </div>
    </>
  );
}

export default Banner;
