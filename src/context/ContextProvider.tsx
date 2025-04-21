import { createContext, useContext, useRef, useState } from "react";

interface NavbarProps {
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
    heroRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    aboutRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    skillsRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    workRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    contactRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    scrolling: boolean;
    setScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<NavbarProps | null>(null);

export const NavbarContext = ({children}:any)=>{
    
    const [currentSection, setCurrentSection] = useState<string>("");
    const [scrolling, setScrolling] = useState(false);

    const heroRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    if(scrolling){
        setTimeout(() => {
            setScrolling(false);
        }, 1000);
    }
    
    return(
        <>
            <Context.Provider value={{
                currentSection, setCurrentSection, scrolling, setScrolling, 
                aboutRef, heroRef, skillsRef, workRef, contactRef
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