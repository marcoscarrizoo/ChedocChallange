import React, { useEffect } from "react";
import {
  getDetail,
  getSeries,
  OrderSeries,
  closeModal 
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import "../cardStyles/cards.css";


const Series = () => {
  const dispatch = useDispatch();
  const series = useSelector((state) => state.series);
  const serieDetail = useSelector((state) => state.detail);
  const seriesFiltered = series
    .filter((serie) => serie.releaseYear >= 2010)
    .slice(0, 20);

  useEffect(() => {
    dispatch(getSeries());
  }, []);

  function alphanumeric() {
    dispatch(OrderSeries(seriesFiltered));
  }

  function detail(title) {
    dispatch(getDetail(title));
  }

  function close() {
    dispatch(closeModal());
  }
  return (
    <div>
      <div className='recommended-title'>SERIES</div>
      <button
        style={{ height: "50px", width: "100px", marginLeft: "50px" }}
        onClick={alphanumeric}
      >
        alphanumeric order
      </button>

      <div className="cards-container">
        {seriesFiltered !== 0 ? (
          seriesFiltered.map((serie) => (
            <div className="card-container">
              <img
                className="img"
                src={serie.images["Poster Art"].url}
                alt=""
              />
              <div className="title">
                {
                  <button
                    onClick={() => detail(serie.title)}
                    className="button"
                  >
                    {serie.title}
                  </button>
                }
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>

      {serieDetail?.map((e) => (
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
    </div>
  );
};

export default Series;
