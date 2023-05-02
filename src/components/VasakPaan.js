function VasakPaan({ movies, clickChange }) {
  return movies.map((movies, index) => {
    return (
      <>  
        <li key={movies} onClick={() => clickChange(index)}>{movies.original_title}</li>
    </>
    );
  });
}

export default VasakPaan;
