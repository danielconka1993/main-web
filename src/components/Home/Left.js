import "./css/Left.css";
import ProfilPhoto from "../../img/profilePhoto.png";
import LeftMenuIcons from "./Left/LeftMenuIcons";

const Left = () => {
  return (
    <div className="Left">
      <img src={ProfilPhoto} alt="" />
      <LeftMenuIcons />
    </div>
  );
};

export default Left;
