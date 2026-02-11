import { useState } from "react";

interface Props {
    name: string;
    problem: string;
}

const DetailsHead = ({ name, problem }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col gap-2" onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

        <header className={`${hovering? 'border-[#00bc7d]':'border-[#00bc7d]/50'} border-b transition-all duration-200`}>
            <h4 className={`${hovering? 'text-[#00bc7d]':''} font-semibold transition-all duration-200`}>
                {name}
            </h4>
        </header>
        <p className="max-sm:text-sm">
            {problem}
        </p>

    </div>
  )
}

export default DetailsHead;