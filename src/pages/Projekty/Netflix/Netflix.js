import "./Netflix.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import data_movies from "./data_movies.js"
import data_kategorie from "./data_kategorie.js"
import data_questions from "./questions/data_questions.js"
import Qestion from "./questions/Question.js"


const Netflix = () => {

    const [movies,setMovies] = useState(data_movies)
    const [question, setQuestion] = useState(false)
    const [vyhledavac,setVyhledavac] = useState("")

    // Vyhledávač
    useEffect( () => {
        const moviesAfterFilter = data_movies.filter( (oneMovie) => {
            return oneMovie.title.toLowerCase().includes(vyhledavac.toLowerCase())
        })
        setMovies(moviesAfterFilter);
      }, [vyhledavac])
      
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
    <section className="netflix">
    <div className="vyhledavac">
        <form>
        <input type="text" autoComplete="off" placeholder="Vyhledač filmů..." value={vyhledavac} onChange={(e)=> setVyhledavac(e.target.value)} />
        </form>
    </div>
    <div className="kategorie-btns">
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
                <Link to={`/projekty/${oneMovie.id}`}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{age}</p>
                    <p>{tags}</p>
                    <p className="posledniP">{description}</p>
                </Link>
                <button onClick={() => btnVymazatFilm(id)}>Vymazat film</button>
            </div>
            })
        }
    </div>

    <div className="BtnAll">
        <button onClick={btnVymazatFilmy}>Vymazat filmy</button>
        <button onClick={btnVratitFilmy}>Vrátit filmy</button>
    </div>

    <div className="questions">
        <button onClick={() => setQuestion(!question)}>
            {question ? "Skrýt Otázky" : "Otázky"}
        </button>
        {question && data_questions.map( (oneOtazka)=> {
            return <Qestion key={oneOtazka.id} {...oneOtazka}/>
        })}
    </div>



    </section>
  )
}

export default Netflix