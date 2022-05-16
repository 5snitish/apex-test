import React from 'react'

const Documents = ({ active = false }) => {
    return (
        < svg className={`${active === false ? "white" : "text-white/50"
            }     `} width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33329 9.66659H8.66663V10.9999H3.33329V9.66659ZM3.33329 6.99992H8.66663V8.33325H3.33329V6.99992ZM7.33329 0.333252H1.99996C1.26663 0.333252 0.666626 0.933252 0.666626 1.66659V12.3333C0.666626 13.0666 1.25996 13.6666 1.99329 13.6666H9.99996C10.7333 13.6666 11.3333 13.0666 11.3333 12.3333V4.33325L7.33329 0.333252ZM9.99996 12.3333H1.99996V1.66659H6.66663V4.99992H9.99996V12.3333Z" fill="white" fill-opacity="0.5" />
        </svg>

    )
}

export default Documents
