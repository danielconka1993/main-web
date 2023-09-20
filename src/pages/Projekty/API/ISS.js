import "./ISS.css"
import { useState, useEffect } from "react"

const ISS = () => {
  const [latitude,setLatitude] = useState("Původní text")
  const [longitude,setLongitude] = useState("Původní text")
  const [map,setMap] = useState()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      getDataStation();
    }, 1000);
}, []);

const url = "http://api.open-notify.org/iss-now.json"
 
const getDataStation = async() => {
      const response = await fetch(url)
      const data = await response.json()
      //destructuring
      let{iss_position:{latitude,longitude}} = data;

      setLatitude(latitude)
      setLongitude(longitude)
               
       //Načtení hodnot do odkazu         
       setMap(`https://www.google.com/maps/@${latitude},${longitude},15z?hl=cs-CZ&entry=ttu`)

      //Zrušení načítání
      setLoading(false)
  }


         if(loading){
    return <h4>Loading...</h4>
  }
  else{
  return <div className="ISS">
      <h2>Zeměpisná šířka</h2>
      <p>{latitude}</p>
      <h2>Zeměpisná délka</h2>
      <p>{longitude}</p>
      <h2>Na mapě</h2>
      <a href={map} target="_blank">Google mapa</a>
    </div>
}
}

export default ISS