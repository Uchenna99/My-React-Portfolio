import { useState } from "react"
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import { useNavbarContext } from "../context/ContextProvider";




const NavBar = () => {

  const { currentSection, setCurrentSection, setScrolling, aboutRef, heroRef, skillsRef, workRef, contactRef } = useNavbarContext();

  const [burger, setBurger] = useState('hide');  


  return (
    <>
      <div className="navbar-container" onClick={()=>{burger==='show'? setBurger('hide'): null}}>

        <div className="laptop-navbar">
          <div className="name-logo"> <h2 id="h-reg">WELCOME</h2> </div>

          <div className="nav-right" onClick={()=> setScrolling(true)} >

            <div className="nav-options" onClick={()=> { setCurrentSection("home");
              heroRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p id="p-reg" 
                style={{fontFamily: currentSection==='home'? 'mbold':'', color: currentSection==='home'? '#008080' : ''}}
              >Home</p>
              <div className="faded-underline" style={{display: currentSection==='home'? 'none':''}}></div>
            </div>
            
            <div className="nav-options" onClick={()=> { setCurrentSection("about"); 
              aboutRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p id="p-reg" 
                style={{fontFamily: currentSection==='about'? 'mbold':'', color: currentSection==='about'? '#008080' : ''}}
              >About</p>
              <div className="faded-underline" style={{display: currentSection==='about'? 'none':''}}></div>
            </div>

            <div className="nav-options" onClick={()=> { setCurrentSection("skills"); 
              skillsRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p id="p-reg" 
                style={{fontFamily: currentSection==='skills'? 'mbold':'', color: currentSection==='skills'? '#008080' : ''}}
              >Skills</p>
              <div className="faded-underline" style={{display: currentSection==='skills'? 'none':''}}></div>
            </div>

            <div className="nav-options" onClick={()=> { setCurrentSection("work"); 
              workRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p id="p-reg" 
                style={{fontFamily: currentSection==='work'? 'mbold':'', color: currentSection==='work'? '#008080' : ''}}
              >Work</p>
              <div className="faded-underline" style={{display: currentSection==='work'? 'none':''}}></div>
            </div>
            
            <div className="nav-options" onClick={()=> { setCurrentSection("contact");
              contactRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p id="p-reg" style={{fontFamily: currentSection==='contact'? 'mbold':'', color: currentSection==='contact'? '#008080' : ''}}>Contact</p>
              <div className="faded-underline" style={{display: currentSection==='contact'? 'none':''}}></div>
            </div>
          </div>

          <div className="underline"
            style={{
              right: currentSection==='home'? '307px': currentSection==='about'? '232px':
              currentSection==='skills'? '160px': currentSection==='work'? '89px': currentSection==='contact'? '10px':''
            }}
          ></div>

        </div>


        
        <div className="tablet-navbar-wrap">
          <div className="tablet-navbar">

            <div className="name-logo"> <h2 id="h-reg">WELCOME</h2> </div>

            <div className="tab-nav-right" onClick={()=>{burger === 'show'? setBurger('hide') : setBurger('show') }}>
              { burger === 'show'? <ImMenu4 style={{color: "#008080"}} /> : <ImMenu3 style={{color: "#008080"}}/> }
            </div>

          </div>

        </div>

        <div className="drop-bacground" onClick={()=> setBurger('hide')} style={{display: burger==='show'? 'block':'none'}}></div>

        <div className={`drop-down ${burger === 'show'? 'drop-in' : ''}`} >

          <div className="highlighter" onClick={()=> { setCurrentSection("home"); 
            heroRef?.current?.scrollIntoView({behavior:'smooth'}) }} >
            <div className="nav-options" >
              <p id="p-reg" 
                style={{fontFamily: currentSection==='home'? 'mbold':'', color: currentSection==='home'? '#008080' : ''}}
              >Home</p>
              <div className="faded-underline2" style={{display: currentSection==='home'? 'flex':'none'}}></div>
            </div>
          </div>

          <div className="highlighter" onClick={()=> { setCurrentSection("about"); 
            aboutRef?.current?.scrollIntoView({behavior:'smooth'}) }}  >
            <div className="nav-options" >
              <p id="p-reg" style={{fontFamily: currentSection==='about'? 'mbold':'', color: currentSection==='about'? '#008080' : ''}}>About</p>
              <div className="faded-underline2" style={{display: currentSection==='about'? 'flex':'none'}}></div>
            </div>
          </div>

          <div className="highlighter" onClick={()=> { setCurrentSection("skills"); 
            skillsRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
            <div className="nav-options" >
              <p id="p-reg" style={{fontFamily: currentSection==='skills'? 'mbold':'', color: currentSection==='skills'? '#008080' : ''}}>Skills</p>
              <div className="faded-underline2" style={{display: currentSection==='skills'? 'flex':'none'}}></div>
            </div>
          </div>

          <div className="highlighter" onClick={()=> { setCurrentSection("work"); 
            workRef?.current?.scrollIntoView({behavior:'smooth'}) }} >
            <div className="nav-options" >
              <p id="p-reg" style={{fontFamily: currentSection==='work'? 'mbold':'', color: currentSection==='work'? '#008080' : ''}}>Work</p>
              <div className="faded-underline2" style={{display: currentSection==='work'? 'flex':'none'}}></div>
            </div>
          </div>

          <div className="highlighter" onClick={()=> { setCurrentSection("contact"); 
            contactRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
            <div className="nav-options" >
              <p id="p-reg" style={{fontFamily: currentSection==='contact'? 'mbold':'', color: currentSection==='contact'? '#008080' : ''}}>Contact</p>
              <div className="faded-underline2" style={{display: currentSection==='contact'? 'flex':'none'}}></div>
            </div>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default NavBar