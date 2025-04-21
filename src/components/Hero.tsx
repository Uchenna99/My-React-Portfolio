import { useInView } from "react-intersection-observer"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import me from "../assets/IMAGES/photos/Me.jpg"

// interface DataProps{
//   id: number;
//   imgName: string;
//   imgUrl: string;
//   createdAt: any;
//   updatedAt: any;
// }

const Hero = () => {
  const {scrolling, currentSection, setCurrentSection, heroRef, contactRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});



  useEffect(()=>{
    if(inView && currentSection !== "home" && !scrolling) {
      setCurrentSection("home");
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap">
        <div className="inner-wrap" ref={ref}>
          <div className="hero" ref={heroRef}>

            <div className="hero-text-section">
              <h2 >I'm Uchenna Agbu</h2>
              <h2 >A Full Stack</h2>
              <h2 >Web Developer</h2>

              <button className="hero-butn"
                onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
                Contact Me
              </button>
            </div>

            <div className="hero-image-section">
              <div className="circle">
                <img src={me} alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero