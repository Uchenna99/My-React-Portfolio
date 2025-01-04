import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import Work from "./components/Work"


const HomePage = () => {
  return (
    <>
      <div className="portfolio-wrap">

        <NavBar />

        <Hero />

        <About />

        <Skills />
        
        <Work />

        <Contact />

        <Footer />

      </div>
    </>
  )
}

export default HomePage