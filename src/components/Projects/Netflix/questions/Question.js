import "./Question.css";
import { useState } from "react";

const Qestion = ({ title, info }) => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <article className="one-Question">
      <div className="row">
        <h2>{title}</h2>
        <button onClick={() => setShowQuestion(!showQuestion)}>Odpověď</button>
      </div>
      <div className="answer">{showQuestion && <p>{info}</p>}</div>
    </article>
  );
};

export default Qestion;
