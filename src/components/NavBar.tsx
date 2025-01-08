import React from "react";
import { useState } from "react"
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import { useNavbarContext } from "../context/ContextProvider";

interface StateProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ParentProps {
  parContact: boolean;
}


const NavBar = ({parContact}:ParentProps) => {
  // const [home, setHome] = useState<boolean>(true);
  // const [about, setAbout] = useState<boolean>(false);
  // const [skills, setSkills] = useState<boolean>(false);
  // const [work, setWork] = useState<boolean>(false);
  // const [contact, setContact] = useState<boolean>(false);

  const {
    about, setAbout, home, setHome, skills, setSkills, contact, setContact, work, setWork
  } = useNavbarContext();

  const [burger, setBurger] = useState('');

  const navState = [ home, about, skills, work, contact ];
  

  const handleClick = ( {state, setState}: StateProps )=>{
    if(state === true){
      null;
    }else{
      setHome(false); setAbout(false); setSkills(false);
      setWork(false); setContact(false); setState(true);
    }
    
  };

  if(parContact){ ()=>handleClick({state: contact, setState: setContact}) };


  return (
    <>
      <div className="navbar-container">

        <div className="laptop-navbar">
          <div className="name-logo"> <h2 id="h-reg">WELCOME</h2> </div>

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
              style={{right: home? '488px' : about? '412px' : skills? '340px' : work? '270px' : contact? '190px' : ''}}
            ></div>

          }
        </div>


        
        <div className="tablet-navbar-wrap">
          <div className="tablet-navbar">

            <div className="name-logo"> <h2 id="h-reg">WELCOME</h2> </div>

            <div className="tab-nav-right" onClick={()=>{burger === 'show'? setBurger('hide') : setBurger('show') }}>
              { burger === 'show'? <ImMenu4 style={{color: "darkviolet"}} /> : <ImMenu3 /> }
            </div>

          </div>

          <div className={`drop-down ${burger === 'show'? 'drop-in': burger === 'hide'? 'drop-out' : ''}`} >

            <div className="highlighter">
              <div className="nav-options" onClick={()=> handleClick({state: home, setState: setHome})}>
                <p id="p-reg" style={{fontFamily: home? 'mbold':'', color: home? 'darkviolet' : ''}}>Home</p>
                <div className="faded-underline2" style={{display: home? 'flex':'none'}}></div>
              </div>
            </div>

            <div className="highlighter">
              <div className="nav-options" onClick={()=> handleClick({state: about, setState: setAbout})}>
                <p id="p-reg" style={{fontFamily: about? 'mbold':'', color: about? 'darkviolet' : ''}}>About</p>
                <div className="faded-underline2" style={{display: about? 'flex':'none'}}></div>
              </div>
            </div>

            <div className="highlighter">
              <div className="nav-options" onClick={()=> handleClick({state: skills, setState: setSkills})}>
                <p id="p-reg" style={{fontFamily: skills? 'mbold':'', color: skills? 'darkviolet' : ''}}>Skills</p>
                <div className="faded-underline2" style={{display: skills? 'flex':'none'}}></div>
              </div>
            </div>

            <div className="highlighter">
              <div className="nav-options" onClick={()=> handleClick({state: work, setState: setWork})}>
                <p id="p-reg" style={{fontFamily: work? 'mbold':'', color: work? 'darkviolet' : ''}}>Work</p>
                <div className="faded-underline2" style={{display: work? 'flex':'none'}}></div>
              </div>
            </div>

            <div className="highlighter">
              <div className="nav-options" onClick={()=> handleClick({state: contact, setState: setContact})}>
                <p id="p-reg" style={{fontFamily: contact? 'mbold':'', color: contact? 'darkviolet' : ''}}>Contact</p>
                <div className="faded-underline2" style={{display: contact? 'flex':'none'}}></div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default NavBar