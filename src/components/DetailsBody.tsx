import { useState } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

interface Props {
    features: string[];
}

const DetailsBody = ({ features }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col gap-2" onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

        <header className={`${hovering? 'border-[#00bc7d]':'border-[#00bc7d]/50'} border-b transition-all duration-200`}>
            <h4 className={`${hovering? 'text-[#00bc7d]':''} max-sm:text-sm font-semibold transition-all duration-200`}>
                Key Features
            </h4>
        </header>

        {
            features.map((feat, index)=>(
                <div className="flex items-center gap-2" key={index}>
                    <RiArrowDropRightFill className="text-[#00bc7d] w-4 h-4"/>

                    <p className="max-sm:text-sm">{feat}</p>
                </div>
            ))
        }

    </div>
  )
}

export default DetailsBody;