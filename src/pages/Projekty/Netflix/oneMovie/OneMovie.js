import "./OneMovie.css"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import data_movies from "../data_movies"


const OneMovie = () => {
  const { movieId } = useParams(); // Destrukturování přímo z hooku

  const oneSpecificMovie = data_movies.find((oneMovie) => {
      return oneMovie.id === parseInt(movieId);
  });


const {image, title, description, tags} = oneSpecificMovie

  return <section className="oneMovie-solo">
    <div className="odkaz">
      <Link to="/projekty/">Netflix</Link>
    </div>
    <div className="oneMovie-info">
      <h1>{title}</h1>
      <img src={image} alt="obrazek filmu" />
      <p>{description}</p>
      <p>{tags}</p>
    </div>
  </section>

};

export default OneMovie;