import React, { useState, useEffect, useRef } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";

function Project() {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (!ref.current) return;
        let windowHeight = window.innerHeight;
        let elementTop = ref.current.getBoundingClientRect().y;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            setIsShown(true);
        } else {
            setIsShown(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    }, []);

    return (
        <div
            className={
                isShown ? "project-container active" : "project-container"
            }
            id='project'
            ref={ref}
        >
            <p className='tag top'>&#60;projects&#62;</p>
            <h1 className='title'>Projects</h1>
            <div className='project-box--container'>
                <div className='project-box'>
                    <div className='project-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam, provident aperiam nesciunt
                            molestias ad necessitatibus.
                        </p>

                        <a
                            href='https://qrcode-generator-sigma.vercel.app/'
                            className='view-source'
                            target="_blank"
                        >
                            View Source
                            <span>
                                <ArrowForward
                                    sx={{ color: "#f8f8f3" }}
                                    className='view-arrow'
                                />
                            </span>
                        </a>
                    </div>
                    <img src='/project/qr-code-generator.png' alt='' />
                </div>
                <div className='project-box'>
                    <div className='project-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam, provident aperiam nesciunt
                            molestias ad necessitatibus.
                        </p>
                        <a
                            href='https://quiz-maniac.vercel.app//'
                            className='view-source'
                            target="_blank"
                        >
                            View Source
                            <span>
                                <ArrowForward
                                    sx={{ color: "#f8f8f3" }}
                                    className='view-arrow'
                                />
                            </span>
                        </a>
                    </div>
                    <img src='/project/quiz-maniac.png' alt='' />
                </div>
                <div className='project-box'>
                    <div className='project-description'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam, provident aperiam nesciunt
                            molestias ad necessitatibus.
                        </p>
                        <a
                            href='https://react-calculator-beryl-delta.vercel.app/'
                            className='view-source'
                            target="_blank"
                        >
                            View Source
                            <span>
                                <ArrowForward
                                    sx={{ color: "#f8f8f3" }}
                                    className='view-arrow'
                                />
                            </span>
                        </a>
                    </div>
                    <img src='/project/calculator.png' alt='' />
                </div>
            </div>
            <p className='tag bottom'>&#60;/projects&#62;</p>
        </div>
    );
}

export default Project;
