import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OrderMovies,
  getMovies,
  getDetail,
  closeModal,
} from "./../../redux/actions/actions";
import "../cardStyles/cards.css";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const movieDetail = useSelector((state) => state.detail);
  const moviesFiltered = movies
    .filter((movie) => movie.releaseYear >= 2010)
    .slice(0, 20);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  function alphanumeric() {
    dispatch(OrderMovies(moviesFiltered));
  }

  function detail(title) {
    dispatch(getDetail(title));
  }

  function close() {
    dispatch(closeModal());
  }

  return (
    <>
    <div className='recommended-title'>MOVIES</div>
      <button
        style={{ height: "50px", width: "100px", marginLeft: "50px" }}
        onClick={alphanumeric}
      >
        alphanumeric order
      </button>
      <div className="cards-container">
        {moviesFiltered.length !== 0 ? (
          moviesFiltered.map((card) => (
            <div className="card-container">
              <img className="img" src={card.images["Poster Art"].url} alt="" />
              <div className="title">
                {
                  <button onClick={() => detail(card.title)} className="button">
                    {card.title}
                  </button>
                }
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>

      {movieDetail?.map((e) => (
        <div className="card-detail-container">
          <div className="card-detail">
            <div>{e.title}</div>
            <img
              className="img-detail"
              src={e.images["Poster Art"].url}
              alt=""
            />
            <div>Description: {e.description}</div>
            <div>Release Year: {e.releaseYear}</div>
            <div>
              <button className="button" onClick={close}>
                cerrar
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
