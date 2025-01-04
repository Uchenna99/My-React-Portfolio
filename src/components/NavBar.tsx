import { useState } from "react"


const NavBar = () => {
  const [home, setHome] = useState<boolean>(true);
  const [about, setAbout] = useState<boolean>(false);
  const [skills, setSkills] = useState<boolean>(false);
  const [work, setWork] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

  return (
    <>
      <div className="navbar-container">

        <div className="laptop-navbar">
          <div className="name-logo"> <h2>UCHE'S PORTFOLIO</h2> </div>

          <div className="nav-right">
            <div className="nav-options">
              <p id="p-reg">Home</p>
            </div>
            <div className="nav-options">
              <p id="p-reg">About</p>
            </div>
            <div className="nav-options">
              <p id="p-reg">Skills</p>
            </div>
            <div className="nav-options">
              <p id="p-reg">Work</p>
            </div>
            <div className="nav-options">
              <p id="p-reg">Contact</p>
            </div>
          </div>
        </div>

        <div className="tablet-navbar"></div>
      </div>
    </>
  )
}

export default NavBar