import { useInView } from "react-intersection-observer"
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";



const Contact = () => {
  const {contact, setContact, setHome, setAbout, setSkills, setWork, contactRef, navPress} = useNavbarContext();
  const {inView, ref} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView){
      if(contact || navPress){
        null;
      }else{
        setHome(false); setAbout(false); setSkills(false);
        setWork(false); setContact(true);
      }
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="Contact" />
        
        <div className="inner-wrap" ref={ref}>

          <div className="contact" ref={contactRef}>
            <div className="contact-box">

              <div className="input-wrap">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
              </div>

              <div className="input-wrap">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" />
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