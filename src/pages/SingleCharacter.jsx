import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleCharacter } from "../queries/singleCharacter";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { CharacterInfo } from "../components/CharacterInfo/CharacterInfo";
import { client } from "../helpers/contentful";

export const SingleCharacter = () => {
  const { characterId } = useParams();
  const [starwarsImages, setStarwarsImages] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "starwarsImages",
      })
      .then((res) => setStarwarsImages(res.items))
      .catch((err) => console.log(err));
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleCharacter", characterId],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        singleCharacter,
        { personId: characterId }
      ),
  });

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const characterName = data.person.name;
  const characterImage = starwarsImages.find(
    (image) => image.fields.image.fields.title === characterName
  );

  return (
    <CharacterInfo
      name={data.person.name}
      imageSrc={
        characterImage ? characterImage.fields.image.fields.file.url : ""
      }
      films={data.person.filmConnection.films}
      species={data.person.species?.name || "Unknown"}
      homeworld={data.person.homeworld?.name || "Unknown"}
      birthyear={data.person.birthYear || "Unknown"}
      skincolor={data.person.skinColor || "Unknown"}
      eyecolor={data.person.eyeColor || "Unknown"}
      haircolor={data.person.hairColor || "Unknown"}
      height={data.person.height || "Unknown"}
      gender={data.person.gender || "Unknown"}
      mass={data.person.mass || "Unknown"}
    />
  );
};
