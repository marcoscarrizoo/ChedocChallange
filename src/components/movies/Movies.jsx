import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderMovies, getMovies } from "./../../redux/actions/actions";
import "../cardStyles/cards.css";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const moviesFiltered = movies.filter((movie) => movie.releaseYear >= 2010).slice(0, 20);


  useEffect(() => {
   
dispatch(getMovies());
   

 
    
  }, []);

  function alphanumeric() {
   dispatch(OrderMovies(moviesFiltered))
    
  }

  return (
    <div>
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
              <div className="title">{card.title}</div>
            </div>
          ))
        ) : (
          <div>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
        )}
      </div>
    </div>
  );
};

export default Movies;
