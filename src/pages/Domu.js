import "./css/Domu.css"
import ja from "../img/profilePhoto.png"
import { ImGithub } from "react-icons/im";
import { useEffect, useState } from "react"

const Domu = () => {
  // Základní text
  const hlavniText = () => {
    return(
      <div className="domuHlavniText">
          <article>
            <h3>Ahoj</h3>
            <h1>Jsem Daniel</h1>
            <p>budoucí Front-end developer.</p><br />
          </article>

          <article className="domu-text">
              <div className="domu-text-prvni">
                  <p>Jmenuji se Daniel Čonka</p>
                  <p>&nbsp;&&nbsp;</p> 
                  <p>jsem hobby&nbsp; </p> 
                  <p>full stack developer</p>
                  <p>.</p>
                </div>
                <p>Mam svůj koníček orpavdu.</p>
          </article>
      </div>
    );
  }
  
  const [text, setText] = useState(hlavniText())

// Refresh základního textu
  useEffect(() => {
    const zakladniText = setInterval(() => {
      setText(hlavniText());
    }, 20000);
    return () => clearInterval(zakladniText)
  }, [text]);

// Jazyky
  const btnJavascript = () => {
    setText(<article className="domu-ostatniJazyky">
          <h1>JavaScript</h1>
          <h3>&nbsp;Při práci s ním ovládám </h3>
          <p>
              &nbsp;Short circuit evaluation, cykly, funkce.
          </p>
          <p>
              &nbsp;Práci s <span className="zluta">polem</span> - destructuringu, .map, .filter, .find, spread operátor. 
          </p>
          <p>
              &nbsp;<span className="zluta">OOP</span>, práci s API, manipulace s <span className="zluta">DOM</span> - HTML, CSS, eventy.
          </p>
        </article>
        )
  }

  const btnPHPaSQL = () => {
    setText(<article className="domu-ostatniJazyky">
          <h1>PHP <span className="zluta">&</span> SQL</h1>
          <h3>&nbsp;Při práci s ním ovládám </h3>
          <p>
              &nbsp;<span className="zluta">Správu dat a tabulek </span>(referenční, omezujicí integrita) v databáze, Cookies, Sessions.
          </p>
          <p>
             &nbsp;<span className="zluta"> Bezpečnos</span> - escapování, trimování, hashování hesel a prevence XSS. 
          </p>
          <p>
              &nbsp;<span className="zluta">OOP</span> a využití vestavěných funkcí.
          </p>
    </article>
    )
  }

  const btnGitHub = () => {
    setText(<article className="domu-ostatniJazyky">
        <h1>Git <span className="zluta">&</span> GitHub</h1>
        <h3>&nbsp;Při práci s ním ovládám </h3>
        <p>
              &nbsp;<span className="zluta">Git</span> - práce s Repository, Branches, Merge.
          </p>
          <p>
              &nbsp;<span className="zluta">GUI</span> - používání grafického prostředí <span className="podtržení">Git Kraken</span>.
          </p>
          <p>
              &nbsp;<span className="zluta">GitHub</span> - <span className="zluta">Klonování</span> existujícího repozitáře z GitHubu do lokálního prostředí. 
              <span className="zluta">Vytvoření</span> nového repozitáře na GitHubu a propojení s lokálním repozitářem.
        </p>
        <p>
        Odkaz na můj GitHub &nbsp;&nbsp; <a href="https://github.com/danielconka1993" target="_blank" rel="noopener noreferrer"><ImGithub /></a>
        </p>
      </article>
    )
  }

  const btnReact = () => {
    setText(<article className="domu-ostatniJazyky">
        <h1>React</h1>
        <h3>&nbsp;Při práci s ním ovládám </h3>
        <p>
              &nbsp;<span className="zluta">FireBase</span> - správa databáze (také posluchač), formuláře,  dynamické MPA.
          </p>
          <p>
              &nbsp;<span className="zluta">Hooks</span> - useState, useEffect, useRaf, useReducer, useContext, useParams, tvoba <span className="zluta">vlasních Hooků</span> + destructuring.
          </p>
          <p>
              &nbsp;<span className="zluta">eventy</span> - onClick, onChange, také Prop Drilling a icony. 
        </p>
      </article>
    )
  }

 const btnTypeScript = () => {
  setText(<article className="domu-ostatniJazyky">
      <h1>TypeScript</h1>
        <h3>&nbsp;Při práci s ním ovládám </h3>
        <p>
              &nbsp;<span className="zluta">Datové typy</span> - Literal type, custom type, enum,  void, never, unknown, Function, tuple, any, object + základní typy.
        </p>
    </article>
  )
 }



  return <div className="domu">

    <section className="levaStrana">
      <img src={ja} alt="Moje fotka" onClick={() => setText(hlavniText())} />
    </section>


    <section className="pravaStrana" >
      <div className="domuVyberJazyku">
        <button onClick={btnJavascript}>JS</button>
        <button onClick={btnPHPaSQL}>PHP & SQL</button>
        <button onClick={btnReact}>React</button>
        <button onClick={btnGitHub}>GitHub</button>
        <button onClick={btnTypeScript}>TS</button>
      </div>

      <strong>
        <>
          {text}
        </>
      </strong>
    </section>
  </div>
}

export default Domu