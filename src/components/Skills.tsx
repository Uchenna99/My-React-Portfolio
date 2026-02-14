import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import html from "../assets/IMAGES/skills/html_256x256.png"
import css from "../assets/IMAGES/skills/css_256x256.png"
import js from "../assets/IMAGES/skills/javascript_256x256.png"
import ts from "../assets/IMAGES/skills/typescript_256x256.png"
import reactjs from "../assets/IMAGES/skills/react_logo.png"
import pg from "../assets/IMAGES/skills/postgresql.248x256.png"
import prisma from "../assets/IMAGES/skills/prisma.png"
import mongodb from "../assets/IMAGES/skills/mongo_db.png"
import node from "../assets/IMAGES/skills/node-js.227x256.png"
import exp from "../assets/IMAGES/skills/express-original.256x149.png"
import tailwind from "../assets/IMAGES/skills/Tailwind_CSS_Logo.png"
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import FadeIn from "./Elements/FadeIn";
import SkillBar from "./Elements/SkillBar";
import SkillText from "./SkillText";



const Skills = () => {
  const [feVisible, setFeVisible] = useState(false);
  const [beVisible, setBeVisible] = useState(false);

  const {scrolling, currentSection, setCurrentSection, skillsRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView && currentSection !== "skills" && !scrolling) {
      setCurrentSection("skills");
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap" style={{height:'fit-content'}}>

        <HeaderText title="Skills" />

        <div className="inner-wrap" ref={ref}>

          <div className="skills" ref={skillsRef}>


            <div className="skill-groups">

              <div className="skill-group-card-wrap">
                <FadeIn delay={0.1}>
                  <div className="skill-group-card">
                    <h2 id="h4">Front-End development</h2>

                    <SkillText
                      skill="React (Components, Hooks, Context, Performance Optimization)"
                    />

                    <SkillText
                      skill="TypeScript"
                    />

                    <SkillText
                      skill="Tailwind CSS"
                    />

                    <SkillText
                      skill="Responsive & Mobile-First Design"
                    />

                    <SkillText
                      skill="Figma-to-Code Implementation"
                    />

                    <SkillText
                      skill="React Router & State Management"
                    />
                    
                    {
                      feVisible? <RiArrowUpDoubleLine id="arrow" onClick={()=>setFeVisible(false)}/> :
                      <RiArrowDownDoubleLine id="arrow" onClick={()=>setFeVisible(true)}/>
                    }

                    <div className={`language-skills ${feVisible? 'visible':''}`} >

                      <SkillBar title="HTML" image={html} level="95%" delay={0} />

                      <SkillBar title="CSS" image={css} level="95%" delay={0.1} />

                      <SkillBar title="React" image={reactjs} level="90%" delay={0.2} />

                      <SkillBar title="Tailwind CSS" image={tailwind} level="88%" delay={0.3} />

                      <SkillBar title="Javascript" image={js} level="86%" delay={0.4} />

                      <SkillBar title="Typescript" image={ts} level="86%" delay={0.5} />


                    </div>

                  </div>

                </FadeIn>
              </div>  


              <div className="skill-group-card-wrap">
                <FadeIn delay={0.2}>
                  <div className="skill-group-card">
                    <h2>Back-End Development</h2>
                    
                    <SkillText
                      skill="Node.js"
                    />

                    <SkillText
                      skill="Express.js"
                    />

                    <SkillText
                      skill="REST API Design"
                    />

                    <SkillText
                      skill="JWT Authentication"
                    />

                    <SkillText
                      skill="PostgreSQL (Prisma)"
                    />

                    <SkillText
                      skill="Real-time apps with Socket.io"
                    />

                    {
                      beVisible? <RiArrowUpDoubleLine id="arrow" onClick={()=>setBeVisible(false)}/> :
                      <RiArrowDownDoubleLine id="arrow" onClick={()=>setBeVisible(true)}/>
                    }

                    <div className="language-skills" style={{display: beVisible? 'flex':'none'}}>

                      <SkillBar title="Prisma" image={prisma} level="95%" delay={0} />

                      <SkillBar title="PostgreSQL" image={pg} level="95%" delay={0.1} />

                      <SkillBar title="Node.js" image={node} level="87%" delay={0.2} />

                      <SkillBar title="Express.js" image={exp} level="87%" delay={0.3} /> 

                      <SkillBar title="MongoDB" image={mongodb} wyt={12} level="85%" delay={0.4} />

                      {/* <SkillBar title="Appwrite" image={appwrite} level="70%" delay={0.5} /> */}

                    </div>
                  </div>

                </FadeIn>
              </div>

              <div className="skill-group-card-wrap">
                <FadeIn delay={0.3}>
                  <div className="skill-group-card">
                    <h2>Soft Skills</h2>

                    <SkillText
                      skill="Problem Solving"
                    />

                    <SkillText
                      skill="Clear Communication"
                    />

                    <SkillText
                      skill="Ownership & Initiative"
                    />

                  </div>

                </FadeIn>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Skills