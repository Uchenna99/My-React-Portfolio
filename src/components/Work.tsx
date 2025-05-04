import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import bitmama from '../assets/IMAGES/photos/bitmama_clone.png'
import nvidia from "../assets/IMAGES/photos/nvidia.png"
import airbnb from "../assets/IMAGES/photos/airbnb.png"
import nairalender from "../assets/IMAGES/photos/nairalender.png"
import evtol from "../assets/IMAGES/photos/evtol.png"
import homestyler from "../assets/IMAGES/photos/homestyler.png"
import sap from "../assets/IMAGES/photos/sap_screenshot.png"
import hubspot from "../assets/IMAGES/photos/hubspot.png"
import salesforce from "../assets/IMAGES/photos/salesforce.png"
import { LuExternalLink } from "react-icons/lu";


const Work = () => {
  const {currentSection, setCurrentSection, scrolling, workRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});
  const [options, setOptions] = useState('all');

  useEffect(()=>{
    if(inView && currentSection !== "work" && !scrolling) {
      setCurrentSection("work");
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap" style={{height:'fit-content', borderTop:'1px solid teal', borderBottom:'1px solid teal'}}>

        <HeaderText title="Work" />

        <div className="inner-wrap" ref={ref}>

          <div className="work-wrap" ref={workRef}>

            <div className="work-options">

              <div className="head-wrap" style={{borderColor: options === 'all'? 'teal':'transparent' }}>
                <p className="work-head" onClick={()=> setOptions('all')}
                style={{color: options === 'all'? 'teal':''}}>ALL</p>
              </div>
              <div className="head-wrap" style={{borderColor: options === 'react'? 'teal':'transparent' }}>
                <p className="work-head" onClick={()=> setOptions('react')}
                style={{color: options === 'react'? 'teal':''}}>REACT</p>
              </div>

              <div className="head-wrap" style={{borderColor: options === 'html'? 'teal':'transparent' }}>
                <p className="work-head" onClick={()=> setOptions('html')}
                style={{color: options === 'html'? 'teal':''}}>HTML/CSS</p>
              </div>

              <div className="head-wrap" style={{borderColor: options === 'mobile'? 'teal':'transparent' }}>
                <p className="work-head" onClick={()=> setOptions('mobile')}
                style={{color: options === 'mobile'? 'teal':''}}>MOBILE APP</p>
              </div>

            </div>

            <div className="work" >

              <div className="work-sample" style={{backgroundImage:`url(${bitmama})`, 
                display: options === 'all' || options === 'react'? 'flex':'none'}}>

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

              <div className="work-sample" style={{backgroundImage:`url(${nvidia})`,
                display: options === 'all' || options === 'react'? 'flex':'none'}}>

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

              <div className="work-sample" style={{backgroundImage:`url(${hubspot})`,
                display: options === 'all' || options === 'html'? 'flex':'none'}}>

                <div className="info-tag">

                  <div className="info-tag-text">
                    <h4>Hubspot</h4>
                    <p style={{fontSize: 14}}>A clone of Hubspot website</p>
                  </div>

                  <div className="info-tag-link">
                    <a href="https://hubspot-clone-html.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <LuExternalLink 
                        size={25} 
                        color="#008080"
                        style={{cursor:'pointer'}} 
                      />
                    </a>
                  </div>
                  
                </div>

              </div>

              <div className="work-sample" style={{backgroundImage:`url(${evtol})`, backgroundPosition:'center',
                display: options === 'all' || options === 'react'? 'flex':'none'}}>

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

              <div className="work-sample" style={{backgroundImage:`url(${nairalender})`,
                display: options === 'all' || options === 'react'? 'flex':'none'}}>

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

              <div className="work-sample" style={{backgroundImage:`url(${homestyler})`,
                display: options === 'all' || options === 'react'? 'flex':'none'}}>

                <div className="info-tag">

                  <div className="info-tag-text">
                    <h4>HomeStyler</h4>
                    <p style={{fontSize: 14}}>A website for interior design services</p>
                  </div>

                  <div className="info-tag-link">
                    <a href="https://homestyler-by-elite-devs-5rjf.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <LuExternalLink 
                        size={25} 
                        color="#008080"
                        style={{cursor:'pointer'}} 
                      />
                    </a>
                  </div>
                  
                </div>

              </div>

              <div className="work-sample" style={{backgroundImage:`url(${sap})`,
                display: options === 'all' || options === 'html'? 'flex':'none'}}>

                <div className="info-tag">

                  <div className="info-tag-text">
                    <h4>SAP</h4>
                    <p style={{fontSize: 14}}>A clone of SAP website</p>
                  </div>

                  <div className="info-tag-link">
                    <a href="https://sap-clone-by-uchenna-agbu.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <LuExternalLink 
                        size={25} 
                        color="#008080"
                        style={{cursor:'pointer'}} 
                      />
                    </a>
                  </div>
                  
                </div>

              </div>

              <div className="work-sample" style={{backgroundImage:`url(${airbnb})`,
                display: options === 'all' || options === 'react'? 'flex':'none'}}>

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

              <div className="work-sample" style={{backgroundImage:`url(${salesforce})`,
                display: options === 'all' || options === 'html'? 'flex':'none'}}>

                <div className="info-tag">

                  <div className="info-tag-text">
                    <h4>Salesforce</h4>
                    <p style={{fontSize: 14}}>A clone of Salesforce website</p>
                  </div>

                  <div className="info-tag-link">
                    <a href="https://salesforce-clone-html.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <LuExternalLink 
                        size={25} 
                        color="#008080"
                        style={{cursor:'pointer'}} 
                      />
                    </a>
                  </div>
                  
                </div>

              </div>

              <div className="work-sample" style={{backgroundImage:``, alignItems:'center',
                display: options === 'mobile'? 'flex':'none'}}>
                  
                  <h4>Coming soon</h4>

                <div className="info-tag">

                  <div className="info-tag-text">
                    <h4>Coming soon</h4>
                    <p style={{fontSize: 14}}></p>
                  </div>

                  <div className="info-tag-link">
                    {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                      <LuExternalLink 
                        size={25} 
                        color="#008080"
                        style={{cursor:'pointer'}} 
                      />
                    {/* </a> */}
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

export default Work