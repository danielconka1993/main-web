import "./css/HeaderIcons.css"
import { useState } from "react"

import { ImGithub } from "react-icons/im";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const HeaderIcons = () => {

    const [showGit, setShowGit] = useState(false)
    const [showTelefon, setShowTelefon] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
  
    const git_kontakt_enter = () => {
        setShowGit(true)
    }
    const git_kontakt_leave = () => {
      setShowGit(false)
    }
  
    const telefon_kontakt_enter = () => {
      setShowTelefon(true)
    }
    const telefon_kontakt_leave = () => {
      setShowTelefon(false)
    }
  
    const email_kontakt_enter = () => {
      setShowEmail(true)
    }
    const email_kontakt_leave = () => {
      setShowEmail(false)
    }

  return <div className="header-kontakt-icony">
{/* gitHub */}
<div className="container-icona" onMouseEnter={git_kontakt_enter} onMouseLeave={git_kontakt_leave}>
<ImGithub className="icona" />
{showGit &&  <a href="https://github.com/danielconka1993" className="text-slide-in">danielconka1993</a>}

</div>

{/* telefon */}
<div className="container-icona" onMouseEnter={telefon_kontakt_enter} onMouseLeave={telefon_kontakt_leave}>
<BsFillPhoneFill  className="icona"/>
{showTelefon && <a href="tel:+420773590989">+420 773 590 989</a>}
</div>

{/* email */}
<div className="container-icona" onMouseEnter={email_kontakt_enter} onMouseLeave={email_kontakt_leave}>
<AiOutlineMail  className="icona"/>
{showEmail && <a href="mailto:danielconka1993@gmail.com">danielconka1993@gmail.com</a>}
</div>

</div>
}

export default HeaderIcons