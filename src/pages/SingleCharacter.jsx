import React from 'react'
import { useParams } from 'react-router-dom'
import { singleCharacter } from '../queries/singleCharacter'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'


export const SingleCharacter = () => {
    const {characterId} = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ["singleCharacter"],
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

  return (
    <div>
        <h1>{data.person.name}</h1>
    </div>
  )
}
