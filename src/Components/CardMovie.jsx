import IconFavorite from "../Assets/Images/Icon-Guardar.png";

export const CardMovie = ({ img, title, date }) => {
  return (
    <div className="card">
      <div className="card__itens" style={{ backgroundImage: `url(${img})` }}>
        <div className="card__itens--favorite">
          <img
            className="card__itens--favorite--img"
            src={IconFavorite}
            alt="IconFavorite"
          />
        </div>
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
