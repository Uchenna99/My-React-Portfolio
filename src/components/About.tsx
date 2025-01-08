import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";


const About = () => {
  const {setHome, about, setAbout, aboutRef, setSkills, setContact, setWork, navPress} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(about || navPress){
        null;
      }else{
        setHome(false);  setSkills(false);
        setWork(false); setContact(false); setAbout(true);
      }
    }
  }, [inView]);

  

  

  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="About" />

        <div className="inner-wrap" ref={ref}>

          <div className="about" ref={aboutRef}></div>

        </div>
      </div>
    </>
  )
}

export default About