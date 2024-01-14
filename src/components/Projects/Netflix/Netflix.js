import "./Netflix.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data_movies from "./data/data_movies.js";
import data_caterogies from "./data/data_kategorie.js";
import data_questions from "./data/data_questions.js";
import Qestion from "./questions/Question.js";

const Netflix = () => {
  const [movies, setMovies] = useState(data_movies);
  const [question, setQuestion] = useState(false);
  const [searchEngine, setSearchEngine] = useState("");

  // search engine
  useEffect(() => {
    const moviesAfterFilter = data_movies.filter((oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchEngine.toLowerCase());
    });
    setMovies(moviesAfterFilter);
  }, [searchEngine]);

  // deleteMovie
  const btnDeleteMovie = (id) => {
    const deleteMovie = movies.filter((oneMovie) => {
      return oneMovie.id !== id;
    });
    setMovies(deleteMovie);
  };

  // Vrátit filmy
  const btnReturnMovies = () => {
    setMovies(data_movies);
  };

  // Smazat filmy
  const btnDeleteMovies = () => {
    setMovies([]);
  };

  // caterogies
  const btnCategories = (caterogies) => {
    const fCategories = data_movies.filter((oneMovie) => {
      return oneMovie.category === caterogies;
    });
    setMovies(fCategories);
  };

  return (
    <section className="Netflix">
      <div className="searchEngine">
        <form>
          <input
            type="text"
            autoComplete="off"
            placeholder="Vyhledač filmů..."
            value={searchEngine}
            onChange={(e) => setSearchEngine(e.target.value)}
          />
        </form>
      </div>
      <div className="caterogies-btns">
        {data_caterogies.map((onecaterogies, index) => {
          return (
            <button key={index} onClick={() => btnCategories(onecaterogies)}>
              {onecaterogies}
            </button>
          );
        })}
      </div>
      <div className="allMovies">
        {movies.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div key={id} className="oneMovie">
              <Link to={`/projekty/${oneMovie.id}`}>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p className="tags">{tags}</p>
                <p className="posledniP">{description}</p>
              </Link>
              <button onClick={() => btnDeleteMovie(id)}>Vymazat film</button>
            </div>
          );
        })}
      </div>

      <div className="BtnAll">
        <button onClick={btnDeleteMovies}>Vymazat filmy</button>
        <button onClick={btnReturnMovies}>Vrátit filmy</button>
      </div>

      <div className="questions">
        <button onClick={() => setQuestion(!question)}>
          {question ? "Skrýt Otázky" : "Otázky"}
        </button>
        {question &&
          data_questions.map((oneOtazka) => {
            return <Qestion key={oneOtazka.id} {...oneOtazka} />;
          })}
      </div>
    </section>
  );
};

export default Netflix;
