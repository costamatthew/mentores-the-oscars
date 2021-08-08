import React, { useState, useEffect } from "react";
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
  const [pageNumber, setPageNumber] = useState(1);
  const [requestsApi, SetRequestsApi] = useState([]);

  async function handleApiData(typeRequisition, pageNumber) {
    const request = await API.get(`${typeRequisition}&page=${pageNumber}`);
    if (requestsApi.length === 0 || typeRequisition !== fetchTrending) {
      return SetRequestsApi(request.data.results);
    }
    SetRequestsApi([...new Set([...requestsApi, ...request.data.results])]);
    console.log(pageNumber);
  }

  useEffect(() => {
    handleApiData(typeRequisition, pageNumber);
    console.log(requestsApi);
  }, [pageNumber, typeRequisition]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPageNumber((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinela"));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <main className="home">
      <header>
        <img className="home--img" src={LogoOscars} alt="Logo Oscars" />
        <ButtonDropdown SetTypeRequisition={SetTypeRequisition} />
      </header>
      <section className="section-movies">
        <ul>
          {requestsApi.map((res) => (
            <CardMovie
              key={res.id}
              img={`${base_url}${res.poster_path}`}
              title={res.title}
              date={res.release_date}
            />
          ))}
          <li id="sentinela"></li>
        </ul>
        {/* {requestsApi.map((result) => (
          <CardMovie
            key={result.id}
            img={`${base_url}${result.poster_path}`}
            title={result.title}
            date={result.release_date}
          />
        ))} */}
      </section>
    </main>
  );
};
