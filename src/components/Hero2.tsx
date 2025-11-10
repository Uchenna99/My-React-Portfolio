import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Hero2 = () => {
  // const imageUrl = "https://res.cloudinary.com/df6xz7bqp/image/upload/v1762378023/Generated_Image_November_05_2025_-_9_18PM-min_i919fw.png"
  const imageUrl = "https://res.cloudinary.com/df6xz7bqp/image/upload/v1762380159/Adobe_Express_-_file_3_-min_yeaq8b.png"

  const {scrolling, currentSection, setCurrentSection, heroRef, contactRef} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  useEffect(()=>{
    if(inView && currentSection !== "home" && !scrolling) {
      setCurrentSection("home");
    }
  }, [inView]);

  return (
    <>
    <div className="w-full flex justify-center px-4 md:px-10 "
      style={{background: 'linear-gradient(to top, #1d293d 0%, #0f172b 60%, #0f172b 100%)'}}>

      <motion.div className="relative h-full w-[1200px] max-w-full bg-blend-darken flex flex-col-reverse md:flex-row justify-between items-center md:items-end 
      -between py-20 gap-5 overflow-hidden " ref={heroRef}
        initial={{opacity:0, scale:1.1}} animate={{opacity:1, scale:1}} transition={{duration:0.5, ease:'easeOut'}}>

        <motion.div className="flex flex-col gap-6 z-20 md:pb-20" ref={ref}
          initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.3, ease:'easeOut'}} >

          <motion.p className="text-slate-200 text-4xl md:text-5xl text-center font-semibold "
            initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.3, ease:'easeOut'}}>
            Uchenna Agbu
          </motion.p>

          <motion.p className="text-slate-200 text-lg md:text-xl text-center font-semibold ital"
            initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.6, ease:'easeOut'}}>
            Full Stack Web Developer
          </motion.p>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-6">
            <button className="bg-emerald-500 hover:bg-emerald-700 w-fit h-12 rounded-lg text-xl text-slate-900 px-5 
              font-semibold cursor-pointer transition-all duration-200 mt-7 text-nowrap"
              onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
              Contact Me
            </button>
            {/* <button className="bg-emerald-500 hover:bg-emerald-700 w-fit h-12 rounded-lg text-xl text-slate-900 px-5 
              font-semibold cursor-pointer transition-all duration-200 mt-7 text-nowrap"
              onClick={ ()=> window.open('/Uchenna_Agbu_CV.pdf', '_blank') }>
              View Resume
            </button> */}
          </div>

        </motion.div>

        
        <div className="w-[500px] aspect-[1/1.4] max-w-full rounded-full border-2 border-white bg-cover bg-center bg-no-repeat"
          style={{backgroundImage:`url(${imageUrl})`}}>
          {/* <img src={imageUrl} alt="My Photo" className="absolute right-[-240px] md:right-[-100px] bottom-[-120px] w-[900px] 
            min-w-[900px] opacity-40 "
          /> */}
        </div>

      </motion.div>
      </div>
    </>
  )
}

export default Hero2