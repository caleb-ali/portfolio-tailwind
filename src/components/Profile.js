import React from 'react';
import profileimg from "../assets/profileimg.jpg";

const Profile = () => {
  return (
<div className='p-4  lg:mb-[160px] lg:mt-[40px] mt-[50px] mb-[50px]'>
    <div className="flex justify-center font-Redrose font-bold text-gray-500 text-2xl underline underline-offset-8 decoration-persian-green-600">
    About
  </div>
    <div className=' flex flex-col justify-center lg:flex-row lg:space-x-32  mx-auto ' id='about'>
      <div className=' lg:mt-8 lg:mb-4 '>
        <img className=' lg:w-[300px] rounded-[15px] mt-8' src={profileimg} alt="profileimg" />
      </div>
      <div className=' lg:mt-16 mt-8  mb-8 font-Redrose'>
      <h1 className=' font-bold flex justify-center text-persian-green-600 text-xl'>Get to know me!</h1>
            <p className='lg:block hidden  text-gray-500 '>
            I'm a Front End Developer who loves working on new and <br/>creative projects. I have experience working with HTML, CSS, <br/>JavaScript, React, Tailwindcss and Git.
            I am passionate about <br/>creating innovative, user-friendly web applications and take <br/>pride in delivering high-performance
            solutions. <br/><br/>I possess strong problem-solving skills, excellent communication <br/>ability, and a keen eye for detail. 
            I'm always up for a challenge<br/> and I'm never afraid to ask questions. I'm a team player, and<br/> I always strive to help my team succeed.
                <br />
                <br />
                When i'm not working you'll find me watching movies, cooking <br/> or learning something new.
            </p>
            <p className='lg:hidden block  text-gray-500 text-sm'>
            I'm a Front End Developer who loves working on new and creative projects. I have experience working with HTML, CSS, JavaScript, React, Tailwindcss and Git.
            I am passionate about creating innovative, user-friendly web applications and take pride in delivering high-performance
            solutions. <br/><br/>I possess strong problem-solving skills, excellent communication ability, and a keen eye for detail. 
            I'm always up for a challenge and I'm never afraid to ask questions. I'm a team player, and I always strive to help my team succeed.
                <br />
                <br />
                When i'm not working you'll find me watching movies, cooking or learning something new.
            </p>
      </div>
    </div>
    </div>
  )
}

export default Profile