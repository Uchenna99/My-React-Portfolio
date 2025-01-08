import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";


const Skills = () => {
  const {setHome, setAbout, skills, setSkills, setContact, setWork, skillsRef, navPress} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(skills || navPress){
        null;
      }else{
        setHome(false); setAbout(false); setSkills(true);
        setWork(false); setContact(false);
      }
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="Skills" />

        <div className="inner-wrap" ref={ref}>

          <div className="skills" ref={skillsRef}></div>

        </div>

      </div>
    </>
  )
}

export default Skills