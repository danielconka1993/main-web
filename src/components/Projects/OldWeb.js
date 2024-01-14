import React from "react";
import staryWeb from "../../img/Projects/staryweb.png";

const OldWeb = () => {
  return (
    <div className="oneProject-oneProject">
      <a
        href="https://arevyhs.000webhostapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={staryWeb} alt="obrazek projektu" />
        <h3>
          <span className="span-underLine">Starý web</span>
        </h3>
      </a>
      <div className="text-box">
        <p>&nbsp;</p>
        <p>Původní web s projekty a odesílacím formulářem na můj email.</p>
        <p><span className="span-yellowText">PHP - JavaScript</span></p>
      </div>
    </div>
  );
};

export default OldWeb;
