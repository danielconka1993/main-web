import { ImGithub } from "react-icons/im";
import "./Right/css/AllLanguages.css";

const dataLanguages = [
  {
    id: 1,
    buttonValue: "ReactJS",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>ReactJS</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Globál</span> Context + Reducer, props. Ukládáná dat z BE do  <span className="span-underLine">LocalStorage</span>.
        </p>
        <p>
          <span className="span-yellowText">Hooks</span> všeho druhu. Tvorba <span className="span-yellowText">Redexů</span>. Zpracování <span className="span-yellowText">REST API</span>.
        </p>
        <p>
          <span className="span-yellowText">FireBase</span> - správa databáze, formuláře, dynamické MPA.
        </p>
      </article>
    ),
  },
  {
    id: 2,
    buttonValue: "Node.js",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>Node.js - Express</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Routy</span> - GET, PUT, DELETE, POST, Create. Upřednosťuji <span className="span-yellowText">try-catch konstrukci</span>.
        </p>
        <p>
          <span className="span-underLine">Bezpečnost</span> - <span className="span-yellowText">JWT</span> token, <span className="span-yellowText">HASH</span> hesel.
        </p>
        <p>
          Efektivní manipulace v routě s větším počtem kolekcí v <span className="span-yellowText">MongoDB</span> pro minimalizaci počtu endpointů .
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
        <span className="span-yellowText">Git</span> - práce s terminálem.
        </p>
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
    buttonValue: "JavaScript",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>JavaScript</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>Short circuit evaluation, cykly, funkce, metody,..</p>
        <p>
          Práci s <span className="span-yellowText">polem & objekty</span> -
          destructuring, .map, .filter, .find, spread operátor, ...
        </p>
        <p>
          <span className="span-yellowText">OOP</span>, práci s API, manipulace
          s <span className="span-yellowText">DOM</span> - HTML, CSS, eventy.
        </p>
      </article>
    ),
  },
  {
    id: 5,
    buttonValue: "PHP & SQL",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>
          PHP <span className="span-yellowText">&</span> SQL
        </h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Správu dat a tabulek </span>
          (referenční, omezujicí integrita) v databáze, Sessions.
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
    id: 6,
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
];

export default dataLanguages;
