import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";

function Contact() {
    const [isShown, setIsShown] = useState(false);
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const ref = useRef(null);

    const handleScroll = () => {
        if (!ref.current) return;
        let windowHeight = window.innerHeight;
        let elementTop = ref.current.getBoundingClientRect().y;
        let elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            setIsShown(true);
        } else {
            setIsShown(false);
        }
    }
    
    const saveMessage = async (e) => {
        e.preventDefault();
        console.log(e.target)
        try {
            emailjs
                .sendForm(
                    "service_h117od3",
                    "template_y22u1bd",
                    e.target,
                    "EJ-uRBzOKaoqnK-Ve"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            Swal.fire({
                title: "Success",
                text: "Your message has been sent",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.log(error);
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
                isShown ? "contact-container active" : "contact-container"
            }
            id='contact'
            ref={ref}
        >
            <p className='tag top'>&#60;contact&#62;</p>
            <h1 className='title'>Contact</h1>
            <form className='contact-form' onSubmit={saveMessage}>
                <div className='subject'>
                    <label htmlFor='subject'>Subject</label>
                    <input
                        type='text'
                        name='subject'
                        id='subject'
                        autoCorrect='false'
                        spellCheck='false'
                        autoComplete='off'
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        required
                    />
                </div>
                <div className='email'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='off'
                        spellCheck='false'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div className='message'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='5'
                        spellCheck='false'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        required
                    ></textarea>
                </div>
                <button
                    className='send-message'
                    type='submit'
                >
                    Send message
                </button>
            </form>
            <p className='tag bottom'>&#60;/contact&#62;</p>
        </div>
    );
}

export default Contact;
