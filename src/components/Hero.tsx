import { useInView } from "react-intersection-observer"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import me from "../assets/IMAGES/photos/Me.jpg"


const Hero = () => {
  const [loading, setLoading] = useState(true);
  const {scrolling, currentSection, setCurrentSection, heroRef, contactRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});



  useEffect(()=>{
    if(inView && currentSection !== "home" && !scrolling) {
      setCurrentSection("home");
    }
  }, [inView]);
  
  useEffect(() => {
    const img = new Image();
    img.src = me;
    img.onload = () => setLoading(false);
  }, [me]);

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
              {
                loading?
                <div className="circle skeleton-circle" ></div>
                :
                <div className={`circle ${loading? 'skeleton-circle':''}`} 
                style={{backgroundImage: `url(${me})`}} ></div>
              }
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero