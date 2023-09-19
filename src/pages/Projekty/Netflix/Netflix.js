import { useState } from "react"
import data_movies from "./data_movies.js"
import "./Netflix.css"

const Netflix = () => {

    const [movies,setMovies] = useState(data_movies)

    const btnVymazatFilm = (id) => {
        const promenaVymazatFilm = movies.filter( ( oneMovie) => {
            return oneMovie.id !== id
        })
        setMovies(promenaVymazatFilm)
    }

    const btnVratitFilmy = () => {
        setMovies(data_movies)
    }

    const btnVymazatFilmy = () => {
        setMovies([])
    }

  return (
    <section>
    <div className="allMovies">
        {
            movies.map( (oneMovie) => {
                const {id, image, title, age, tags, description} = oneMovie

                return <div key={id} className="oneMovie">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p className="posledniP">{description}</p>
                <button onClick={() => btnVymazatFilm(id)}>Vymazat film</button>
            </div>
            })
        }
    </div>

    <div className="BtnAll">
        <button onClick={btnVymazatFilmy}>Vymazat filmy</button>
        <button onClick={btnVratitFilmy}>Vrátit filmy</button>
    </div>



    </section>
  )
}

export default Netflix