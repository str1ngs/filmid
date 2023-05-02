function ParemPaan({ openedMovies }) {
  if (openedMovies === "") {
    return null;
}
  return (
      <>
        <p>Pealkiri: {openedMovies.original_title}</p>
            <p>Keskmine hinne: {openedMovies.vote_average}</p>
            <p>Kirjeldus: {openedMovies.overview}</p> 
            <img src={`https://image.tmdb.org/t/p/original/${openedMovies.poster_path}`} width="400px" alt="poster" /> {/* `` backticks! */}
      </>
    );
}

export default ParemPaan;