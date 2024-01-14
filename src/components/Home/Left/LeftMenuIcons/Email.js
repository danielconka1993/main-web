import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
  return (
    <div className='leftMenuIcons-box'>
      <a href="mailto:danielconka1993@gmail.com">
      
      <AiOutlineMail className='icon' />
      <p>danielconka1993@gmail.com</p>
      </a>
    </div>
  )
}

export default Email