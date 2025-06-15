import { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// import Hero from "./components/Hero"
import Hero2 from "./components/Hero2"
// import NavBar from "./components/NavBar"
import Navbar2 from "./components/Navbar2"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { NavbarContext } from "./context/ContextProvider"
import PageLoader from "./components/PageLoader"



const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const img = new Image();
    img.src = "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749919456/me_no_bg_crop_gwa5wr.png";
    img.onload = ()=> { setLoading(false) }
  },[]);

  return (
    <>
    <NavbarContext>

      {
        loading?
        <PageLoader />
        :
        <div className={`portfolio-wrap ${loading? 'opacity-0': 'opacity-100'}`}>

          {/* <NavBar /> */}

          <Navbar2/>

          {/* <Hero /> */}

          <Hero2/>

          <About />

          <Skills />
          
          <Work />

          <Contact />

          <Footer />

        </div>
      }
      </NavbarContext>
    </>
  )
}

export default HomePage