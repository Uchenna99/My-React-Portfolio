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

            <div className="skills-display">

              <h4 id="h4">Professional Skills</h4>
              <p>
              As a committed web developer, I possess a strong combination of technical proficiency and creative problem-solving 
              abilities. My skills span across modern web development practices and frameworks, including front-end and back-end 
              technologies, responsive designs, and user experience optimization.
              </p>

            </div>

            <div className="skill-groups">

              <div className="skill-group-card-wrap">
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

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>HTML</p>
                          <img src={html} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>95%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'ninety-five'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>CSS</p>
                          <img src={css} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>90%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'ninety', animationDelay: '100ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Javascript</p>
                          <img src={js} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>85%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty-five', animationDelay: '200ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Typescript</p>
                          <img src={ts} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>85%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty-five', animationDelay: '300ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>React</p>
                          <img src={reactjs} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>85%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty-five', animationDelay: '400ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Tailwind CSS</p>
                          <img src={tailwind} style={{width:22, height:18}} alt="" />
                        </div>
                        <p>80%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty', animationDelay: '500ms'}}></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>  

              <div className="skill-group-card-wrap">
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

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Prisma</p>
                          <img src={prisma} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>95%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'ninety-five'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>PostgreSQL</p>
                          <img src={pg} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>90%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'ninety', animationDelay: '100ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Node.js</p>
                          <img src={node} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>85%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty-five', animationDelay: '200ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Express.js</p>
                          <img src={exp} style={{width:22, height:16}} alt="" />
                        </div>
                        <p>85%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty-five', animationDelay: '300ms'}}></div>
                      </div>
                    </div>

                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>MongoDB</p>
                          <img src={mongodb} style={{width:12, height:22}} alt="" />
                        </div>
                        <p>85%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'eighty-five', animationDelay: '400ms'}}></div>
                      </div>
                    </div>



                    <div className="skill-card">
                      <div className="skill-info" >
                        <div style={{display:'flex', alignItems:'end', gap:8}}>
                          <p style={{fontSize:14}}>Appwrite</p>
                          <img src={appwrite} style={{width:22, height:22}} alt="" />
                        </div>
                        <p>70%</p>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-filler" style={{animationName: 'seventy', animationDelay: '500ms'}}></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="skill-group-card-wrap">
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
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Skills