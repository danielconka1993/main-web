import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayaut from "./pages/SharedLayaut"
import Domu from "./pages/Domu"
import Projekty from "./pages/Projekty"
import OneMovie from "./pages/Projekty/Netflix/oneMovie/OneMovie"
import Error from "./pages/Error"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayaut />}>
        <Route index element={<Domu />} />
        <Route path="/projekty" element={<Projekty />} />
        <Route path="/projekty/:movieId" element={<OneMovie />}/>
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App