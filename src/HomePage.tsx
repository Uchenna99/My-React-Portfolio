import { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero2 from "./components/Hero2"
import Navbar2 from "./components/Navbar2"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { NavbarContext } from "./context/ContextProvider"
import PageLoader from "./components/PageLoader";
import hero_img from "./assets/IMAGES/photos/my_photo.png";



const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const img = new Image();
    img.src = hero_img;
    img.onload = ()=> { setTimeout(() => {
      setLoading(false);
    }, 200); }
  },[]);

  return (
    <>
      <NavbarContext>

        {
          loading &&
          <PageLoader />
        }

        <div className={`portfolio-wrap ${loading? 'opacity-0': 'opacity-100'} transition-all duration-250`}>

          <Navbar2/>

          <Hero2/>

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