import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import my_image from "../assets/IMAGES/photos/my_photo.png";


const Hero2 = () => {
  // const imageUrl = "https://res.cloudinary.com/df6xz7bqp/image/upload/v1762380159/Adobe_Express_-_file_3_-min_yeaq8b.png"

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

      <div className="relative h-full w-[1200px] max-w-full bg-blend-darken flex flex-col-reverse md:flex-row justify-between items-center 
        md:items-end py-20 gap-10 overflow-hidden " ref={heroRef}>

        <motion.div className="w-[500px] max-w-full flex flex-col gap-6 z-20 md:pb-20" ref={ref}
          initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.3, ease:'easeOut'}} >

          <motion.p className="text-slate-300 text-3xl md:text-4xl max-md:text-center font-medium "
            initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.3, ease:'easeOut'}}>
            Uchenna Agbu
          </motion.p>

          <motion.h1 className="text-slate-200 text-4xl md:text-5xl max-md:text-center font-semibold ital"
            initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.6, ease:'easeOut'}}>
            Full Stack MERN & React Developer
          </motion.h1>

          <motion.p className="text-slate-200 text-lg md:text-xl max-md:text-center font-medium ital"
            initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.8, ease:'easeOut'}}>
            I build scalable, high-performance web applications using React, Node.js, Express, and MongoDB / PostgreSQL.
          </motion.p>

          <div className="w-full flex max-md:justify-center mt-7">
            <button className="bg-emerald-500 hover:bg-emerald-700 w-fit h-12 rounded-md text-xl text-slate-900 px-5 
              font-semibold cursor-pointer transition-all duration-200 text-nowrap"
              onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
              Contact Me
            </button>
          </div>

        </motion.div>

        
        <img
          src={my_image}
          alt="Uchenna Agbu"
          className="w-[400px] md:w-[450px] aspect-[1/1.3] max-w-full rounded-full border-2 border-white object-cover"
          fetchPriority="high"
          loading="eager"
        />

      </div>
      </div>
    </>
  )
}

export default Hero2