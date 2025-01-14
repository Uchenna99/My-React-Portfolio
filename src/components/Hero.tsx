import { useInView } from "react-intersection-observer"
import { useNavbarContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import me from "../assets/IMAGES/photos/Me.jpg"
import axios from "axios";

interface DataProps{
  id: number;
  imgName: string;
  imgUrl: string;
  createdAt: any;
  updatedAt: any;
}

const Hero = () => {
  const getUrl = 'http://localhost:2006/myapi/v1/images';
  const {home, setHome, setAbout, setSkills, setContact, setWork, heroRef, contactRef, navPress} = useNavbarContext();
  const {ref, inView} = useInView({threshold: 0.5});

  const [images, setimages] = useState<DataProps[] | null>(null);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(()=>{
    const getImages = async ()=>{
      await axios.get<DataProps[]>(getUrl)
      .then(response => setimages(response.data))
      .catch(error => console.log(error)
      
      )
      setImgLoading(false);
    };
    getImages();
  }, []);


  useEffect(()=>{
    if(inView){
      if(home || navPress){
        null;
      }else{
         setAbout(false); setSkills(false);
        setWork(false); setContact(false); setHome(true);
      }
    }
  }, [inView]);
  

  return (
    <>
      <div className="outer-wrap">
        <div className="inner-wrap" ref={ref}>
          <div className="hero" ref={heroRef}>

            <div className="hero-text-section">
              <h2 >Hello,</h2>
              <h2 >My name is <span style={{color:'#008080'}}>UCHE</span></h2>
              <h2 >I'm a Full Stack</h2>
              <h2 >Web Developer</h2>

              <button className="hero-butn"
                onClick={ ()=> contactRef?.current?.scrollIntoView({behavior:'smooth'}) }>
                Contact Me
              </button>
            </div>

            <div className="hero-image-section">
              <div className="circle">
                {
                  imgLoading? <img src={me} alt="" style={{rotate:'45deg'}} /> :
                  <img src={images![0].imgUrl} alt="" />
                }
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero