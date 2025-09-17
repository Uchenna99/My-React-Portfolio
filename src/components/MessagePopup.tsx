import { motion } from "framer-motion";
import cancel from '../assets/ICONS/cancel.png';
import check from '../assets/ICONS/check.png'
import { X } from "lucide-react";

interface Props {
    success: boolean;
    closePopup: ()=>void;
}

const MessagePopup = ({ success, closePopup }:Props) => {
  return (
    <>
        <div className="fixed top-0 left-0 z-90 w-full h-full bg-black/40 flex items-center justify-center p-1">

            <motion.div className="w-[700px] max-w-full px-5 py-10 bg-white rounded-sm flex justify-center relative"
                initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.3, ease:'easeInOut'}}>
                {
                    success?
                    <div className="flex flex-col items-center gap-3">
                        <img src={check} alt="" className="w-10 h-10" />
                        <p className="text-lg text-center">Your message has been sent, thank you for reaching out.</p>
                    </div>
                    :
                    <div className="flex flex-col items-center gap-3">
                        <img src={cancel} alt="" className="w-10 h-10" />
                        <p className="text-lg text-center">Something went wrong, please try again.</p>
                    </div>
                }
                <X
                    className="cursor-pointer absolute top-3 right-3"
                    size={22}
                    onClick={closePopup}
                />
            </motion.div>

        </div>
    </>
  )
}

export default MessagePopup