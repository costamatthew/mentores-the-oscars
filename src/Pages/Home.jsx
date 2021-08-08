import { useState, useEffect } from "react";
import { API } from "../Services/api";
import { requests } from "../Services/requests";

import LogoOscars from "../Assets/Images/Logo-Oscars.png";
import { ButtonDropdown } from "../Components/ButtonDropdown";

import { CardMovie } from "../Components/CardMovie";

import { teste } from "../teste";

export const HomePage = () => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { fetchTrending } = requests;
  const [typeRequisition, SetTypeRequisition] = useState(fetchTrending);
  const [requestsApi, SetRequestsApi] = useState([]);

  const [testes, SetTeste] = useState(teste);

  function handleApiData(typeRequisition) {
    API.get(typeRequisition)
      .then((response) => SetRequestsApi(response))
      .then((response) => console.log(requestsApi));
  }

  // useEffect(() => {
  //   handleApiData(typeRequisition);
  // }, []);

  // useEffect(() => {
  //   handleApiData(typeRequisition);
  // }, [typeRequisition]);

  return (
    <main className="home">
      <header>
        <img className="home--img" src={LogoOscars} alt="Logo Oscars" />
        <ButtonDropdown SetTypeRequisition={SetTypeRequisition} />
      </header>
      <section className="section-movies">
        {testes.results.map((result) => (
          <CardMovie
            img={`${base_url}${result.backdrop_path}`}
            title={result.title}
            date={result.release_date}
          />
        ))}
      </section>
    </main>
  );
};
