import { useState } from "react";

export const ButtonDropdown = ({ children }) => {
  const [open, SetOpen] = useState(false);

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
            <li>Ordem Alfabética</li>
            <li>Score do IMDB</li>
            <li>Duração</li>
            <li>Número de Indicações</li>
          </ul>
        </div>
      )}
    </div>
  );
};
