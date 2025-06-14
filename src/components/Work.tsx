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
import WorkCard from "./WorkCard";

export interface Card {
  name: string;
  desc: string;
  url: string;
  image: string;
  tech: string;
}


const Work = () => {
  const {currentSection, setCurrentSection, scrolling, workRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});
  const [options, setOptions] = useState('all');
  const pageCards: Card[] = [
    { name: 'Bitmama', desc: 'A clone of Bitmama home page', url: "https://bitmama-clone-ts.vercel.app/", image: bitmama, tech: 'react' },
    { name: 'NVIDIA', desc: 'A clone of NVIDIA home page', url: "https://nvidia-clone-ts.vercel.app/", image: nvidia, tech: 'react' },
    { name: 'Hubspot', desc: 'A clone of Hubspot home page', url: "https://hubspot-clone-html.netlify.app/", image: hubspot, tech: 'html' },
    { name: 'Evtol', desc: 'A drone delivery web app I designed', url: "https://evtol-vert.vercel.app/", image: evtol, tech: 'react' },
    { name: 'Nairalender', desc: 'A loan web app I designed', url: "https://nairalender.vercel.app/", image: nairalender, tech: 'react' },
    { name: 'Carbon', desc: 'A clone of Carbon home page', url: "https://carbon-clone-uche.netlify.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749480397/Screenshot_2025-06-09_153823-min_fvik1l.png", tech: 'html' },
    { name: 'SAP', desc: 'A clone of SAP home page', url: "https://sap-clone-by-uchenna-agbu.netlify.app/", image: sap, tech: 'html' },
    { name: 'airbnb', desc: 'A clone of airbnb home page', url: "https://air-bnb-orpin.vercel.app/", image: airbnb, tech: 'react' },
    { name: 'Salesforce', desc: 'A clone of Salesforce home page', url: "https://salesforce-clone-html.netlify.app/", image: salesforce, tech: 'html' },
    { name: 'HomeStyler', desc: 'A website for interior design services', url: "https://nairalender.vercel.app/", image: homestyler, tech: 'react' },
    { name: 'Asana', desc: 'A clone of Asana home page', url: "https://asanaclone.netlify.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749474036/Screenshot_2025-06-09_133601-min_atwt1d.png", tech: 'html' },
    { name: 'Notion', desc: 'A clone of Notion home page', url: "https://notion-clone-uche.netlify.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749508654/Screenshot_2025-06-09_233355-min_yoexhd.png", tech: 'html' },
  ]

  useEffect(()=>{
    if(inView && currentSection !== "work" && !scrolling) {
      setCurrentSection("work");
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap" style={{height:'fit-content', borderTop:'1px solid teal', borderBottom:'1px solid teal'}}>

        <HeaderText title="Projects" />

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

              {
                pageCards.map((card, index)=>(

                  <WorkCard
                    options={options}
                    card={card}
                    key={index}
                  />

                ))
              }


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