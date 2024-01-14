import "./css/MenuLanguages.css";
// import "./css/AllLanguages.css"
import { useState, useEffect } from "react";
import dataLanguages from "../dataLanguages";
import MainText from "./MainText";

const MenuLanguages = () => {
  const [data, setData] = useState(<MainText />);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(<MainText />);
    }, 20000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="MenuLanguages">
      <div className="menu-Languages">
        {dataLanguages.map((oneDataLanguages) => {
          const { id, buttonValue, jsxValue } = oneDataLanguages;
          return (
            <button key={id} onClick={() => setData(jsxValue)}>
              {buttonValue}
            </button>
          );
        })}
      </div>
      <div className="jsx-Box">{data && <div className="jsx">{data}</div>}</div>
    </div>
  );
};

export default MenuLanguages;
