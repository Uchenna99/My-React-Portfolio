import { RiArrowDropRightFill } from "react-icons/ri";

interface Props {
    skill: string;
}

const SkillText = ({ skill }:Props) => {
  return (
    <div className="card-indent">
        <div className="indent-arrow">
        <RiArrowDropRightFill id="arr-right" />
        </div>

        <div className="indent-text">
        <p>{skill}</p>
        </div>
    </div>
  )
}

export default SkillText;