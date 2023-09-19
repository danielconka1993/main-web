import { useState } from "react"
import "./css/Projekty.css"
import data from "./Projekty/data"
import staryWeb from "./Projekty/staryweb.png"
import Netflix from "./Projekty/Netflix/Netflix"


const Projekty = () => {
  const [zobrazitProjektNetflix,setZobrazitProjektNetflix] = useState(false)
  return <section className='projekty'>
        <section className="vsechny-projekty">

          <article className="container-jazyk">
            <h1>JavaScript , PHP , SQL</h1>
            <div className='jeden-projekt'>
              <a href="https://arevyhs.000webhostapp.com" target="_blank" rel="noopener noreferrer">
              <img src={staryWeb} alt="obrazek projektu" />
              <h2>Starý web</h2></a>
              <strong>Původní web s projekty a odesílacím formulářem na můj email</strong>
            </div>
          </article>

          <article className="container-jazyk"> 
            <h1>React</h1>
            <div className="jeden-projekt">
              <button onClick={() => {setZobrazitProjektNetflix(!zobrazitProjektNetflix);}}>
                  {zobrazitProjektNetflix ? "Skrýt projekt" : "Zobrazit projekt"}
              </button>
              {zobrazitProjektNetflix && <Netflix />}
            </div>
          </article>

            
        </section>
    
  </section>
}

export default Projekty