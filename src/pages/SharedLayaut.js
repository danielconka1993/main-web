import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SharedLayaut = () => {
  return <div className="body">
    <header><Header /></header>
    <main><Outlet /></main>    
    <footer><Footer /></footer>
  </div>
}

export default SharedLayaut