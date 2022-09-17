import React, {useState, useEffect, useRef} from "react";

function Skill() {
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
        <div className={isShown ? 'skill-container active' : 'skill-container'} id="skill" ref={ref}>
            <p className='tag top'>&#60;skill&#62;</p>
            <h1 className="title">Skill</h1>
            <div className='skill-box--container'>
                <div className='skill-box html'>
                    <img src='/html5.png' alt='' />
                </div>
                <div className='skill-box css'>
                    <img src='/css3.png' alt='' />
                </div>
                <div className='skill-box js'>
                    <img src='/js.png' alt='' />
                </div>
                <div className='skill-box react'>
                    <img src='/react.png' alt='' />
                </div>
                <div className='skill-box nodejs'>
                    <img src='/nodejs.png' alt='' />
                </div>
                <div className='skill-box ps'>
                    <img src='/photoshop.png' alt='' />
                </div>
            </div>
            <p className='tag bottom'>&#60;/skill&#62;</p>
        </div>
    );
}

export default Skill;
