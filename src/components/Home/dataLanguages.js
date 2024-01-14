import { ImGithub } from "react-icons/im";
import "./Right/css/AllLanguages.css";

const dataLanguages = [
  {
    id: 1,
    buttonValue: "JavaScript",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>JavaScript</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>Short circuit evaluation, cykly, funkce.</p>
        <p>
          Práci s <span className="span-yellowText">polem</span> -
          destructuringu, .map, .filter, .find, spread operátor.
        </p>
        <p>
          <span className="span-yellowText">OOP</span>, práci s API, manipulace
          s <span className="span-yellowText">DOM</span> - HTML, CSS, eventy.
        </p>
      </article>
    ),
  },
  {
    id: 2,
    buttonValue: "PHP & SQL",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>
          PHP <span className="span-yellowText">&</span> SQL
        </h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Správu dat a tabulek </span>
          (referenční, omezujicí integrita) v databáze, Cookies, Sessions.
        </p>
        <p>
          <span className="span-yellowText"> Bezpečnos</span> - escapování,
          trimování, hashování hesel a prevence XSS.
        </p>
        <p>
          <span className="span-yellowText">OOP</span> a využití vestavěných
          funkcí.
        </p>
      </article>
    ),
  },
  {
    id: 3,
    buttonValue: "Git",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>
          Git <span className="span-yellowText">&</span> GitHub
        </h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">GUI</span> - používání grafického
          prostředí <span className="span-underLine">Git Kraken</span>.
        </p>
        <p>
          Odkaz na můj GitHub &nbsp; - &nbsp;{" "}
          <a
            href="https://github.com/danielconka1993"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub />
          </a>
        </p>
      </article>
    ),
  },
  {
    id: 4,
    buttonValue: "ReactJS",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>React</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">FireBase</span> - správa databáze
          (také posluchač), formuláře, dynamické MPA.
        </p>
        <p>
          <span className="span-yellowText">Hooks</span> - useState, useEffect,
          useRaf, useReducer, useContext, useParams, tvoba{" "}
          <span className="span-yellowText">vlasních Hooků</span> +
          destructuring.
        </p>
        <p>
          <span className="span-yellowText">eventy</span> - onClick, onChange,
          také Prop Drilling a icony.
        </p>
      </article>
    ),
  },
  {
    id: 5,
    buttonValue: "TypeScript",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>TypeScript</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Datové typy</span> - Literal type,
          custom type, enum, void, never, unknown, Function, tuple, any, object
          + základní typy.
        </p>
      </article>
    ),
  },
  {
    id: 6,
    buttonValue: "Node.js",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>Node.js - Express</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Datové typy</span> - Literal type,
          custom type, enum, void, never, unknown, Function, tuple, any, object
          + základní typy.
        </p>
      </article>
    ),
  },
];

export default dataLanguages;
