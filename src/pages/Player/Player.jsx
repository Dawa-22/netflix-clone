import React, { useEffect, useState } from "react";
import "./Player.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Key } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    Key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzllNGUyOTAzM2FhOGEwMjM4ZmQwNDA2ODk5NDRmZCIsIm5iZiI6MTczMjczMDcwMC43ODIsInN1YiI6IjY3NDc1ZjRjZGE3NjdhYWUzMDQwZDAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9z6RIuEvCrc3Dev3E-HAT52dgoXDutObOYsIbNbPDq8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  });

  return (
    <div className="player">
      <ArrowBackIcon
        className="play-icon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width="90%>"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
