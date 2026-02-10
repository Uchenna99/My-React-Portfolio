import { useState } from "react";


const DetailsHead = () => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col gap-2" onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

        <header className={`${hovering? 'border-[#00bc7d]':'border-[#00bc7d]/50'} border-b transition-all duration-200`}>
            <h4 className={`${hovering? 'text-[#00bc7d]':''} font-semibold transition-all duration-200`}>
                Evtol
            </h4>
        </header>
        <p className="max-sm:text-sm">
            Small and medium businesses often struggle to move their sales online quickly with a reliable, easy-to-use system. 
            Many existing e-commerce solutions are either too complex, expensive, or inflexible.
            The Shopper App solves this by providing a simple, scalable e-commerce platform that allows users to browse products, 
            manage carts, and place orders efficiently.
        </p>

    </div>
  )
}

export default DetailsHead;