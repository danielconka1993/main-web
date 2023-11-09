import { useState } from "react"
import "./css/Projekty.css"
import Netflix from "./Projekty/Netflix/Netflix"
import realityImg from "./Projekty/Reality/reality.png"
import staryWeb from "./Projekty/staryweb.png"



const Projekty = () => {
  const [zobrazitProjektNetflix,setZobrazitProjektNetflix] = useState(false)

  return <section className='projekty'>
        <section className="vsechny-projekty">

          <article className="container-jazyk"> 
            <h1>React - FrontEnd</h1>
{/* Nezapomenout upravit při novém projektu - Dobudoucna předělat na useReducer*/}
            <div className={`projekty-react ${(zobrazitProjektNetflix) ? "projektyReact-sloupec" : "projektyReact-radek"}`}>
              
              {/* Netflix */}
              <div className={`jeden-projekt ${zobrazitProjektNetflix ? "jedenprojekt-big" : "jedenprojekt-small"}`}>
                <h3>Netflix</h3>
                <button className="btn-jedenProjekt" onClick={() =>   
                  {setZobrazitProjektNetflix(!zobrazitProjektNetflix);}
                }>
                  {zobrazitProjektNetflix ? "Skrýt projekt" : "Zobrazit projekt"}
                </button>
                  {zobrazitProjektNetflix && <Netflix />}
              </div>

            </div>
          </article>

          <article className="container-jazyk">
            <h1>React - FullStack</h1>

            <div className='jeden-projekt odkazoveProjekty'>
              <a href="https://reality-arevyhs.netlify.app/chci-nabidku" target="_blank" rel="noopener noreferrer"><img src={realityImg} alt="" />
              <h3>Reality</h3></a>
              <strong>Web pro zažadání o ocenení reality pro makléře.</strong>
            </div>
          </article>



          <article className="container-jazyk">
            <h1>JS | PHP | SQL</h1>

            <div className='jeden-projekt staryweb'>
              <a href="https://arevyhs.000webhostapp.com" target="_blank" rel="noopener noreferrer">
              <img src={staryWeb} alt="obrazek projektu" />
              <h3>Starý web</h3></a>
              <strong>Původní web s projekty a odesílacím formulářem na můj email.</strong>
            </div>
          </article>

          

            
        </section>
    
  </section>
}

export default Projekty