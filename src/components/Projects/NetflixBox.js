import "./css/NetflixBox.css"
import { useState } from "react";
import Netflix from "./Netflix/Netflix";

const NetflixBox = () => {
  const [zobrazitProjektNetflix, setZobrazitProjektNetflix] = useState(false);

  return (
    <div className="oneProject-oneProject NetflixBox">
      <h2>
        <span className="span-underLine">Netflix</span>
      </h2>
      <button className="toggleNetflix"
        onClick={() => setZobrazitProjektNetflix(!zobrazitProjektNetflix)}
      >{
        !zobrazitProjektNetflix ? "Zobrazit" : "Skrýt"
      }
      </button>
      {zobrazitProjektNetflix && <Netflix />}
    </div>
  );
};

export default NetflixBox;
