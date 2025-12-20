import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import bitmama from '../assets/IMAGES/photos/bitmama_clone.png'
import nvidia from "../assets/IMAGES/photos/nvidia.png"
import airbnb from "../assets/IMAGES/photos/airbnb.png"
import nairalender from "../assets/IMAGES/photos/nairalender.png"
import sap from "../assets/IMAGES/photos/sap_screenshot.png"
import hubspot from "../assets/IMAGES/photos/hubspot.png"
import salesforce from "../assets/IMAGES/photos/salesforce.png"
import shopper from "../assets/IMAGES/photos/Shopper.png"
import soon from "../assets/IMAGES/photos/coming_soon.png"
import WorkCard from "./WorkCard";
import FadeUp from "./Elements/FadeUp";

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
  const [projects, setProjects] = useState<Card[] | null>(null);

  const pageCards: Card[] = [
    { name: 'Shopper', desc: 'An E-commerce website for clothes and accessories', url: "https://www.shoppingspree.space", image: shopper, tech: 'react' },
    { name: 'Invoyce', desc: 'A clone of Invoyce.pro homepage and user dashboard', url: "https://invoyce-pro-clone.vercel.app/", image: 'https://res.cloudinary.com/df6xz7bqp/image/upload/v1751756568/Screenshot_2025-07-05_235611-min_bqfkd9.png', tech: 'react' },
    { name: 'NVIDIA', desc: 'A clone of NVIDIA home page', url: "https://nvidia-clone-ts.vercel.app/", image: nvidia, tech: 'react' },
    { name: 'Bitmama', desc: 'A clone of Bitmama home page and Signin/Signup page', url: "https://bitmama-clone-ts.vercel.app/", image: bitmama, tech: 'react' },
    { name: 'Evtol', desc: 'A drone delivery web app I designed', url: "https://evtol-delivery.vercel.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1764975765/Evtol_delivery_screenshot_fip0kw.png", tech: 'react' },
    { name: 'Carbon', desc: 'A clone of Carbon home page', url: "https://carbon-clone-uche.netlify.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749480397/Screenshot_2025-06-09_153823-min_fvik1l.png", tech: 'html' },
    { name: 'Hubspot', desc: 'A clone of Hubspot home page', url: "https://hubspot-clone-html.netlify.app/", image: hubspot, tech: 'html' },
    { name: 'HomeStyler', desc: 'A website for interior design services', url: "https://homestyler-by-elite-devs-5rjf.vercel.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1751153351/Screenshot_2025-06-29_000207-min_k7xly9.png", tech: 'react' },
    { name: 'Nairalender', desc: 'A loan web app I designed', url: "https://nairalender.vercel.app/", image: nairalender, tech: 'react' },
    { name: 'SAP', desc: 'A clone of SAP home page', url: "https://sap-clone-by-uchenna-agbu.netlify.app/", image: sap, tech: 'html' },
    { name: 'airbnb', desc: 'A clone of airbnb home page', url: "https://air-bnb-orpin.vercel.app/", image: airbnb, tech: 'react' },
    { name: 'Salesforce', desc: 'A clone of Salesforce home page', url: "https://salesforce-clone-html.netlify.app/", image: salesforce, tech: 'html' },
    { name: 'Asana', desc: 'A clone of Asana home page', url: "https://asanaclone.netlify.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749474036/Screenshot_2025-06-09_133601-min_atwt1d.png", tech: 'html' },
    { name: 'Notion', desc: 'A clone of Notion home page', url: "https://notion-clone-uche.netlify.app/", image: "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749508654/Screenshot_2025-06-09_233355-min_yoexhd.png", tech: 'html' },
    { name: ' ', desc: 'Coming soon', url: "", image: '', tech: 'mobile' },
  ]
  const emptyCard: Card = { name: ' ', desc: 'Coming soon', url: "", image: soon, tech: 'mobile' };

  useEffect(()=>{
    if(inView && currentSection !== "work" && !scrolling) {
      setCurrentSection("work");
    }
  }, [inView]);

  useEffect(()=>{
    const cardFilter = pageCards.filter((card)=> card.tech === options );
    if(cardFilter.length === 0) {
      setProjects(pageCards);
    }else { setProjects(cardFilter); }
  },[options]);


  return (
    <>
      <div className="outer-wrap bg-slate-100" style={{height:'fit-content'}}>

        <HeaderText title="Projects" />

        <div className="inner-wrap" ref={ref}>

          <div className="work-wrap" ref={workRef}>

            <FadeUp delay={0}>
              <div className="work-options">

                <div className="head-wrap" style={{borderColor: options === 'all'? '#00bc7d':'transparent' }}>
                  <p className="work-head" onClick={()=> setOptions('all')}
                  style={{color: options === 'all'? '#00bc7d':''}}>ALL</p>
                </div>
                <div className="head-wrap" style={{borderColor: options === 'react'? '#00bc7d':'transparent' }}>
                  <p className="work-head" onClick={()=> setOptions('react')}
                  style={{color: options === 'react'? '#00bc7d':''}}>REACT</p>
                </div>

                <div className="head-wrap" style={{borderColor: options === 'html'? '#00bc7d':'transparent' }}>
                  <p className="work-head" onClick={()=> setOptions('html')}
                  style={{color: options === 'html'? '#00bc7d':''}}>HTML/CSS</p>
                </div>

                <div className="head-wrap" style={{borderColor: options === 'mobile'? '#00bc7d':'transparent' }}>
                  <p className="work-head" onClick={()=> setOptions('mobile')}
                  style={{color: options === 'mobile'? '#00bc7d':''}}>MOBILE APP</p>
                </div>

              </div>
            </FadeUp>

            <div className="work" >

              {
                projects &&
                projects.map((card, index)=>(

                  <FadeUp delay={0.2} key={index}>
                    <WorkCard
                      card={card}
                    />
                  </FadeUp>

                ))
              }

              {
                options === 'mobile' &&
                <WorkCard card={emptyCard}/>
              }

            </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default Work