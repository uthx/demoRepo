import React from "react";
import "./styles.css";
import { useState } from "react";
const songDB = {
  HipHop: [
    { name: "Kendrick Lamar", rating: 5 },
    { name: "J. Cole", rating: 5 },
    { name: "Eminem", rating: 5 },
    { name: "Drake", rating: 4.5 }
  ],
  Pop: [
    {
      name: "EdSheeran",
      rating: 4
    },
    {
      name: "Justin Bieber",
      rating: 3
    },
    {
      name: "Coldplay",
      rating: 4
    },
    {
      name: "Billie Eilish",
      rating: 4
    },
    {
      name: "Adele",
      rating: 4.5
    }
  ],
  Bollywood: [
    {
      name: "Arijit Singh",
      rating: 5
    },
    {
      name: "Jubin Nautiyal",
      rating: 5
    },
    {
      name: "A. R. Rahman",
      rating: 5
    },
    {
      name: "B Praak",
      rating: 5
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("HipHop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  const sortArray = (a, b) => {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  };

  return (
    <div>
      <div className="App">
        <h1> 🎵 Good Artists </h1>
        <p style={{ fontSize: "smaller" }}>
          {" "}
          Checkout my favorite Artists. Select a genre to get started{" "}
        </p>

        <div>
          {Object.keys(songDB)?.map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: genre === selectedGenre ? "#1D4ED8" : "#60A5FA",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem",
                color: "white"
              }}
              key={genre}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {songDB[selectedGenre]
              .sort((a, b) => sortArray(a, b))
              .map((artist) => (
                <li
                  key={artist.name}
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                    border: "1px solid #D1D5DB",
                    width: "70%",
                    margin: "1rem 0rem",
                    borderRadius: "0.5rem"
                  }}
                >
                  {" "}
                  <div style={{ fontSize: "larger" }}> {artist.name} </div>
                  <div style={{ fontSize: "smaller", padding: "0.3rem" }}>
                    {artist.rating}/5{" "}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
