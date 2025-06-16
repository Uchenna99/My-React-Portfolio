import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

interface Props {
  children: ReactNode;
  delay: number;
}

const FadeUp = ({ children, delay }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, {amount:0.6, once:true});

  return (
    <motion.div className="" ref={ref}
        initial={{opacity:0, y:40}} animate={inView? {opacity:1, y:0}:{}} transition={{duration:0.8, delay, ease:'easeOut'}} >
        {children}
    </motion.div>
  )
}

export default FadeUp;