import "./css/LeftMenuIcons.css"
import Git from "./LeftMenuIcons/Git"
import Phone from "./LeftMenuIcons/Phone"
import Email from "./LeftMenuIcons/Email"

const LeftMenuIcons = () => {
  return (
    <div className="LeftMenuIcons">
      <Phone />
      <Email />
      <Git/>
    </div>
  )
}

export default LeftMenuIcons