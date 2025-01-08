import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";


const Skills = () => {
  const {setHome, setAbout, skills, setSkills, setContact, setWork} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(skills){
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

        <div className="inner-wrap">

          <div className="skills" ref={ref}></div>

        </div>

      </div>
    </>
  )
}

export default Skills