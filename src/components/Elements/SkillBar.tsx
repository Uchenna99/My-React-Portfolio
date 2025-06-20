import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
    image: string;
    title: string;
    level: string;
    delay: number;
    wyt?: number;
    hyt?: number;
}

const SkillBar = ({ title, image, level, delay, wyt, hyt }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: false});
  return (
    <div className="skill-card" ref={ref}>
        <div className="skill-info" >
            <div style={{display:'flex', alignItems:'end', gap:8}}>
            <p style={{fontSize:14}}> {title} </p>
            <img src={image} className={`${wyt? wyt : 'w-[22px]'} ${hyt? hyt : 'h-[22px]'} `} alt="" />
            </div>
            <p> {level} </p>
        </div>
        <div className="skill-bar" >
            <motion.div className="bar-filler " 
                initial={{width:'0%'}} animate={inView? {width: level}:{}} transition={{duration: 0.6, ease:'easeOut', delay}}
            />
        </div>
    </div>
  )
}

export default SkillBar