import "./Form2.css"
import { projectFirestore } from "./Config"
import { useEffect, useState} from "react"

const Form2 = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  // Přidání
  // Použít jména přimo sloupců
  const [movieTitle, setMovieTitle] = useState("")
  const [movieAge, setMovieAge] = useState("")
  const [movieTime, setMovieTime] = useState("")

  // PO načtení natáhni data + je vypiš
  useEffect( () => {
    //onSnapshot - používá se k automatické změně a aktualizuje (používá se s firebase) / Má 2 vlastnosti - udělá co chceme + umí vypsat chybu
      //collection se musí shodovat se jménem tabulky z firebase
        //Snapshot == snímek obrazovky = tato proměnná se používá běžně => Obsahuje - jesli je to prázdné, co v sobě má atd....
    const unsubscribe = projectFirestore.collection("Movies").onSnapshot( (snapshot) => {
      // 1 - dělá co chceme
        // Když je snapshot.empty false (prázdný) vypiš Error
      if (snapshot.empty){
        setError("Žádné filmy k vypsání")
        setData([])
      } else {
        let result = []
          //docs jsou objekty(id) tabulky, která cyklem napushuj po jednom do result
        snapshot.docs.forEach( (oneMovie) => {
            // napushuj id z docs a k tomu přidej všechna data tabulky Objektu
          result.push( {id: oneMovie.id, ...oneMovie.data()} )
        } )
        // Uložit data a vypsat
        setData(result)
        setError("")
      }
      // 2 - Vypsání chyb
    }, err => setError(err.message) )
 
    return () => unsubscribe()

  }, [])


// Mazání podle id
const deleteMovie = (id) => {
  // Vyber coleci a z ní dokument (dle id) / vymaž
  projectFirestore.collection("Movies").doc(id).delete()
}

// Vytvoření záznamu
//Asynchroní - ať nezdržuje
const submitForm = async (e) => {
  e.preventDefault()
  
  // Vytvoření nového objektu
  // Díky stejným jménům pak nění třeba
  const newMovie = {title: movieTitle, minage: parseInt(movieAge), time: parseInt(movieTime)}
  
  try{
    // Počkat
    if(newMovie.title && newMovie.minage && newMovie.time){
        if(newMovie.minage < 1 || newMovie.time < 1){
            setError("Věk a delké musí být větší než 1")
        }
        else{
            await projectFirestore.collection("Movies").add(newMovie)
            setError("Film přidán")
            setMovieTitle("")
            setMovieAge("")
            setMovieTime("")
        }
        
    }
    else{
        setError("Vyplně všechna pole")
    }
    
    // Jinak vypiš chybu
  }catch(err){
    setError("Film nebyl přidán: " + err.message)
  }
}

  return <section className="firebase-form2">
    {/* Vytvoření */}
    <form>
      <input type="text" placeholder="Název filmu" value={movieTitle} onChange={ (e) => {setMovieTitle(e.target.value)}} />
      <input type="number" placeholder="Minimální věk" value={movieAge} onChange={(e) => {setMovieAge(e.target.value)}} />
      <input type="number" placeholder="Čas filmu - min" value={movieTime} onChange={(e) => {setMovieTime(e.target.value)}} />
      <input type="submit" value="Přidat film" onClick={submitForm}/>
    </form>

    {/* Vypsání*/}
    {error && <p className="firebase-info">{error}</p>}

    <article className="movies">
        {data.map( (oneMovie) => {
        const {id,title,minage,time} = oneMovie
        return <div key={id} className="movie">
            <p>{title} - věk {minage}+, {time} minut</p>
            {/* Delete */}
            <button onClick={() => deleteMovie(id)}>Smazat</button>
        </div>
        })}
    </article>
  </section>
}

export default Form2
