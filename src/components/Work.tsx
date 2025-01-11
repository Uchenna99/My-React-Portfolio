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

          <div className="work" ref={workRef}>
            <div className="project-card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium inventore molestiae fuga cumque dolor cum atque facere laborum doloremque quasi aliquam, ab veritatis perferendis dolores, eligendi exercitationem rem velit asperiores, quos deserunt. Sint ullam harum cumque minima sed veniam modi, voluptatem dicta architecto nesciunt. Architecto iure placeat possimus ipsum!</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Work