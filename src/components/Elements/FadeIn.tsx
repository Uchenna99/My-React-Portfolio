import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react";

interface Props {
    children: ReactNode;
}

const FadeIn = ({ children }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, {amount:0.5, once:true});
    
  return (
    <motion.div className="w-fit h-fit" ref={ref}
        initial={{opacity:0, y:40}} animate={inView? {opacity:1, y:0}:{}} transition={{duration:0.5, delay:0.1, ease:'easeOut'}} >
        {children}
    </motion.div>
  )
}

export default FadeIn