import React from "react";
import realityImg from "../../../img/Projects/noticeBoard.png";

const NoticeBoard = () => {
  return (
    <div className="oneProject-oneProject">
      <a
        href="https://reality-arevyhs.netlify.app/chci-nabidku"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={realityImg} alt="" />
        <h3><span className="span-underLine"> Reality</span></h3>
      </a>
      <div className="text-box">
        <p>
          Přidávání článku a jejich komentování.
        </p>
        <p>&nbsp;</p>
        <p>Login, Registrace (Hash) + JWT</p>
        <p><span className="span-yellowText">ReactJS - Express.js - MongoDB</span></p>
      </div>
      
    </div>
  );
};

export default NoticeBoard;
