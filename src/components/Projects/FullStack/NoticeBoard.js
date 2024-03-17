import React from "react";
import realityImg from "../../../img/Projects/Mini/miniNoticeBoard.png";

const NoticeBoard = () => {
  return (
    <div className="oneProject-oneProject">
      <a
        href="https://nastenka-arevyhs.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={realityImg} alt="" />
        <h3>
          <span className="span-underLine"> Nástěnka</span>
        </h3>
      </a>
      <div className="text-box">
        <p>Přidávání článku a jejich komentování.</p>
        <p>&nbsp;</p>
        <p>Login, Registrace (Hash) + JWT</p>
        <p>
          <span className="span-yellowText">
            ReactJS - Express.js - MongoDB
          </span>
        </p>
      </div>
    </div>
  );
};

export default NoticeBoard;
