
async function readData() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&query=lord&page=1&include_adult=false`
    const response = await fetch(url)
    const data = await response.json()
    const fetched_movies = data.results.map(movie => ({ // "results" avab massiivi
      original_title: movie.original_title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path
    }));

    return fetched_movies;
}

export { readData }