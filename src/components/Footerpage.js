import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

const Footerpage = () => {
  return (
    <div className='flex flex-row justify-center gap-8'>
        <div className='flex flex-row items-center gap-4'>
        <a href="https://twitter.com/_realkally" target="_blank" rel="noreferrer"  className=''>  <BsTwitter />  </a>
        <a href="https://www.linkedin.com/in/caleb-ali-94305b14b/" target="_blank" rel="noreferrer">   <FaLinkedin /> </a>
        <a href="https://github.com/caleb-ali" target="_blank" rel="noreferrer">  <FaGithub /> </a>
        <a href="https://medium.com/@caleb_ali" target="_blank" rel="noreferrer"> <BsMedium /> </a>
        </div>
        <div className='font-Redrose'>
          caleb ali © 2022
        </div>
    </div>
  )
}

export default Footerpage;