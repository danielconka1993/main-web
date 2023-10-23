import "./css/HeaderIcons.css"
import { useState } from "react"

import { ImGithub } from "react-icons/im";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const HeaderIcons = () => {

    const [showGit, setShowGit] = useState(false)
    const [showTelefon, setShowTelefon] = useState(false)
    const [showEmail, setShowEmail] = useState(false)

  return <div className="header-kontakt-icony">
{/* gitHub */}
<div className="container-icona" onMouseEnter={()=>setShowGit(true)} onMouseLeave={()=>setShowGit(false)}>
  <ImGithub className="icona" />
  {showGit &&  <a href="https://github.com/danielconka1993" className="text-slide-in" target="_blank" rel="noopener noreferrer">danielconka1993</a>}
</div>

{/* email */}
<div className="container-icona" onMouseEnter={()=>setShowEmail(true)} onMouseLeave={()=>setShowEmail(false)}>
  <AiOutlineMail  className="icona"/>
  {showEmail && <a href="mailto:danielconka1993@gmail.com">danielconka1993@gmail.com</a>}
</div>

{/* telefon */}
<div className="container-icona" onMouseEnter={()=>setShowTelefon(true)} onMouseLeave={()=>setShowTelefon(false)}>
  <BsFillPhoneFill  className="icona"/>
  {showTelefon && <a href="tel:+420773590989">+420 773 590 989</a>}
</div>
</div>
}

export default HeaderIcons