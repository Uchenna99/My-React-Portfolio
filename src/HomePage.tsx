import { useEffect, useState } from "react"
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
import Hero2 from "./components/Hero2"
import Navbar2 from "./components/Navbar2"
// import Skills from "./components/Skills"
// import Work from "./components/Work"
import { NavbarContext } from "./context/ContextProvider"
import PageLoader from "./components/PageLoader";

import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));



const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
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

          <main>
            <Hero2/>

            <Suspense fallback={null}>

              <About />

              <Skills />

              <Work />

              <Contact />

              <Footer />
              
            </Suspense>
          </main>

        </div>
      </NavbarContext>
    </>
  )
}

export default HomePage