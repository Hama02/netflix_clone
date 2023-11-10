/* eslint-disable react/prop-types */
// 1:29:41
import { useEffect, useState } from "react";
import "./row.css";
import axios from "../../axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie?.poster_path) ||
              (!isLargeRow && movie?.backdrop_path)) && (
              <img
                key={movie?.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
