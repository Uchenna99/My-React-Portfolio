import { useState } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

interface Props {
    list: string[];
}

const DetailsBody = ({ list }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col gap-2" onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

        <header className={`${hovering? 'border-[#00bc7d]':'border-[#00bc7d]/50'} border-b transition-all duration-200`}>
            <h4 className={`${hovering? 'text-[#00bc7d]':''} max-sm:text-sm font-semibold transition-all duration-200`}>
                Key Features
            </h4>
        </header>

        {
            list.map((item, index)=>(
                <div className="flex items-center gap-2" key={index}>
                    <RiArrowDropRightFill className="text-[#00bc7d] w-4 h-4"/>

                    <p className="max-sm:text-sm">{item}</p>
                </div>
            ))
        }

    </div>
  )
}

export default DetailsBody;