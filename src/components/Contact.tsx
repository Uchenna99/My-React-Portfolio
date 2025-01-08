import { useInView } from "react-intersection-observer"
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";



const Contact = () => {
  const {contact, setContact, setHome, setAbout, setSkills, setWork} = useNavbarContext();
  const {inView, ref} = useInView();
  if(inView){
    if(contact){
      null;
    }else{
      setHome(false); setAbout(false); setSkills(false);
      setWork(false); setContact(true);
    }
  }

  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="Contact" />
        
        <div className="inner-wrap">

          <div className="contact" ref={ref}>
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