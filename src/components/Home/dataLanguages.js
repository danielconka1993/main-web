import { ImGithub } from "react-icons/im";
import "./Right/css/AllLanguages.css";

const dataLanguages = [
  {
    buttonValue: "ReactJS",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>ReactJS</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Globál</span> Context + Reducer, props. Práce s  <span className="span-underLine">LocalStorage</span>.
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
    buttonValue: "Node.js",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>Node.js - Express</h1>
        <h2>Při práci s ním ovládám </h2>
        <p>
          <span className="span-yellowText">Routy</span> - GET, PUT, DELETE, POST, Create. Upřednosťnuji <span className="span-yellowText">try-catch konstrukci</span>.
        </p>
        <p>
          <span className="span-underLine">Bezpečnost</span> - <span className="span-yellowText">JWT</span> token, <span className="span-yellowText">HASH</span> hesel.
        </p>
        <p>
          Efektivní manipulace v routě s větším počtem kolekcí v <span className="span-yellowText">MongoDB</span> pro minimalizaci počtu endpointů.
        </p>
      </article>
    ),
  },
  {
    buttonValue: "SCSS",
    jsxValue: (
      <article className="oneLanguageDetail">
        <h1>
          SCSS <span className="span-yellowText">&</span> SASS
        </h1>
        <h2>CSS na steroidech</h2>
        <p>
        <span className="span-yellowText">Promenné</span> - centralizování hodnot pro efektivní aktualizaci vzhledu.
        </p>
        <p>
        <span className="span-yellowText">Mixiny</span> - znovu použitelné includy balíčku vzhledu.
        </p>
        <p>
        <span className="span-yellowText">Funkce</span> - efektivní a organizovaný kód při stylování webových stránek.
        </p>
        <p>
          <span className="span-yellowText">GUI</span> - používání grafického
          prostředí <span className="span-underLine">Git Kraken</span>.
        </p>
      </article>
    ),
  },
  {
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
