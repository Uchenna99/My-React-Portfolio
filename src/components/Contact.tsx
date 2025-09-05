import { useInView } from "react-intersection-observer"
import HeaderText from "./HeaderText"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import axios from "axios";
import MessagePopup from "./MessagePopup";
import { HOST_URL } from "./Route";



const Contact = () => {
  const {scrolling, currentSection, setCurrentSection, contactRef} = useNavbarContext();
  const {inView, ref} = useInView({threshold: 0.5});
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState(false);
  const [success, setSuccess] = useState(true);

  const messageInfo = {
    name,
    message
  }


  useEffect(()=>{
    if(inView && currentSection !== "contact" && !scrolling) {
      setCurrentSection("contact");
    }
  }, [inView]);

  const handleMessage = ()=>{
    if(name.length > 1 && message.length > 2) {
      setSending(true);
  
      axios.post(`${HOST_URL}/api/v1/email/send-message`, messageInfo)
      .then((response)=>{
        setSuccess(response.data.success);
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
        }, 4000);
      })
      .catch(()=>{
        setSuccess(false);
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
        }, 4000);
      })
      .finally(()=> setSending(false));
    }
  };
  

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
                  style={{backgroundColor: hover? '#00bc7d':''}}>
                  <MdOutlineCall 
                    size={30}
                    color={hover? '#FFFF':'#00bc7d'}
                  />
                </div>

                <div className="adress-info">
                  <p style={{fontWeight:600}}>Call Me</p>
                  <p className="text-sm ">+234 703 522 9994</p>
                </div>
              </div>

              <div className="adress-container">
                <div className="adress-logo" 
                  onMouseEnter={()=> setHover2(true)} 
                  onMouseLeave={()=> setHover2(false)}
                  style={{backgroundColor: hover2? '#00bc7d':''}}>
                  <IoMailOutline 
                    size={30}
                    color={hover2? '#FFFF':'#00bc7d'}
                  />
                </div>

                <div className="adress-info">
                  <p style={{fontWeight:600}}>Email Me</p>
                  <p className="text-sm ">uchennaagbu@gmail.com</p>
                </div>
              </div>

              <div className="adress-container">
                <div className="adress-logo" 
                  onMouseEnter={()=> setHover3(true)} 
                  onMouseLeave={()=> setHover3(false)}
                  style={{backgroundColor: hover3? '#00bc7d':''}}>
                  <FaGithub 
                    size={30}
                    color={hover3? '#FFFF':'#00bc7d'}
                  />
                </div>

                <div className="adress-info">
                  <p style={{fontWeight:600}}>Github</p>
                  <a href="https://github.com/Uchenna99" className="text-sm hover:underline " target="_blank" rel="noopener noreferrer">
                    github.com/Uchenna99
                  </a>
                </div>
              </div>

            </div>


            <div className="contact-box">

              <div className="input-wrap">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
              </div>

              <textarea name="Message" id="" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>

              {
                sending?
                <button id="send" style={{ cursor:'not-allowed'}} onClick={handleMessage}>Sending message...</button>
                :
                <button id="send" onClick={handleMessage}>Send</button>
              }

              { popup && <MessagePopup success={success} /> }

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact