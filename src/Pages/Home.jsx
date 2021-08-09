import { useState, useEffect } from "react";

import { API } from "../Services/api";
import { requests } from "../Services/requests";

import LogoOscars from "../Assets/Images/Logo-Oscars.png";
import homeBg from "../Assets/Images/poligono.png";
import { ButtonDropdown } from "../Components/ButtonDropdown";

import { CardMovie } from "../Components/CardMovie";

export const HomePage = () => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { fetchTrending } = requests;
  const [typeRequisition, SetTypeRequisition] = useState(fetchTrending);
  const [pageNumber, setPageNumber] = useState(0);
  const [requestsApi, SetRequestsApi] = useState([]);
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  function randomNumber() {
    return Math.random() * (100 - 1) + 1;
  }

  async function handleApiData(typeRequisition, pageNumber) {
    const request = await API.get(`${typeRequisition}&page=${pageNumber}`);
    if (requestsApi.length === 0) {
      return SetRequestsApi(
        request.data.results.filter((item) => item.media_type === "movie")
      );
    }
    SetRequestsApi([
      ...new Set([
        ...requestsApi,
        ...request.data.results.filter((item) => item.media_type === "movie"),
      ]),
    ]);
  }

  useEffect(() => {
    if (pageNumber !== 0) {
      handleApiData(typeRequisition, pageNumber);
      setFavoriteMovie(
        JSON.parse(localStorage.getItem("FavoriteMovies")) || []
      );
    }
    // eslint-disable-next-line
  }, [pageNumber, typeRequisition]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPageNumber((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#Observer"));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <main className="home">
      <header style={{ backgroundImage: `url(${homeBg})` }}>
        <img className="home--img" src={LogoOscars} alt="Logo Oscars" />
        <div className="home--button">
          <ButtonDropdown
            setPageNumber={setPageNumber}
            SetTypeRequisition={SetTypeRequisition}
          />
        </div>
      </header>
      <section className="section-movies">
        {requestsApi.map((result) => (
          <CardMovie
            key={`${result.id}${randomNumber()}`}
            img={`${base_url}${result.poster_path}`}
            title={result.title}
            date={result.release_date}
            favoriteMovie={favoriteMovie}
            pageNumber={pageNumber}
            item={result}
          />
        ))}
      </section>
      <div id="Observer"></div>
    </main>
  );
};
