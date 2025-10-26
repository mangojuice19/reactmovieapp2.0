import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c73c92c55ec9d9b1d302420a815b43e1";

const Player = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState("");
  const [videoInfo, setVideoInfo] = useState({
    publishedAt: "",
    name: "",
    type: ""
  });

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();

        const trailer = data.results.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );

        if (trailer) {
          setVideoKey(trailer.key);
          setVideoInfo({
            publishedAt: trailer.published_at
              ? new Date(trailer.published_at).toLocaleDateString()
              : "N/A",
            name: trailer.name,
            type: trailer.type
          });
        }
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };

    if (movieId) fetchTrailer();
  }, [movieId]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      {videoKey ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title={videoInfo.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
      <div className="player-info">
        <p>{videoInfo.publishedAt}</p>
        <p>{videoInfo.name}</p>
        <p>{videoInfo.type}</p>
      </div>
    </div>
  );
};

export default Player;