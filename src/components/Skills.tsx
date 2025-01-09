import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import html from "../assets/IMAGES/skills/html_256x256.png"
import css from "../assets/IMAGES/skills/css_256x256.png"
import js from "../assets/IMAGES/skills/javascript_256x256.png"
import ts from "../assets/IMAGES/skills/typescript_256x256.png"
import reactjs from "../assets/IMAGES/skills/react_logo.png"
import pg from "../assets/IMAGES/skills/postgresql.248x256.png"
import prisma from "../assets/IMAGES/skills/prisma.png"
import mongodb from "../assets/IMAGES/skills/mongo_db.png"


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

            <div className="skills-display">

              <h2>Professional Skills</h2>
              <p>
              As a committed web developer, I possess a strong combination of technical proficiency and creative problem-solving 
              abilities. My skills span across modern web development practices and frameworks, including front-end and back-end 
              technologies, responsive designs, and user experience optimization.
              </p>

              <div className="language-skills">

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${html})`}}></div>
                  <p>HTML</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${css})`}}></div>
                  <p>CSS</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${js})`}}></div>
                  <p>Javascript</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${ts})`}}></div>
                  <p>Typescript</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${reactjs})`}}></div>
                  <p>React</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${pg})`}}></div>
                  <p>PostgreSQL</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${mongodb})`}}></div>
                  <p>Mongo DB</p>
                </div>

                <div className="skill-card">
                  <div className="skill-logo" style={{backgroundImage: `url(${prisma})`}}></div>
                  <p>Prisma</p>
                </div>

              </div>
            </div>

            <div className="skills-photo"></div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Skills