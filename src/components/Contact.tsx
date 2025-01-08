import HeaderText from "./HeaderText"



const Contact = () => {
  


  return (
    <>
      <div className="outer-wrap">

        <HeaderText title="Contact" />
        
        <div className="inner-wrap">

          <div className="contact" >
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