import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bitmama from '../assets/IMAGES/photos/bitmama_clone.png'


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
              <div className="thumbnail" style={{backgroundImage:`url(${bitmama})`}}>
                <div className="thumbnail-hover">
                  <Link target="_blank" to={'https://bitmama-clone-ts.vercel.app/'}>
                    <button id="thumb-butn">Visit</button>
                  </Link>
                </div>
              </div>
              <div className="desc-text">
                <p>A clone of Bitmama.io home page and blog page</p>
              </div>
            </div>

            <div className="work-sample">
              <div className="thumbnail">
                <img src={bitmama} alt="work_thumbnail"
                  style={{width:'100%'}}
                />
              </div>
              <div className="desc-text">
                <h4>Bitmama</h4>
                <p>A clone of Bitmama.io home page and blog page</p>
                <Link target="_blank" to={'https://bitmama-clone-ts.vercel.app/'}>
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