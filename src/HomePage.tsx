import { useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { NavbarContext } from "./context/ContextProvider"



const HomePage = () => {

  return (
    <>
    <NavbarContext>
        <div className="portfolio-wrap">

          <NavBar />

          <Hero />

          <About />

          <Skills />
          
          <Work />

          <Contact />

          <Footer />

        </div>
      </NavbarContext>
    </>
  )
}

export default HomePage