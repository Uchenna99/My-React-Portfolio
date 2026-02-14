import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import me from "../assets/IMAGES/photos/Me_smile.jpg"
import AboutParagraph from "./AboutParagraph";

interface Props {
}

const About = ({  }: Props) => {
  const [loading, setLoading] = useState(true);
  const {currentSection, setCurrentSection, aboutRef, scrolling} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView && currentSection !== "about" && !scrolling) {
      setCurrentSection("about");
    }
  }, [inView]);

  

  return (
    <>
      <div className="outer-wrap bg-slate-200" style={{height: 'fit-content'}}>

        <HeaderText title="About" />

        <div className="inner-wrap" ref={ref}>

          <div className="about" ref={aboutRef}>

            <div className="photo-info-wrap">

              <div className="photo">
                {
                  loading &&
                  <div className="skeleton-about-photo" />
                }
                <img src={me} alt="photo" 
                  loading="lazy"
                  onLoad={()=> setLoading(false)} 
                />
              </div>

              {/* <div className="about-info" >
                
                <AboutInfo label="Name" info="Uchenna Agbu" delay={0} />

                <AboutInfo label="Profile" info="Full stack developer" delay={0.1} />

                <AboutInfo label="Email" info="uchennaagbu@gmail.com" delay={0.2} />

                <AboutInfo label="Phone" info="+234 703 522 9994" delay={0.3} />

              </div> */}

            </div>
            
            <div className="about-text-wrap">
              <div className="about-text" >

                <AboutParagraph
                  delay={0.1}
                  text="I'm a Full Stack Developer with 4+ years of experience building scalable, production-ready web applications using React, 
                  TypeScript, Node.js, Express, and PostgreSQL."
                />

                <AboutParagraph
                  delay={0.2}
                  text="I specialize in creating fast, intuitive user interfaces backed by clean, well-structured APIs. From real-time systems 
                  with Socket.io to secure JWT authentication flows and payment integrations, I focus on delivering software that is both 
                  technically solid and user-centered."
                />

                <AboutParagraph
                  delay={0.3}
                  text="Beyond writing clean code, I care deeply about performance, maintainability, and great user experience. 
                  I've built and deployed full-stack applications, collaborated across teams, and taken products from idea to launch."
                />

                <AboutParagraph
                  delay={0.4}
                  text="I'm currently open to opportunities where I can contribute to impactful products, solve real business problems, 
                  and continue growing as a developer. If you're looking for someone who combines strong frontend expertise with solid 
                  backend architecture skills, let's connect."
                />

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default About