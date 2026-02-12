import { LuExternalLink } from "react-icons/lu";
import { Card } from "./Work";
import { lazy, Suspense, useEffect, useState } from "react";
// import DetailsModal from "./DetailsModal";
const DetailsModal = lazy(() => import("./DetailsModal"));

interface Props {
    card: Card;
}

const WorkCard = ({ card }: Props) => {
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if(!card.image) { setLoading(false); } else{
            const img = new Image();
            img.src = card.image;
            img.onload = () => setLoading(false);
        }
    }, [card.image]);

  return (
    <>
        {
            !loading && card.image?
            <div className="work-sample" style={{backgroundImage:`url(${card.image})`}}>

                <div className="info-tag">

                    <div className="info-tag-text">
                        <h3>{card.name}</h3>
                        <p style={{fontSize: 14}}>{card.desc + " "} 
                            {
                                card.details &&
                                <span className="italic text-[#00bc7d]/70 hover:text-[#00bc7d] active:text-[#00bc7d] cursor-pointer"
                                    onClick={()=> setShowDetails(true)}>
                                    Details
                                </span>
                            }
                        </p>
                    </div>

                    <div className="">
                        <a href={card.url} target="_blank" rel="noopener noreferrer" className="info-tag-link">
                            <LuExternalLink 
                            size={25} 
                            color="#00bc7d"
                            style={{cursor:'pointer'}}
                            />
                            <p>Visit</p>
                        </a>
                    </div>

                </div>

            </div>
            :
            loading?
            <div className="skeleton-card" />
            :
            <div/>
        }

        {
            showDetails &&
            <Suspense fallback={null}>
                <DetailsModal
                    onClose={()=> setShowDetails(false)}
                    details={card}
                />
            </Suspense>
        }
    </>
  )
}

export default WorkCard