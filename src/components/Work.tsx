import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import bitmama from '../assets/IMAGES/photos/bitmama_clone.png'
import nvidia from "../assets/IMAGES/photos/nvidia.png"
import airbnb from "../assets/IMAGES/photos/airbnb.png"
import nairalender from "../assets/IMAGES/photos/nairalender.png"
import { LuExternalLink } from "react-icons/lu";


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
      <div className="outer-wrap" style={{borderTop:'1px solid teal', borderBottom:'1px solid teal'}}>

        <HeaderText title="Work" />

        <div className="inner-wrap" ref={ref}>

          <div className="work" ref={workRef}>

            <div className="work-sample" style={{backgroundImage:`url(${bitmama})`}}>

              <div className="info-tag">

                <div className="info-tag-text">
                  <h4>Bitmama</h4>
                  <p style={{fontSize: 14}}>A clone of Bitmama website</p>
                </div>

                <div className="info-tag-link">
                  <a href="https://bitmama-clone-ts.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink 
                      size={25} 
                      color="#008080"
                      style={{cursor:'pointer'}} 
                    />
                  </a>
                </div>

              </div>

            </div>

            <div className="work-sample" style={{backgroundImage:`url(${nvidia})`}}>

              <div className="info-tag">

                <div className="info-tag-text">
                  <h4>NVIDIA</h4>
                  <p style={{fontSize: 14}}>A clone of NVIDIA website</p>
                </div>

                <div className="info-tag-link">
                  <a href="https://nvidia-clone-ts.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink 
                      size={25} 
                      color="#008080"
                      style={{cursor:'pointer'}} 
                    />
                  </a>
                </div>
                
              </div>

            </div>

            <div className="work-sample" style={{backgroundImage:`url(${airbnb})`}}>

              <div className="info-tag">

                <div className="info-tag-text">
                  <h4>airbnb</h4>
                  <p style={{fontSize: 14}}>A clone of airbnb website</p>
                </div>

                <div className="info-tag-link">
                  <a href="https://air-bnb-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink 
                      size={25} 
                      color="#008080"
                      style={{cursor:'pointer'}} 
                    />
                  </a>
                </div>
                
              </div>

            </div>

            <div className="work-sample" style={{backgroundImage:`url(${airbnb})`}}>

              <div className="info-tag">

                <div className="info-tag-text">
                  <h4>Evtol</h4>
                  <p style={{fontSize: 14}}>A drone delivery web app I designed</p>
                </div>

                <div className="info-tag-link">
                  <a href="https://evtol-vert.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink 
                      size={25} 
                      color="#008080"
                      style={{cursor:'pointer'}} 
                    />
                  </a>
                </div>
                
              </div>

            </div>

            <div className="work-sample" style={{backgroundImage:`url(${nairalender})`}}>

              <div className="info-tag">

                <div className="info-tag-text">
                  <h4>Nairalender</h4>
                  <p style={{fontSize: 14}}>A loan web app I designed</p>
                </div>

                <div className="info-tag-link">
                  <a href="https://nairalender.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink 
                      size={25} 
                      color="#008080"
                      style={{cursor:'pointer'}} 
                    />
                  </a>
                </div>
                
              </div>

            </div>

            <div className="work-sample" style={{backgroundImage:`url(${airbnb})`}}>

              <div className="info-tag">

                <div className="info-tag-text">
                  <h4>airbnb</h4>
                  <p style={{fontSize: 14}}>A clone of airbnb website</p>
                </div>

                <div className="info-tag-link">
                  <a href="https://air-bnb-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink 
                      size={25} 
                      color="#008080"
                      style={{cursor:'pointer'}} 
                    />
                  </a>
                </div>
                
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Work