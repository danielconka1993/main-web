import React from 'react'
import { ImGithub } from "react-icons/im";

const Git = () => {
  return (
    <div className='leftMenuIcons-box'>
      <a href="https://github.com/danielconka1993" target="_blank" rel="noopener noreferrer">
        <ImGithub className='icon'/>
        <p>github.com/danielconka1993</p>
      </a>
    </div>
  )
}

export default Git