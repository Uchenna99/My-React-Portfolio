import { motion, useInView } from "framer-motion";
import { useRef } from "react";


interface Props {
    label: string;
    info: string;
    delay: number;
}

const AboutInfo = ({ label, info, delay }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount:1});

  return (
    <motion.div className=" w-fit " ref={ref} 
        initial={{opacity:0, x: 25}} animate={isInView?{opacity:1, x:0} : {}} 
        transition={{duration:0.5, delay, ease:'easeOut'}}>
        <motion.p>
            <span className="text-emerald-500 font-smbold">{label}: </span>
            {info}
        </motion.p>
    </motion.div>
  )
}

export default AboutInfo