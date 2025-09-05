import { motion } from "framer-motion";

interface Props {
    success: boolean;
}

const MessagePopup = ({ success }:Props) => {
  return (
    <>
        <div className="fixed top-0 left-0 z-90 w-full h-full bg-black/40 flex items-center justify-center p-1">

            <motion.div className="w-[700px] max-w-full px-5 py-10 bg-white rounded-sm flex justify-center"
                initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.3, ease:'easeInOut'}}>
                {
                    success?
                    <p className="text-lg text-center">Your message has been sent, thank you for reaching out.</p>
                    :
                    <div className="flex flex-col gap-3">
                        <p className="text-lg text-center">Something went wrong, please try again.</p>
                    </div>
                }
            </motion.div>

        </div>
    </>
  )
}

export default MessagePopup