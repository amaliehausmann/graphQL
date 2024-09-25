import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import React from "react";
import { AllCharacters } from "../queries/AllCharacters";
import { Link } from "react-router-dom";

export const Characters = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllCharacters"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        AllCharacters
      ),
  });

  if (isLoading) {
    return <p>Loading all characters...</p>;
  }

  if (error) {
    return <p>Error loading characters: {error.message}</p>;
  }

  return (
    <div>
      <ul>
        {data.allPeople.people
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <Link to={`/singlecharacter/${item.id}`} key={item.id}>{item.name}</Link>
          ))}
      </ul>
    </div>
  );
};
