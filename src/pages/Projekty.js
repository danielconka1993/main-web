import { useState } from "react"
import "./css/Projekty.css"
import staryWeb from "./Projekty/staryweb.png"
import Netflix from "./Projekty/Netflix/Netflix"
import ISS from "./Projekty/API/ISS"



const Projekty = () => {
  const [zobrazitProjektNetflix,setZobrazitProjektNetflix] = useState(false)
  const [zobrazitProjektAPI, setZobrazitProjektAPI] = useState(false)
  return <section className='projekty'>
        <section className="vsechny-projekty">

          <article className="container-jazyk"> 
            <h1>React</h1>
{/* !!!!!!!!!!!!!!!!! -     Nezapomenout upravit při novém projektu  - !!!!!!!!!!!!!!!!!!*/}
            <div className={`projekty-react ${(zobrazitProjektNetflix || zobrazitProjektAPI) ? "projektyReact-sloupec" : "projektyReact-radek"}`}>

              {/* Netflix */}
              <div className={`jeden-projekt ${zobrazitProjektNetflix ? "jedenprojekt-big" : "jedenprojekt-small"}`}>
                <h3>Netflix</h3>
                <button className="btn-jedenProjekt" onClick={() => {setZobrazitProjektNetflix(!zobrazitProjektNetflix);}}>
                    {zobrazitProjektNetflix ? "Skrýt projekt" : "Zobrazit projekt"}
                </button>
                <div>
                  {zobrazitProjektNetflix && <Netflix />}
                </div>
              </div>

              {/* API */}
              <div className={`jeden-projekt ${zobrazitProjektAPI ? "jedenprojekt-big" : "jedenprojekt-small"}`}>
                <h3>API</h3>
                <button className="btn-jedenProjekt" onClick={() => {setZobrazitProjektAPI(!zobrazitProjektAPI);}}>
                    {zobrazitProjektAPI ? "Skrýt projekt" : "Zobrazit projekt"}
                </button>
                {zobrazitProjektAPI && <ISS />}
              </div>
            </div>
          </article>

          <article className="container-jazyk">
            <h1>JS | PHP | SQL</h1>
            <div className='jeden-projekt'>
              <a href="https://arevyhs.000webhostapp.com" target="_blank" rel="noopener noreferrer">
              <img src={staryWeb} alt="obrazek projektu" />
              <h3>Starý web</h3></a>
              <strong>Původní web s projekty a odesílacím formulářem na můj email</strong>
            </div>
          </article>

          

            
        </section>
    
  </section>
}

export default Projekty