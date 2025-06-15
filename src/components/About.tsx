import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import me from "../assets/IMAGES/photos/Me_smile.jpg"
import AboutInfo from "./AboutInfo";
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
      <div className="outer-wrap bg-slate-100" style={{height: 'fit-content'}}>

        <HeaderText title="About" />

        <div className="inner-wrap" ref={ref}>

          <div className="about" ref={aboutRef}>

            <div className="photo-info-wrap">

              <div className="photo">
                {
                  loading &&
                  <div className="skeleton-about-photo" />
                }
                <img src={me} alt="photo" onLoad={()=> setLoading(false)} />
              </div>

              <div className="about-info" >
                
                <AboutInfo label="Name" info="Uchenna Agbu" />

                <AboutInfo label="Profile" info="Full stack developer" />

                <AboutInfo label="Email" info="uchennaagbu@gmail.com" />

                <AboutInfo label="Phone" info="+234 703 522 9994" />

              </div>

            </div>
            
            <div className="about-text-wrap">
              <div className="about-text" >

                <AboutParagraph
                  delay={0.1}
                  text="I'm a passionate Full Stack Web Developer with a strong drive for building scalable, user-friendly 
                    applications. With a solid foundation in both front-end and back-end technologies, I specialize in crafting seamless 
                    digital experiences that blend clean code with great design."
                />

                <AboutParagraph
                  delay={0.2}
                  text="I'm experienced with modern tech stacks like React, Node.js, TypeScript, Express, and PostgreSQL, and I thrive in 
                    environments that encourage continuous learning and collaboration. Whether I'm working on a solo project or 
                    contributing to a team, I bring a proactive mindset, 
                    attention to detail, and a genuine enthusiasm for development."
                />

                <AboutParagraph
                  delay={0.3}
                  text="I'm currently seeking opportunities where I can grow, 
                    contribute meaningfully, and help create impactful software products. When I'm not coding, you'll find me exploring 
                    new tech trends, mentoring others, or enjoying a good book or game.
                    Let's build something great together."
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