import "./App.css";
import VasakPaan from "./components/VasakPaan";
import ParemPaan from "./components/ParemPaan";
import { useState, useEffect } from "react";
import { readData } from "./controllers/data";
import OtsiFilmi from "./components/OtsiFilmi";

function App() {
  const [movies, setMovies] = useState([]);
  const [openedMovies, setOpenedMovies] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const fetchedMovies = await readData();
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, []);

  const clickChange = (index) => {
    const opened = movies[index];
    setOpenedMovies(opened);
  };

  return (
    <>
      <div className="container-fluid p-4 bg-dark shadow-sm text-warning">
        <h1>Filmide app</h1><OtsiFilmi />
      </div>
      <div className="row">
        <div className="col m-2">
          <h2>Nimekiri</h2>
          <VasakPaan movies={movies} clickChange={clickChange} />
          
        </div>
        <div className="col m-2">
          <h2>Detailid</h2>
          <ParemPaan openedMovies={openedMovies} />
        </div>
      </div>
    </>
  );
}

export default App;
