import { useInView } from "react-intersection-observer"
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";



const Contact = () => {
  const {scrolling, currentSection, setCurrentSection, contactRef} = useNavbarContext();
  const {inView, ref} = useInView({threshold: 0.5});
  const [hover, setHover] = useState(false);

  useEffect(()=>{
    if(inView && currentSection !== "contact" && !scrolling) {
      setCurrentSection("contact");
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="Contact" />
        
        <div className="inner-wrap" ref={ref}>

          <div className="contact" ref={contactRef}>

            <div className="contact-addresses">

              <div className="adress-container">
                <div className="adress-logo" 
                  onMouseEnter={()=> setHover(true)} 
                  onMouseLeave={()=> setHover(false)}
                  style={{backgroundColor: hover? '#008080':''}}>
                  <MdOutlineCall 
                    size={30}
                    color={hover? '#FFFF':'#008080'}
                  />
                </div>

                <div className="adress-info">
                  <p style={{fontWeight:600}}>Call Me</p>
                  <p>+234 7035229994</p>
                </div>
              </div>

              <div className="adress-container">
                <div className="adress-logo" 
                  onMouseEnter={()=> setHover(true)} 
                  onMouseLeave={()=> setHover(false)}
                  style={{backgroundColor: hover? '#008080':''}}>
                  <IoMailOutline 
                    size={30}
                    color={hover? '#FFFF':'#008080'}
                  />
                </div>

                <div className="adress-info">
                  <p style={{fontWeight:600}}>Email Me</p>
                  <p>uchennaagbu@gmail.com</p>
                </div>
              </div>

            </div>


            <div className="contact-box">

              <div className="input-wrap">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
              </div>

              <div className="input-wrap">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
              </div>

              <textarea name="Message" id="" placeholder="Message"></textarea>

              <button id="send">Send</button>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact