import "./css/Projekty.css"
import data from "./Projekty/data"

const Projekty = () => {
  return <section className='projekty'>
    {
      data.map( (oneProjekt) => {
        const {id,img, url, title, info} = oneProjekt

        return <article className='jeden-projekt' key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} alt="obrazek projektu" />
          {/* <iframe src={url} width="80%" height="70%" title="External Page"></iframe> */}
          <h1>{title}</h1></a>
          <strong>{info}</strong>
        </article>
      })
    }
    
  </section>
}

export default Projekty