import { useInView } from "react-intersection-observer"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import me from "../assets/IMAGES/photos/Me.jpg"


const Hero = () => {
  const {home, setHome, setAbout, setSkills, setContact, setWork, heroRef, contactRef, navPress} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(home || navPress){
        null;
      }else{
         setAbout(false); setSkills(false);
        setWork(false); setContact(false); setHome(true);
      }
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap">
        <div className="inner-wrap" ref={ref}>
          <div className="hero" ref={heroRef}>

            <div className="hero-text-section">
              <h2 id="h1">Hello,</h2>
              <h2 id="h2">My name is UCHE</h2>
              <h2 id="h3">I'm a Full Stack</h2>
              <h2 id="h4">Web Developer</h2>

              <button className="hero-butn"
                onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
                Contact Me
              </button>
            </div>

            <div className="hero-image-section">
              <div className="circle">
                <img src={me} alt="photo" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero