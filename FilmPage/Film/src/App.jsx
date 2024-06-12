import { useEffect, useState } from "react";
import "./styles.scss";
import Modal from "./assets/components/Modal";

function App() {
  const [films, setFilms] = useState([]);
  const [input, setInput] = useState("batman");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleIsModalOpen = (film = null) => {
    setSelectedFilm(film);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    getFilms(input);
  }, [input]);

  const getFilms = async (input) => {
    try {
      if (input === "") {
        setInput("Batman");
      }
      const response = await fetch(
        `http://www.omdbapi.com/?s=${input}&apikey=49f22c6e`
      );
      if (!response.ok) {
        throw Error("Fetch Error");
      }
      const data = await response.json();
      if (data.Search) {
        setFilms(data.Search);
      } else {
        throw Error("No films found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="searchDiv">
        <input
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
      <div className="maindiv">
        {films.map((item) => (
          <div
            className="card"
            key={item.imdbID}
            onClick={() => handleIsModalOpen(item)}
          >
            <img src={item.Poster} alt="Poster" />
            <h3>{item.Title}</h3>
            <p>{item.Year}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleIsModalOpen}>
        {selectedFilm && (
          <div>
            <img src={selectedFilm.Poster} alt="Poster" />
            <h3>{selectedFilm.Title}</h3>
            <p>{selectedFilm.Year}</p>
            <p>{selectedFilm.Type}</p>
            <button onClick={handleIsModalOpen}>Close</button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default App;
