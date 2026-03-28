import React, { useState } from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export default function SearchMovies() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=29a3a45b6f4ef56886830af38b2b5829&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name{" "}
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search{" "}
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
