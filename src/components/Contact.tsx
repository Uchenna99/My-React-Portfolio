import { useInView } from "react-intersection-observer"
import HeaderText from "./HeaderText"

interface Props {
  contactDiv: ()=>void;
}


const Contact = ({contactDiv}:Props) => {
  // const [view, setView] = useState()
  const { ref, inView } = useInView({threshold: 0.6});
  
  if(inView){
    contactDiv();
    // console.log(inView);
    
  }else{
    // contactDiv();
    // console.log(inView);
    
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