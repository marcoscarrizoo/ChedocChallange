import React, { useEffect } from "react";
import { getSeries, OrderSeries } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import "../cardStyles/cards.css";

const Series = () => {
  const dispatch = useDispatch();
  const series = useSelector((state) => state.series);

  const seriesFiltered = series.filter((serie) => serie.releaseYear >= 2010).slice(0, 20);
  
  useEffect(() => {
    dispatch(getSeries());
  }, []);

  function alphanumeric() {
    dispatch(OrderSeries(seriesFiltered));
  }
  return (
      <div>
<button  style={{ height: "50px", width: "100px", marginLeft: "50px" }}onClick={alphanumeric}>order series</button>
    <div className="cards-container">
      
      {seriesFiltered ? (
        seriesFiltered.map((serie) => (
          <div className="card-container">
            <img className="img" src={serie.images["Poster Art"].url} alt="" />
            <div className="title">{serie.title}</div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </div>
  );
};

export default Series;
