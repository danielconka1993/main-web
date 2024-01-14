import React from "react";
import realityImg from "../../../img/Projects/Reality/reality.png";

const Reality = () => {
  return (
    <div className="oneProject-oneProject">
      <a
        href="https://reality-arevyhs.netlify.app/chci-nabidku"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={realityImg} alt="" />
        <h3><span className="span-underLine">Reality</span>  </h3>
      </a>
      <div className="text-box">
        <p> Web pro zažadání o ocenení reality pro makléře.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><span className="span-yellowText">ReatJS - FireBase</span></p>
      </div>
    </div>
  );
};

export default Reality;
