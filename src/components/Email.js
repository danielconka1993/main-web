import "./css/Email.css";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
 

  return (
    <section className="kontakty">
      <div className="kontakt">
        <BsFillPhoneFill />
        <a href="tel:+420773590989">+420 773 590 989</a>
      </div>
      <div className="kontakt">
        <AiOutlineMail />
        <a href="mailto:danielconka1993@gmail.com">danielconka1993@gmail.com</a>

      </div>
     
    </section>
  );
};

export default Email;