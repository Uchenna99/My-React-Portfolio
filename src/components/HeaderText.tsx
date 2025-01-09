import { useInView } from "react-intersection-observer";

interface Props {
    title: string;
}


const HeaderText = ( {title}: Props ) => {
  const { ref, inView } = useInView({threshold: 1});
  return (
    <>
        <div className="header-text" ref={ref}>
          <h2> {title} </h2>
          <div className="header-underline" style={{animationName: inView? 'width':''}}></div>
        </div>
    </>
  )
}

export default HeaderText