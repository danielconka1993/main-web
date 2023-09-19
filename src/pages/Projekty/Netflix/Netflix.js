import "./Netflix.css"
import { useState } from "react"
import data_movies from "./data_movies.js"
import data_kategorie from "./data_kategorie.js"
import data_questions from "./questions/data_questions.js"
import Qestion from "./questions/Question.js"


const Netflix = () => {

    const [movies,setMovies] = useState(data_movies)
    const [question, setQuestion] = useState(false)

    // Vymazat film
    const btnVymazatFilm = (id) => {
        const promenaVymazatFilm = movies.filter( ( oneMovie) => {
            return oneMovie.id !== id
        })
        setMovies(promenaVymazatFilm)
    }

    // Vrátit filmy
    const btnVratitFilmy = () => {
        setMovies(data_movies)
    }

    // Smazat filmy
    const btnVymazatFilmy = () => {
        setMovies([])
    }

    // Kategorie
    const btnKategorie = (kategorie) => {
        const funkceKategorie = data_movies.filter( (oneMovie) => {
           return oneMovie.category === kategorie
        }) 
        setMovies(funkceKategorie)
    }

  return (
    <section>
    <div className="kategorie">
        {
            data_kategorie.map( (oneKategorie, index)=> {
                return <button key={index} onClick={() => btnKategorie(oneKategorie)}>{oneKategorie}</button>
            })
        }
    </div>
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

    <div className="question">
        <button onClick={() => setQuestion(!question)}>
            {question ? "Skrýt" : "Otázky"}
        </button>
        {question && data_questions.map( (oneOtazka)=> {
            return <Qestion key={oneOtazka.id} {...oneOtazka}/>
        })}
    </div>



    </section>
  )
}

export default Netflix