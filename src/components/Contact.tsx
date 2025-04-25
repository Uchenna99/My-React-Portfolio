import { useInView } from "react-intersection-observer"
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";



const Contact = () => {
  const {scrolling, currentSection, setCurrentSection, contactRef} = useNavbarContext();
  const {inView, ref} = useInView({threshold: 0.5});

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
                <div className="adress-logo"></div>
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