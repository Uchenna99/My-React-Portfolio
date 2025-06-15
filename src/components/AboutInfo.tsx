import { motion, useInView } from "framer-motion";
import { useRef } from "react";


interface Props {
    label: string;
    info: string;
}

const AboutInfo = ({ label, info }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount:0.5});

  return (
    <motion.div className="" ref={ref} 
        initial={{opacity:0, x:-50}} animate={isInView?{opacity:1, x:0}:{opacity:0, x:-200}} 
        transition={{duration:0.5, delay:0.2, ease:'easeOut'}}>
        <motion.p>
            <span className="text-emerald-500 font-smbold">{label}: </span>
            {info}
        </motion.p>
    </motion.div>
  )
}

export default AboutInfo