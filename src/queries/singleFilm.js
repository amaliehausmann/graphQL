export const singleFilm = `query Film($filmId: ID) {
  film(id: $filmId) {
    director
    episodeID
    openingCrawl
    producers
    releaseDate
    title
  }
}`;
