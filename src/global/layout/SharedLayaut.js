import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const SharedLayaut = () => {
  return <>
    <header><Header /></header>
    <main><Outlet /></main>    
    <Footer />
  </>
}

export default SharedLayaut