import { Routes,Route } from "react-router-dom"
import { Header } from "./components/Layouts/Header/Header"
import { Footer } from "./components/Layouts/Footer/Footer"
import { Container } from "../src/components/Container/Container"
import { Home } from "./components/Pages/Home/Home"
import { Skills } from "./components/Pages/Skills/Skills"
import { SocialSkills } from "./components/Pages/SocialSkills/SocialSkills"
import { Studies } from "./components/Pages/Studies/Studies"
import { Experiences } from "./components/Pages/Experiences/Experiences"

export const App = () => {
  return (
    <>
      <Header/>
      <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/socialskills' element={<SocialSkills/>}/>
        <Route path='/studies' element={<Studies/>}/>
        <Route path='/experiences' element={<Experiences/>}/>
      </Routes>
      </Container>
      <Footer/>
    </>
  )
}

export default App
