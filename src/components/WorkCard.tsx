import { LuExternalLink } from "react-icons/lu";
import { Card } from "./Work";
import { useEffect, useState } from "react";

interface Props {
    card: Card;
}

const WorkCard = ({ card }: Props) => {
    const [loading, setLoading] = useState(true);

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
                        <h4>{card.name}</h4>
                        <p style={{fontSize: 14}}>{card.desc}</p>
                    </div>

                    <div className="info-tag-link">
                        <a href={card.url} target="_blank" rel="noopener noreferrer">
                            <LuExternalLink 
                            size={25} 
                            color="#008080"
                            style={{cursor:'pointer'}}
                            />
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
    </>
  )
}

export default WorkCard