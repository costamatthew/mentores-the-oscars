import { useState } from "react";
import { requests } from "../Services/requests";

export const ButtonDropdown = ({ setPageNumber, SetTypeRequisition }) => {
  const [open, SetOpen] = useState(false);

  const { fetchTopRated, fetchActionMovies, fetchComedyMovies } = requests;

  function handleFilterMovie(requestName) {
    setPageNumber(1);
    SetTypeRequisition(requestName);
  }

  function handleOpenToggle() {
    SetOpen(!open);
  }

  return (
    <div>
      <button className="btn" onClick={() => handleOpenToggle()}>
        Filtrar Por
      </button>
      {open && (
        <div className="dropdown">
          <ul>
            <li onClick={() => handleFilterMovie(fetchTopRated)}>
              Ordem Alfabética
            </li>
            <li onClick={() => handleFilterMovie(fetchActionMovies)}>
              Score do IMDB
            </li>
            <li onClick={() => handleFilterMovie(fetchComedyMovies)}>
              Duração
            </li>
            <li>Número de Indicações</li>
          </ul>
        </div>
      )}
    </div>
  );
};
