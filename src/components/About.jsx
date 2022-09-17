import React, {useState, useEffect, useRef} from "react";

function About() {
    const [isShown, setIsShown] = useState(false)
    const ref = useRef(null);

    const handleScroll = () => {
        if (!ref.current) return;
        let windowHeight = window.innerHeight
        let elementTop = ref.current.getBoundingClientRect().y
        let elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
            setIsShown(true);
        } else {
            setIsShown(false);
        }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    
      return () => {
        window.removeEventListener("scroll", () => handleScroll)
      }
    }, [])
    

    return (
        <div className={isShown ? 'about-container active' : 'about-container'} id='about' ref={ref}>
            <p className='tag top'>&#60;about&#62;</p>
            <h1 className='title'>About me</h1>
            <p className='about--desc'>
                <span>
                    Hi, my name is Yudhitya M. Renandra. I am a freelance web
                    developer. I master front end technology such as html, css,
                    javascript, react js, material ui, and node js.
                </span>
                <span>
                    I am currently studying for a bachelor's degree in
                    informatics engineering at the University of Riau. I live in
                    Pekanbaru, Indonesia. I can create projects remotely and I'm
                    always interested in challenges.{" "}
                </span>
            </p>
            <p className='tag bottom'>&#60;/about&#62;</p>
        </div>
    );
}

export default About;
