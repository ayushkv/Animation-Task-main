import React from 'react'
import rotateImg from '../../Images/2.png'
import imgFrame from '../../Images/3.png'
import './AnimatedImage.css'

export const AnimatedComponent = () => {
  return (
    <div className=' relative w-[95%] m-auto bottom-8'>
      <img className=' absolute'   src={imgFrame} />
         <img src={rotateImg}  className=" rotate-img    " />
    </div>
  )
}
