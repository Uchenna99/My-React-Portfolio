import { motion } from "framer-motion";

interface Props {
    onClose: ()=> void;
}

const DetailsModal = ({ onClose }:Props) => {
  return (
    <div className="fixed top-0 left-0 z-100 w-full h-screen min-w-screen bg-black/30 flex items-center justify-center px-5">
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div className="z-110 w-125 max-w-full bg-white border border-teal-400 p-5 "
            initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.2, ease:'easeInOut'}}>

        </motion.div>

    </div>
  )
}

export default DetailsModal;