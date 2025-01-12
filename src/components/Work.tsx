import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";


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
                <div className="thumbnail-hover">
                  <button id="thumb-butn">Visit</button>
                </div>
              </div>
              <div className="desc-text">
                <p>A clone of Bitmama.io home page and blog page</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Work