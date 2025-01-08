import { useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import Work from "./components/Work"



const HomePage = () => {
  const [contact, setContact] = useState(false);

  return (
    <>
        <div className="portfolio-wrap">

          <NavBar parContact={contact} />

          <Hero />

          <About />

          <Skills />
          
          <Work />

          <Contact contactDiv={()=> setContact(!contact)} />

          <Footer />

        </div>
    </>
  )
}

export default HomePage