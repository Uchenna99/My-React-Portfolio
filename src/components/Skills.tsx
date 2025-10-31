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
import appwrite from "../assets/IMAGES/skills/appwrite_logo.png"
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { RiArrowDropRightFill } from "react-icons/ri";
import FadeUp from "./Elements/FadeUp";
import FadeIn from "./Elements/FadeIn";
import SkillBar from "./Elements/SkillBar";



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

            <FadeUp delay={0}>
              <div className="skills-display" >

                <h4 id="h4">Professional Skills</h4>
                <p>
                As a committed web developer, I possess a strong combination of technical proficiency and creative problem-solving 
                abilities. My skills span across modern web development practices and frameworks, including front-end and back-end 
                technologies, responsive designs, and user experience optimization.
                </p>

              </div>
            </FadeUp>


            <div className="skill-groups">

              <div className="skill-group-card-wrap">
                <FadeIn delay={0.1}>
                  <div className="skill-group-card">
                    <h4 id="h4">Front-End development</h4>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>
                          I can craft responsive, user-friendly interfaces with modern web technologies such as HTML, CSS, Javascript 
                          and Typescript.
                        </p>
                      </div>
                    </div>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>I'm also adept at utilizing libraries such as React.js and Tailwind CSS.</p>
                      </div>
                    </div>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>I work efficiently with designs from Figma and Adobe XD.</p>
                      </div>
                    </div>
                    
                    {
                      feVisible? <RiArrowUpDoubleLine id="arrow" onClick={()=>setFeVisible(false)}/> :
                      <RiArrowDownDoubleLine id="arrow" onClick={()=>setFeVisible(true)}/>
                    }

                    <div className={`language-skills ${feVisible? 'visible':''}`} >

                      <SkillBar title="HTML" image={html} level="95%" delay={0} />

                      <SkillBar title="CSS" image={css} level="90%" delay={0.1} />

                      <SkillBar title="Javascript" image={js} level="85%" delay={0.2} />

                      <SkillBar title="Typescript" image={ts} level="85%" delay={0.3} />

                      <SkillBar title="React" image={reactjs} level="85%" delay={0.4} />

                      <SkillBar title="Tailwind CSS" image={tailwind} level="85%" delay={0.5} />

                    </div>

                  </div>

                </FadeIn>
              </div>  

              <div className="skill-group-card-wrap">
                <FadeIn delay={0.2}>
                  <div className="skill-group-card">
                    <h4>Back-End Development</h4>
                    <p>
                      I am capable of building robust, scalable, and secure server-side applications with the following tools 
                    </p>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>Language: Node.js</p>
                      </div>
                    </div>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>Framework: Express.js</p>
                      </div>
                    </div>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>Databases: MongoDB, PostgreSQL & Appwrite</p>
                      </div>
                    </div>

                    <p>I can also build and consume RESTful APIs.</p>

                    {
                      beVisible? <RiArrowUpDoubleLine id="arrow" onClick={()=>setBeVisible(false)}/> :
                      <RiArrowDownDoubleLine id="arrow" onClick={()=>setBeVisible(true)}/>
                    }

                    <div className="language-skills" style={{display: beVisible? 'flex':'none'}}>

                      <SkillBar title="Prisma" image={prisma} level="95%" delay={0} />

                      <SkillBar title="PostgreSQL" image={pg} level="90%" delay={0.1} />

                      <SkillBar title="Node.js" image={node} level="85%" delay={0.2} />

                      <SkillBar title="Express.js" image={exp} level="85%" delay={0.3} /> 

                      <SkillBar title="MongoDB" image={mongodb} wyt={12} level="85%" delay={0.4} />

                      <SkillBar title="Appwrite" image={appwrite} level="70%" delay={0.5} />

                    </div>
                  </div>

                </FadeIn>
              </div>

              <div className="skill-group-card-wrap">
                <FadeIn delay={0.3}>
                  <div className="skill-group-card">
                    <h4>Soft Skills</h4>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>Problem solving & Debugging</p>
                      </div>
                    </div>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>Effective Communication & Team Collaboration</p>
                      </div>
                    </div>

                    <div className="card-indent">
                      <div className="indent-arrow">
                        <RiArrowDropRightFill id="arr-right" />
                      </div>

                      <div className="indent-text">
                        <p>Adaptability and Continuous Learning</p>
                      </div>
                    </div>

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