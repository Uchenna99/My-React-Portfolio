import { useInView } from "react-intersection-observer";
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";


const About = () => {
  const {setHome, about, setAbout, aboutRef, setSkills, setContact, setWork, navPress} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(about || navPress){
        null;
      }else{
        setHome(false);  setSkills(false);
        setWork(false); setContact(false); setAbout(true);
      }
    }
  }, [inView]);

  

  

  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="About" />

        <div className="inner-wrap" ref={ref}>

          <div className="about" ref={aboutRef}>

            <div className="photo"></div>

            <div className="about-text">
              <p>
                Hi, my name is Uchenna Agbu,
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, voluptatem veniam dignissimos quos vitae aliquam 
                expedita velit accusantium quasi error consequuntur possimus, est hic harum impedit! Aspernatur, id recusandae 
                excepturi ducimus pariatur aut fugiat voluptatem itaque corporis maxime sequi dolores, provident magni. Ex, assumenda 
                blanditiis impedit eos voluptatem ducimus. Quaerat ipsa saepe distinctio. Facere aliquid unde quae perspiciatis 
                molestiae quis doloribus nam, quod perferendis et aperiam, explicabo, iure quo illo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About