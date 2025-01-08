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
      <div className="outer-wrap">

        <HeaderText title="Work" />

        <div className="inner-wrap" ref={ref}>

          <div className="work" ref={workRef}></div>

        </div>
      </div>
    </>
  )
}

export default Work