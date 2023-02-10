import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

const Social = () => {
  return (
    <div className='social-container'>
        <a className='social-icons' href='https://github.com/yudhit08' target="_blank" rel="noreferrer">
            <FaGithub />
        </a>
        <a className='social-icons' href='https://instagram.com/yudhitya.mr' target="_blank" rel="noreferrer">
            <FaInstagram />
        </a>
        <a className='social-icons' href='https://linkedin.com/in/yudhitya-mr' target="_blank" rel="noreferrer">
            <FaLinkedin />
        </a>
    </div>
  )
}

export default Social