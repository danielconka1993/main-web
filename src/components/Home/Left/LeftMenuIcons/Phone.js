import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";

const Phone = () => {
  return (
    <div className="leftMenuIcons-box">
      <a href="tel:+420773590989">
        <BsFillPhoneFill className="icon" />
        <p>+420 773 590 989</p>
      </a>
    </div>
  );
};

export default Phone;
