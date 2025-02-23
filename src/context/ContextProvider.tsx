import { createContext, useContext, useRef, useState } from "react";

interface NavbarProps {
    home: boolean;
    setHome: React.Dispatch<React.SetStateAction<boolean>>;
    about: boolean;
    setAbout: React.Dispatch<React.SetStateAction<boolean>>;
    skills: boolean;
    setSkills: React.Dispatch<React.SetStateAction<boolean>>;
    work: boolean;
    setWork: React.Dispatch<React.SetStateAction<boolean>>;
    contact: boolean;
    setContact: React.Dispatch<React.SetStateAction<boolean>>;
    heroRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    aboutRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    skillsRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    workRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    contactRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    navPress: boolean;
    setNavPress: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<NavbarProps | null>(null);

export const NavbarContext = ({children}:any)=>{
    
    const [home, setHome] = useState<boolean>(true);
    const [about, setAbout] = useState<boolean>(false);
    const [skills, setSkills] = useState<boolean>(false);
    const [work, setWork] = useState<boolean>(false);
    const [contact, setContact] = useState<boolean>(false);
    const [navPress, setNavPress] = useState(false);

    const heroRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    if(navPress){
        setTimeout(() => {
            setNavPress(false)
        }, 1000);
    }
    
    return(
        <>
            <Context.Provider value={{
                about, setAbout, contact, setContact, home, setHome,
                skills, setSkills, work, setWork, aboutRef, heroRef,
                skillsRef, workRef, contactRef, navPress, setNavPress
            }}>
                {children}
            </Context.Provider>
        </>
    )
};

export const useNavbarContext = ()=>{
    const NavContext = useContext(Context);
    if(!NavContext){
        throw new Error('Context unavailable here.');
    }
    return NavContext;
};