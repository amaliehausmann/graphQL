import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { allFilms } from "../queries/allFilms";
import { singleFilm } from "../queries/singleFilm";
import { Modal } from "../components/Modal/Modal";
import { useState } from "react";
import { Footer } from "../components/Footer/Footer";

export const Movies = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  const {
    data: allFilmsData,
    isLoading: allFilmsLoading,
    error: allFilmsError,
  } = useQuery({
    queryKey: ["allFilms"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilms
      ),
  });

  const { data: singleFilmData } = useQuery({
    queryKey: ["singleFilm", selectedFilmId],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        singleFilm,
        { filmId: selectedFilmId }
      ),
  });

  if (allFilmsLoading) {
    return <p>Loading all films...</p>;
  }

  if (allFilmsError) {
    return <p>Error loading films: {allFilmsError.message}</p>;
  }

  function handleSingleFilmClick(id) {
    setModalIsOpen(true);
    setSelectedFilmId(id);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <ul>
        {allFilmsData.allFilms.films.map((item) => (
          <li onClick={() => handleSingleFilmClick(item.id)} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>

      {modalIsOpen && singleFilmData && (
        <Modal
          title={singleFilmData.film.title}
          episode={singleFilmData.film.episodeID}
          producer={singleFilmData.film.producers}
          director={singleFilmData.film.director}
          crawl={singleFilmData.film.openingCrawl}
          released={singleFilmData.film.releaseDate}
          action={() => closeModal()}
        />
      )}
      <Footer />
    </div>
  );
};
