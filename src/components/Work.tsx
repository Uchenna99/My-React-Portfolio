import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bitmama from '../assets/IMAGES/photos/bitmama_clone.png'
import nvidia from "../assets/IMAGES/photos/nvidia.png"
import airbnb from "../assets/IMAGES/photos/airbnb.png"


const Work = () => {
  const {setHome, setAbout, setSkills, setContact, work, setWork, workRef, navPress} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(work || navPress){
        null;
      }else{
        setHome(false); setAbout(false); setSkills(false);
        setWork(true); setContact(false);
      }
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap" style={{borderTop:'1px solid teal'}}>

        <HeaderText title="Work" />

        <div className="inner-wrap" ref={ref}>

          <div className="work" ref={workRef}>

            <div className="work-sample">
              <div className="thumbnail">
                <img src={bitmama} alt="work_thumbnail"
                  style={{width:'100%'}}
                />
              </div>
              <div className="desc-text">
                <h4>Bitmama</h4>
                <p>A clone of Bitmama.io home page and blog page(2024)</p>
                <Link id="b-link" target="_blank" to={'https://bitmama-clone-ts.vercel.app/'}>
                  <button id="thumb-butn">Visit</button>
                </Link>
              </div>
            </div>

            <div className="work-sample">
              <div className="thumbnail">
                <img src={nvidia} alt="work_thumbnail"
                  style={{width:'100%'}}
                />
              </div>
              <div className="desc-text">
                <h4>NVIDIA</h4>
                <p>A clone of NVIDIA home page(2024)</p>
                <Link id="b-link" target="_blank" to={'https://nvidia-clone-ts.vercel.app/'}>
                  <button id="thumb-butn">Visit</button>
                </Link>
              </div>
            </div>

            <div className="work-sample">
              <div className="thumbnail">
                <img src={airbnb} alt="work_thumbnail"
                  style={{width:'100%'}}
                />
              </div>
              <div className="desc-text">
                <h4>Airbnb</h4>
                <p>A clone of Airbnb home page (2024)</p>
                <Link id="b-link" target="_blank" to={'https://air-bnb-orpin.vercel.app/'}>
                  <button id="thumb-butn">Visit</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Work