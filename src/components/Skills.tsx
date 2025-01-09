import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import html from "../assets/IMAGES/skills/html_256x256.png"
import css from "../assets/IMAGES/skills/css_256x256.png"
import js from "../assets/IMAGES/skills/javascript_256x256.png"
import ts from "../assets/IMAGES/skills/typescript_256x256.png"


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

          <div className="skills" ref={skillsRef}>

            <div className="language-skills">

              <div className="skill-logo" style={{backgroundImage: `url(${html})`}}></div>

              <div className="skill-logo" style={{backgroundImage: `url(${css})`}}></div>

              <div className="skill-logo" style={{backgroundImage: `url(${js})`}}></div>

              <div className="skill-logo" style={{backgroundImage: `url(${ts})`}}></div>

            </div>

            <div className="skills-photo"></div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Skills