interface Props {
    title: string;
}


const HeaderText = ( {title}: Props ) => {
  return (
    <>
        <div className="header-text">
          <h2> {title} </h2>
          <div className="header-underline"></div>
        </div>
    </>
  )
}

export default HeaderText