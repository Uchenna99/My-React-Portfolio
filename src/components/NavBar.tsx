import { useState } from "react"

interface StateProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}


const NavBar = () => {
  const [home, setHome] = useState<boolean>(true);
  const [about, setAbout] = useState<boolean>(false);
  const [skills, setSkills] = useState<boolean>(false);
  const [work, setWork] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

  const navState = [ home, about, skills, work, contact ]

  const handleClick = ( {state, setState}: StateProps )=>{
    if(state === true){
      null;
    }else{
      setHome(false); setAbout(false); setSkills(false);
      setWork(false); setContact(false); setState(true);
    }
    
  };

  return (
    <>
      <div className="navbar-container">

        <div className="laptop-navbar">
          <div className="name-logo"> <h2>UCHE'S PORTFOLIO</h2> </div>

          <div className="nav-right">

            <div className="nav-options" onClick={()=> handleClick({state: home, setState: setHome})}>
              <p id="p-reg" style={{fontFamily: home? 'mbold':'', color: home? 'darkviolet' : ''}}>Home</p>
              <div className="faded-underline" style={{display: home? 'none':''}}></div>
            </div>
            
            <div className="nav-options" onClick={()=> handleClick({state: about, setState: setAbout})}>
              <p id="p-reg" style={{fontFamily: about? 'mbold':'', color: about? 'darkviolet' : ''}}>About</p>
              <div className="faded-underline" style={{display: about? 'none':''}}></div>
            </div>

            <div className="nav-options" onClick={()=> handleClick({state: skills, setState: setSkills})}>
              <p id="p-reg" style={{fontFamily: skills? 'mbold':'', color: skills? 'darkviolet' : ''}}>Skills</p>
              <div className="faded-underline" style={{display: skills? 'none':''}}></div>
            </div>
            <div className="nav-options" onClick={()=> handleClick({state: work, setState: setWork})}>
              <p id="p-reg" style={{fontFamily: work? 'mbold':'', color: work? 'darkviolet' : ''}}>Work</p>
              <div className="faded-underline" style={{display: work? 'none':''}}></div>
            </div>
            <div className="nav-options" onClick={()=> handleClick({state: contact, setState: setContact})}>
              <p id="p-reg" style={{fontFamily: contact? 'mbold':'', color: contact? 'darkviolet' : ''}}>Contact</p>
              <div className="faded-underline" style={{display: contact? 'none':''}}></div>
            </div>
          </div>

          {navState.includes(true) && 
            <div className="underline"
              style={{right: home? '507px' : about? '432px' : skills? '360px' : work? '291px' : contact? '212px' : ''}}
            ></div>

          }
        </div>

        <div className="tablet-navbar"></div>
      </div>
    </>
  )
}

export default NavBar