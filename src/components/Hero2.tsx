import { useNavbarContext } from "../context/ContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";



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
      <div className="relative h-[800px] w-full bg-slate-800 bg-[0px_-370px] bg-cover bg bg-no-repeat bg-blend-darken
        flex flex-col items-center justify-center px-10 " ref={heroRef}
        style={{background: 'linear-gradient(to top, #1d293d 0%, #0f172b 35%, #0f172b 100%)'}}>

        <div className="w-full lg:w-[1200px] flex flex-col gap-5 " ref={ref}>

          <p className="text-slate-200 text-5xl font-semibold ">I'm Uchenna Agbu</p>

          <p className="text-slate-200 text-xl font-semibold">Full Stack Web Developer</p>

          <button className="bg-emerald-500 hover:bg-emerald-700 w-fit h-12 rounded-lg text-xl text-slate-900 !px-5 
            font-semibold cursor-pointer transition-all duration-200 mt-5 "
            onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
            Contact Me
          </button>

        </div>

        
        <img src={imageUrl} alt="My Photo" className="absolute right-0 top-0 w-[900px] "/>

      </div>
    </>
  )
}

export default Hero2