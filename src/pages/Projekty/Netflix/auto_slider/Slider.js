import "./Slider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react"
import data from "../data_movies"

const Slider = () => {
    const [index, setIndex] = useState(0)

    // 2 Fáze - Filmy se ve slideru točí stále dokola (ochrana prvního a koncového indexu)
    useEffect( () => {
        if (index < 0){
            setIndex(data.length - 1)
        } else if (index > data.length - 1){
            setIndex(0)
        }
    }, [index])

    // 4 Fáze - Automatické posouvání
    useEffect( () => {
        let setIntervalID = setInterval( () => {
            setIndex(index + 1)
        }, 3000)
        // Zamezení řetězení při sisknutí btn (které kliknu v mezi intervalu), aby neprobliknul jiný film která je kliknuto například v 2,5s tímto prostě nastavím čas opět na 0
        return () => clearInterval(setIntervalID)
    }, [index])

// 1 Fáze - vypsání filmů
    return <section className="all-movies">
        <div className="all-movies-content">
            {/* oneMovieIndex - přidán pro konkrétní výběr aktivního filmu */}
            {data.map( (oneMovie, oneMovieIndex) => {
                const {id, image, title, age, tags, description } = oneMovie

                // 3 Fáze - Přidání dynamických stylu
                let mainClass = "next-slide"
                if(oneMovieIndex === index){
                    mainClass = "active-slide"
                }
                if(oneMovieIndex === index -1 || (index === 0 && oneMovieIndex === data.length -1)){
                    mainClass = "last-slide"
                }

                return <article key={id} className={mainClass}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>        
                    <p>{tags}</p>
                    <p>{age}</p>
                </article>
            })}
        </div>
        {/* Posun indexu buttonem */}
        <button onClick={() => setIndex(index -1)}>
            <FaArrowAltCircleLeft />
        </button>
        <button onClick={() => setIndex(index +1)}>
            <FaArrowAltCircleRight />
        </button>
    </section>
}

export default Slider