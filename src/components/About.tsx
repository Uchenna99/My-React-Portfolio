import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import me from "../assets/IMAGES/photos/Me_smile.jpg"

interface Props {
}

const About = ({  }: Props) => {
  const {currentSection, setCurrentSection, aboutRef, scrolling} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView && currentSection !== "about" && !scrolling) {
      setCurrentSection("about");
    }
  }, [inView]);

  

  

  return (
    <>
      <div className="outer-wrap" style={{backgroundColor:'#E5E5E5'}}>

        <HeaderText title="About" />

        <div className="inner-wrap" ref={ref}>

          <div className="about" ref={aboutRef}>

            <div className="photo">
              <img src={me} alt="photo" />
            </div>
            
            <div className="about-text-wrap">
              <div className="about-text">
                <p>
                  Hi, I'm Uchenna Agbu, a passionate Full Stack Web Developer with a strong drive for building scalable, user-friendly 
                  applications. With a solid foundation in both front-end and back-end technologies, I specialize in crafting seamless 
                  digital experiences that blend clean code with great design. From building responsive web interfaces to developing 
                  robust APIs, I enjoy turning complex problems into elegant solutions. I'm experienced with modern tech stacks like 
                  React, Node.js, TypeScript, Express, and PostgreSQL, and I thrive in environments that encourage continuous learning 
                  and collaboration. Whether I'm working on a solo project or contributing to a team, I bring a proactive mindset, 
                  attention to detail, and a genuine enthusiasm for development. I'm currently seeking opportunities where I can grow, 
                  contribute meaningfully, and help create impactful software products. When I'm not coding, you'll find me exploring 
                  new tech trends, mentoring others, or enjoying a good book or game.
                  Let's build something great together.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About