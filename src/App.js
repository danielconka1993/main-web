import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayaut from "./global/layout/SharedLayaut"
import Home from "./pages/Home"
import Projects from "./pages/Projacts"
import OneMovie from "./components/Projects/Netflix/oneMovie/OneMovie"
import Error from "./pages/Error"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayaut />}>
        <Route index element={<Home />} />
        <Route path="/projekty" element={<Projects />} />
        <Route path="/projekty/:movieId" element={<OneMovie />}/>
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App