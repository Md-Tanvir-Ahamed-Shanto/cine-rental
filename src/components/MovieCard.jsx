/* eslint-disable */

import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import MovieDetails from "./MovieDetails";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);
  const handleClose = () => {
    setSelectedMovie(null);
    setIsShow(false);
  };
  const handleShowDetails = (movie) => {
    setIsShow(true);
    setSelectedMovie(movie);
  };

  const handleAddMovie = (movie) => {
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`${movie.title} Added Succesfully`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`the ${movie.title} was allready added`);
    }
  };
  return (
    <>
      {isShow && <MovieDetails movie={selectedMovie} onClose={handleClose} />}

      <figure className="p-4 border border-black/10 shadow-sm  rounded-xl dark:border-white/10">
        <img
          className=" object-cover size-[440px]"
          onClick={() => {
            handleShowDetails(movie);
          }}
          src={movie.cover}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating rating={movie.rating} />
          </div>
          <button
            onClick={() => {
              handleAddMovie(movie);
            }}
          >
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span> {movie.price} | Add to Cart</span>
            </a>
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
