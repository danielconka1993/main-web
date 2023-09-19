import { useState } from "react"

const Qestion = ({title,info}) => {
  const [showQuestion, setShowQuestion] = useState(false)
  return <article className="one-Question">
    <div>
        <h2>{title}</h2>
        <button onClick={() => setShowQuestion(!showQuestion)}>Odpověď</button>
    </div>
    {showQuestion && <p>{info}</p>}
  </article>
}

export default Qestion