import React from 'react'

const Asset = ({ active =false }) => {
  return (
    <svg  className={`${
        active === false ? "white" : "text-white/50"
      }    `} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3334 10.0001H12.6667V11.3334H11.3334V10.0001ZM11.3334 7.33341H12.6667V8.66675H11.3334V7.33341ZM11.3334 4.66675H12.6667V6.00008H11.3334V4.66675ZM9.16003 4.66675L10 5.22675V4.66675H9.16003Z" fill="white" fill-opacity="0.5"/>
    <path d="M6.66663 2V3.00667L7.99996 3.89333V3.33333H14V12.6667H11.3333V14H15.3333V2H6.66663Z" fill="white" fill-opacity="0.5"/>
    <path d="M5.44663 3.80005L9.99996 6.83338V14H0.666626V6.98672L5.44663 3.80005ZM6.66663 12.6667H8.66663V7.44005L5.44663 5.39338L1.99996 7.58672V12.6667H3.99996V8.66672H6.66663V12.6667Z" fill="white" fill-opacity="0.5"/>
    </svg>
    
  )
}

export default Asset
