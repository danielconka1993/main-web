import { useState } from "react"
import "./Form1.css"

const Form1 = () => {
  const [oneUser, setOneUser] = useState({name:"",email:"",age:""})
  const [users, setUsets] = useState([])

  const formChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setOneUser({...oneUser,[name]:value})
  }

  const btnOdeslat = (e) => {
    e.preventDefault()
    if(oneUser.name && oneUser.email && oneUser.age){
      // přidan index s časem vytvoření
        const newUser = {...oneUser, id: new Date().getTime()}

        setUsets((users) => {
          return [...users, newUser]
        })
    }
    setOneUser({name:"",email:"",age:""})
  }

  return <section className="Form1">
    <form>
      <input type="text" placeholder="Jméno" value={oneUser.name} onChange={formChange} name="name"  />
      <input type="email" placeholder="E-mail" value={oneUser.email} onChange={formChange} name="email"/>
      <input type="number" placeholder="Věk" value={oneUser.age} onChange={formChange} name="age" autoComplete="off" />
      <input type="submit" value="Odeslat" onClick={btnOdeslat} />
    </form>

    <article className="users">
      {
        users.map ( (oneUser)=> {
          const {id,name,email,age} = oneUser
          return <div className="oneUser" key={id}>
            <p>Jméno: {name}</p>
            <p>E-mail: {email}</p>
            <p>Věk: {age}</p>
          </div>
        })
      }
    </article>
  </section>
}

export default Form1