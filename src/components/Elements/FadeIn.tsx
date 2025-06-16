import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react";

interface Props {
    children: ReactNode;
    delay: number;
}

const FadeIn = ({ children, delay }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, {amount:1, once:true});
    
  return (
    <motion.div className="" ref={ref}
        initial={{opacity:0}} animate={inView? {opacity:1}:{}} transition={{duration:0.8, delay, ease:'easeOut'}} >
        {children}
    </motion.div>
  )
}

export default FadeIn