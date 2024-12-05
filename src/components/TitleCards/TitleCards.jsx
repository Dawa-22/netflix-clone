import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardsRef = useRef();

  const API_KEY = "e79e4e29033aa8a0238fd040689944fd";

  const handleWheel = (event) => {
    event.preventDefault();
    const scrollSpeed = 100;
    cardsRef.current.scrollLeft +=
      event.deltaY > 0 ? scrollSpeed : -scrollSpeed;
  };

  useEffect(() => {
    console.log("Fetching data for category:", category);
    setLoading(true);
    setError(null);

    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("API Response:", res);


        const sortedMovies = res.results.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateB - dateA;
        });
        setApiData(sortedMovies);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Something went wrong, please try again later.");
        setLoading(false);
      });

    const currentRef = cardsRef.current;
    currentRef.addEventListener("wheel", handleWheel);

    return () => {
      currentRef.removeEventListener("wheel", handleWheel);
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p> 
        ) : apiData.length > 0 ? (
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={
                  card.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                    : card.poster_path
                    ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
                    : "https://via.placeholder.com/500x281?text=No+Image"
                }
                alt={card.original_title || "Movie Image"}
              />
              <p>{card.original_title}</p>
            </Link>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default TitleCards;
