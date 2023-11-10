import { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          res.data?.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
