import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Hero2 = () => {
  const imageUrl = "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749919456/me_no_bg_crop_gwa5wr.png"

  const {scrolling, currentSection, setCurrentSection, heroRef, contactRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView && currentSection !== "home" && !scrolling) {
      setCurrentSection("home");
    }
  }, [inView]);

  return (
    <>
    <div className="flex h-[800px] ">
      <motion.div className="relative h-[800px] w-full bg-[0px_-370px] bg-cover bg bg-no-repeat bg-blend-darken
        flex flex-col items-center justify-center px-4 md:px-10 overflow-hidden " ref={heroRef}
        style={{background: 'linear-gradient(to top, #1d293d 0%, #0f172b 35%, #0f172b 100%)'}}
        initial={{opacity:0, scale:1.1}} animate={{opacity:1, scale:1}} transition={{duration:0.5, ease:'easeOut'}}>

        <motion.div className="w-full lg:w-[1200px] flex flex-col gap-6 z-20 items-center md:items-start " ref={ref}
          initial={{opacity:0, y:80}} animate={{opacity:1, y:0}} transition={{duration:1, delay:0.3, ease:'easeOut'}} >

          <p className="text-slate-200 text-4xl md:text-5xl text-center font-semibold ">I'm Uchenna Agbu</p>

          <p className="text-slate-200 text-lg md:text-xl text-center font-semibold">Full Stack Web Developer</p>

          <button className="bg-emerald-500 hover:bg-emerald-700 w-fit h-12 rounded-lg text-xl text-slate-900 px-5 
            font-semibold cursor-pointer transition-all duration-200 mt-7 "
            onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
            Contact Me
          </button>

        </motion.div>

        
        <div className="w-full lg:w-[1200px] absolute bottom-0 ">
          <img src={imageUrl} alt="My Photo" className="absolute right-[-240px] md:right-[-100px] bottom-[-120px] w-[900px] 
            min-w-[900px] opacity-40 "
          />
        </div>

      </motion.div>
      </div>
    </>
  )
}

export default Hero2