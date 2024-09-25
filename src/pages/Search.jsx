import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { singleFilm } from "../queries/singleFilm";

export const Search = () => {
  const { filmID } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        singleFilm,
        { filmId: filmID }
      ),
  });

  console.log(filmID);

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading film: {error.message}</p>;
  }

  return (
    <div>
      <h1>Title: {data.film.title} </h1>
      <p>Producers: {data.film.producers}</p>
    </div>
  );
};
