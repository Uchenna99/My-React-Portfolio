import { motion } from "framer-motion";
import DetailsHead from "./DetailsHead";
import DetailsBody from "./DetailsBody";
import { Card } from "./Work";
import { LuExternalLink } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";

interface Props {
    onClose: ()=> void;
    details: Card;
}

export interface ProjectDetails {
    name: string;
    problem: string;
    features: string[];
    stack: string[];
    implementation: string[];
}

const DetailsModal = ({ onClose, details }:Props) => {
  return (
    <div className="fixed top-0 left-0 z-100 w-full h-screen min-w-screen bg-black/30 flex items-center justify-center px-5">
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div className="z-110 w-125 max-w-full max-h-[75vh] bg-white border border-teal-400 p-5 flex flex-col gap-5 overflow-y-auto"
            initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.2, ease:'easeInOut'}}>
            
            <DetailsHead
                name={details.name}
                problem={details.details!.problem}
            />

            <DetailsBody
                name="Key Features"
                list={details.details!.features}
            />

            <DetailsBody
                name="Tech Stack"
                list={details.details!.stack}
            />

            <div className="flex justify-between">
                <a href={details.url} target="_blank" rel="noopener noreferrer" 
                    className="w-fit h-8 bg-teal-500 px-2.5 rounded-sm text-sm text-white flex items-center gap-2 
                    hover:bg-teal-700 transition-all duration-200 active:bg-teal-700">
                    View Live 
                    <LuExternalLink 
                        size={14} 
                        color="white"
                        style={{cursor:'pointer'}}
                    />
                </a>
                <a href={details.github} target="_blank" rel="noopener noreferrer" 
                    className="w-fit h-8 bg-teal-500 px-2.5 rounded-sm text-sm text-white flex items-center gap-2
                    hover:bg-teal-700 transition-all duration-200 active:bg-teal-700">
                    View Github
                    <BsGithub 
                        size={14} 
                        color="white"
                        style={{cursor:'pointer'}}
                    />
                </a>
            </div>

            <div className="flex flex-col gap-2"></div>

        </motion.div>

    </div>
  )
}

export default DetailsModal;