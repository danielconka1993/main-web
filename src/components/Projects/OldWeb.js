import React from "react";
import staryWeb from "../../img/Projects/staryweb.png"

const OldWeb = () => {
  return (
    <div className="oneProject-oneProject">
      <a
        href="https://arevyhs.000webhostapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={staryWeb} alt="obrazek projektu" />
        <h3>Starý web</h3>
      </a>
      <div className="text-box">
      <p>
        Původní web s projekty a odesílacím formulářem na můj email.
      </p>
      </div>
    </div>
  );
};

export default OldWeb;
