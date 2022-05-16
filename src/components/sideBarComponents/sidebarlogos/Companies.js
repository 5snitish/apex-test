import React from 'react'

const Companies = ({ active =false }) => {
    return (
        <svg className={`${active===false?"white":""} `} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00004 6.16659C3.44004 6.16659 0.333374 6.94659 0.333374 8.49992V9.66659H9.66671V8.49992C9.66671 6.94659 6.56004 6.16659 5.00004 6.16659ZM1.89337 8.33325C2.45337 7.94659 3.80671 7.49992 5.00004 7.49992C6.19337 7.49992 7.54671 7.94659 8.10671 8.33325H1.89337ZM5.00004 4.99992C6.28671 4.99992 7.33337 3.95325 7.33337 2.66659C7.33337 1.37992 6.28671 0.333252 5.00004 0.333252C3.71337 0.333252 2.66671 1.37992 2.66671 2.66659C2.66671 3.95325 3.71337 4.99992 5.00004 4.99992ZM5.00004 1.66659C5.55337 1.66659 6.00004 2.11325 6.00004 2.66659C6.00004 3.21992 5.55337 3.66659 5.00004 3.66659C4.44671 3.66659 4.00004 3.21992 4.00004 2.66659C4.00004 2.11325 4.44671 1.66659 5.00004 1.66659ZM9.69337 6.20659C10.4667 6.76659 11 7.51325 11 8.49992V9.66659H13.6667V8.49992C13.6667 7.15325 11.3334 6.38659 9.69337 6.20659ZM9.00004 4.99992C10.2867 4.99992 11.3334 3.95325 11.3334 2.66659C11.3334 1.37992 10.2867 0.333252 9.00004 0.333252C8.64004 0.333252 8.30671 0.419919 8.00004 0.566585C8.42004 1.15992 8.66671 1.88659 8.66671 2.66659C8.66671 3.44659 8.42004 4.17325 8.00004 4.76659C8.30671 4.91325 8.64004 4.99992 9.00004 4.99992Z" fill="white" fill-opacity="0.5" />
        </svg>

    )
}

export default Companies