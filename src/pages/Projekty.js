import { useState } from "react"
import "./css/Projekty.css"
import Netflix from "./Projekty/Netflix/Netflix"
import NoFirebase1 from "./Projekty/Form/noFirebase1/Form1"
import Firebase1 from "./Projekty/Form/firebase/Form2"

import realityImg from "./Projekty/Reality/reality.png"
import staryWeb from "./Projekty/staryweb.png"



const Projekty = () => {
  const [zobrazitProjektNetflix,setZobrazitProjektNetflix] = useState(false)
  const [zobrazitProjektForm_noFireBase, setZobrazitProjektForm_noFireBase] = useState(false)
  const [zobrazitProjektForm_FireBase, setZobrazitProjektForm_FireBase] = useState(false)


  return <section className='projekty'>
        <section className="vsechny-projekty">

          <article className="container-jazyk"> 
            <h1>React</h1>
{/* Nezapomenout upravit při novém projektu - Dobudoucna předělat na useReducer*/}
            <div className={`projekty-react ${(zobrazitProjektNetflix || zobrazitProjektForm_noFireBase || zobrazitProjektForm_FireBase) ? "projektyReact-sloupec" : "projektyReact-radek"}`}>
              
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

              {/* Form_noFireBase */}
              <div className={`jeden-projekt ${zobrazitProjektForm_noFireBase ? "jedenprojekt-big" : "jedenprojekt-small"}`}>
                <h3>Formulář</h3>
                <button className="btn-jedenProjekt" onClick={() => {setZobrazitProjektForm_noFireBase(!zobrazitProjektForm_noFireBase);}}>
                    {zobrazitProjektForm_noFireBase ? "Skrýt projekt" : "Zobrazit projekt"}
                </button>
                {zobrazitProjektForm_noFireBase && <NoFirebase1 />}
              </div>

              {/* Form_FireBase */}
              <div className={`jeden-projekt ${zobrazitProjektForm_FireBase ? "jedenprojekt-big" : "jedenprojekt-small"}`}>
                <h3>Firebase - Seznam filmů</h3>
                <button className="btn-jedenProjekt" onClick={() => {setZobrazitProjektForm_FireBase(!zobrazitProjektForm_FireBase);}}>
                    {zobrazitProjektForm_FireBase ? "Skrýt projekt" : "Zobrazit projekt"}
                </button>
                {zobrazitProjektForm_FireBase && <Firebase1 />}
              </div>
            </div>
          </article>

          <article className="container-jazyk">
            <h1>Odkazy na další projekty</h1>

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