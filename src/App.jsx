import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import Header from "./containers/header"

import "./styles.scss"
import Footer from "./containers/footer"
import Projects from "./projects"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
