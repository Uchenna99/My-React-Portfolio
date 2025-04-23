import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bitmama from '../assets/IMAGES/photos/bitmama_clone.png'
import nvidia from "../assets/IMAGES/photos/nvidia.png"
import airbnb from "../assets/IMAGES/photos/airbnb.png"


const Work = () => {
  const {currentSection, setCurrentSection, scrolling, workRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView && currentSection !== "work" && !scrolling) {
      setCurrentSection("work");
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap" style={{borderTop:'1px solid teal'}}>

        <HeaderText title="Work" />

        <div className="inner-wrap" ref={ref}>

          <div className="work" ref={workRef}>

            <div className="work-sample" style={{backgroundImage:`url(${bitmama})`}}>

            </div>

            <div className="work-sample" style={{backgroundImage:`url(${nvidia})`}}></div>

            <div className="work-sample" style={{backgroundImage:`url(${airbnb})`}}>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Work