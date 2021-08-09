import { useState, useEffect } from "react";
import IconFavorite from "../Assets/Images/Icon-Guardar.png";
import { addToFavorite, removeFromFavorites } from "../Utils/localStorage";

export const CardMovie = ({
  img,
  title,
  date,
  favoriteMovie,
  pageNumber,
  item,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    verificationIsFavorite();
    // eslint-disable-next-line
  }, [favoriteMovie]);

  const verificationIsFavorite = () => {
    const movieMap = favoriteMovie.map((titleMovie) => titleMovie.title);
    const movieIncludes = movieMap.includes(title);
    setIsFavorite(movieIncludes);
  };

  return (
    <div className="card">
      <div className="card__itens" style={{ backgroundImage: `url(${img})` }}>
        {!isFavorite && (
          <div className="card__itens--favorite">
            <img
              style={{ boxShadow: "0px 7px 8px 2px rgba(0,128,0,0.7)" }}
              onClick={() =>
                addToFavorite(item, "FavoriteMovies", isFavorite, setIsFavorite)
              }
              className="card__itens--favorite--img"
              src={IconFavorite}
              alt="IconFavorite"
            />
          </div>
        )}
        {isFavorite && (
          <div className="card__itens--favorite">
            <img
              style={{ boxShadow: "0px 7px 8px 2px rgba(255,0,0,0.7)" }}
              onClick={() =>
                removeFromFavorites(
                  item,
                  "FavoriteMovies",
                  isFavorite,
                  setIsFavorite
                )
              }
              className="card__itens--favorite--img"
              src={IconFavorite}
              alt="IconFavorite"
            />
          </div>
        )}
        <div className="card__itens--title">{title}</div>
        <div className="card__itens--date">{date}</div>
        <div className="card__itens--btn">
          <button className="btn btn--card">Trailer</button>
          <button className="btn btn--card">Assistir</button>
        </div>
      </div>
    </div>
  );
};
