import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function App() {
  //8c842e8a
  const [movies, setMovies] = useState([]);

  const [SearchTerm, setSearchTerm] = useState("");

  const API_URL = "http://www.omdbapi.com?apikey=8c842e8a";

  const movie1 = {
    Title: "Italian Spiderman",
    Year: "2007",
    imdbID: "tt2705436",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  };
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search movie"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={() => SearchMovies(SearchTerm)}>search</button>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
