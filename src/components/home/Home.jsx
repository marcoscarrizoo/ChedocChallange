import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home-title">
        <h1 className="titles">Popular Titles</h1>
      </div>
      <main className="main-content">
        <section className="section">
          <Link className="link" to="/movies">
            <div className="card">MOVIES</div>
          </Link>

          <Link className="link" to="/series">
            <div className="card">SERIES</div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
