import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
    text: string;
    delay: number;
}

const AboutParagraph = ({ text, delay }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount:0.5});

  return (
    <motion.div className="w-full flex gap-2 " ref={ref}
        initial={{opacity:0, y:40}} animate={isInView?{opacity:1, y:0}:{opacity:0, y:40}} 
        transition={{duration:0.5, delay, ease:'easeOut'}}>
        <div className="w-2 h-2 min-w-2 min-h-2 rounded-full bg-emerald-500 mt-2 "></div>
        <p className="text-slate-900 "> {text} </p>

    </motion.div>
  )
}

export default AboutParagraph