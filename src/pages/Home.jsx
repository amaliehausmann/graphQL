import { useQuery } from "@tanstack/react-query";
import React from "react";
import request from "graphql-request";
import { allFilms } from "../queries/allFilms";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allFilms"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilms
      ),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading films: {error.message}</p>;
  }

  console.log(data);

  //Vi skal have fat i ID på en bestemt film når vi klikker på filmens titel

  function getID(id) {
    console.log("selected ID", id);
  }

  return (
    <div>
      {data.allFilms.films.map((item) => (
        <Link to={`/search/${item.id}`} key={item.title}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
