export const singleCharacter = `query Person($personId: ID) {
  person(id: $personId) {
    birthYear
    eyeColor
    filmConnection {
      films {
        title
      }
    }
    gender
    hairColor
    height
    homeworld {
      name
    }
    mass
    name
    skinColor
    species {
      name
    }
  }
}`;