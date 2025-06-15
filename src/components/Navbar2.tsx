import { useEffect, useState } from "react"
import { useNavbarContext } from "../context/ContextProvider";
import { Menu, X } from "lucide-react"


const Navbar2 = () => {
    const { currentSection, setCurrentSection, setScrolling, aboutRef, heroRef, skillsRef, workRef, contactRef } = useNavbarContext();
    
    const [burger, setBurger] = useState('hide');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPoint = 740; // px from top

        if (scrollPosition > triggerPoint) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-[60px] hidden sm:flex justify-center px-4 transition-all duration-800 " 
        style={{backgroundColor: scrolled? 'white':''}}
        onClick={()=>{burger==='show'? setBurger('hide'): null}}>

        <div className="w-full lg:w-[1200px] h-full hidden sm:flex justify-end sm:justify-center items-center relative ">

          <div className="w-[370px] min-w-[350px] h-full hidden sm:flex items-center gap-[30px] relative " 
            onClick={()=> setScrolling(true)} >

            <div className="nav-options" onClick={()=> { setCurrentSection("home");
              heroRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p className="text-slate-200 transition-all duration-200 " 
                style={{fontFamily: currentSection==='home'? 'mbold':'', color: currentSection==='home'? '#00bc7d': currentSection !== 'home' && scrolled? '#0f172b' : ''}}
              >Home</p>
            </div>
            
            <div className="nav-options" onClick={()=> { setCurrentSection("about"); 
              aboutRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p className="text-slate-200 transition-all duration-200 " 
                style={{fontFamily: currentSection==='about'? 'mbold':'', color: currentSection==='about'? '#00bc7d' : currentSection !== 'about' && scrolled? '#0f172b':''}}
              >About</p>
            </div>

            <div className="nav-options" onClick={()=> { setCurrentSection("skills"); 
              skillsRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p className="text-slate-200 transition-all duration-200 " 
                style={{fontFamily: currentSection==='skills'? 'mbold':'', color: currentSection==='skills'? '#00bc7d' : currentSection !== 'skills' && scrolled? '#0f172b' : ''}}
              >Skills</p>
            </div>

            <div className="nav-options" onClick={()=> { setCurrentSection("work"); 
              workRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p className="text-slate-200 transition-all duration-200 " 
                style={{fontFamily: currentSection==='work'? 'mbold':'', color: currentSection==='work'? '#00bc7d' : currentSection !== 'work' && scrolled? '#0f172b' : ''}}
              >Projects</p>
            </div>
            
            <div className="nav-options" onClick={()=> { setCurrentSection("contact");
              contactRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
              <p className="text-slate-200 transition-all duration-200 " 
              style={{fontFamily: currentSection==='contact'? 'mbold':'', color: currentSection==='contact'? '#00bc7d' : currentSection !== 'contact' && scrolled? '#0f172b' : ''}}>Contact</p>
            </div>


            <div className="underline"
              style={{
                right: currentSection==='home'? '333px': currentSection==='about'? '257px':
                currentSection==='skills'? '186px': currentSection==='work'? '106px': currentSection==='contact'? '18px':''
              }}
            ></div>

          </div>

        </div>

      </div>


      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center sm:hidden 
        fixed top-4 right-4 z-50 " 
        onClick={()=>{burger === 'show'? setBurger('hide') : setBurger('show') }}>
          {
            burger === 'show'?
            <X size={25} />
            :
            <Menu size={25} />
          }
      </div>

        
      <div className="drop-bacground" onClick={()=> setBurger('hide')} style={{display: burger==='show'? 'block':'none'}}></div>

      <div className={`drop-down ${burger === 'show'? 'drop-in' : ''}`} >

        <div className="highlighter" onClick={()=> { setCurrentSection("home"); 
          heroRef?.current?.scrollIntoView({behavior:'smooth'}) }} >
          <div className="nav-options" >
            <p className="text-slate-200 " 
              style={{fontFamily: currentSection==='home'? 'mbold':'', color: currentSection==='home'? '#00bc7d' : ''}}
            >Home</p>
            <div className="faded-underline2" style={{display: currentSection==='home'? 'flex':'none'}}></div>
          </div>
        </div>

        <div className="highlighter" onClick={()=> { setCurrentSection("about"); 
          aboutRef?.current?.scrollIntoView({behavior:'smooth'}) }}  >
          <div className="nav-options" >
            <p className="text-slate-200 " style={{fontFamily: currentSection==='about'? 'mbold':'', color: currentSection==='about'? '#00bc7d' : ''}}>About</p>
            <div className="faded-underline2" style={{display: currentSection==='about'? 'flex':'none'}}></div>
          </div>
        </div>

        <div className="highlighter" onClick={()=> { setCurrentSection("skills"); 
          skillsRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
          <div className="nav-options" >
            <p className="text-slate-200 " style={{fontFamily: currentSection==='skills'? 'mbold':'', color: currentSection==='skills'? '#00bc7d' : ''}}>Skills</p>
            <div className="faded-underline2" style={{display: currentSection==='skills'? 'flex':'none'}}></div>
          </div>
        </div>

        <div className="highlighter" onClick={()=> { setCurrentSection("work"); 
          workRef?.current?.scrollIntoView({behavior:'smooth'}) }} >
          <div className="nav-options" >
            <p className="text-slate-200 " style={{fontFamily: currentSection==='work'? 'mbold':'', color: currentSection==='work'? '#00bc7d' : ''}}>Projects</p>
            <div className="faded-underline2" style={{display: currentSection==='work'? 'flex':'none'}}></div>
          </div>
        </div>

        <div className="highlighter" onClick={()=> { setCurrentSection("contact"); 
          contactRef?.current?.scrollIntoView({behavior:'smooth'}) }}>
          <div className="nav-options" >
            <p className="text-slate-200 " style={{fontFamily: currentSection==='contact'? 'mbold':'', color: currentSection==='contact'? '#00bc7d' : ''}}>Contact</p>
            <div className="faded-underline2" style={{display: currentSection==='contact'? 'flex':'none'}}></div>
          </div>
        </div>

      </div>
        
      
    </>
    
  )
}

export default Navbar2;