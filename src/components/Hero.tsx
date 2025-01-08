import { useInView } from "react-intersection-observer"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";


const Hero = () => {
  const {home, setHome, setAbout, setSkills, setContact, setWork} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(home){
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
        <div className="inner-wrap">
          <div className="hero" ref={ref}>

            <div className="hero-text-section">
              <h2 id="h1">Hello,</h2>
              <h2 id="h2">My name is UCHE</h2>
              <h2 id="h3">I am a Full Stack</h2>
              <h2 id="h4">Web Developer</h2>

              <button className="hero-butn">Contact Me</button>
            </div>

            <div className="hero-image-section">
              <div className="circle">
                {/* <div className="circle2"></div> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero