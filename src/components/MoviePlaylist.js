import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../store";

function MoviePlaylist() {
  const dispatch = useDispatch();

  // To Do:
  // Get list of movies
  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie("DRUM"));
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie());
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button onClick={handleMovieAdd} className="button is-link">
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
