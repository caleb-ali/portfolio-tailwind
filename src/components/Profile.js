import React from 'react';
import profileimg from "../assets/profileimg.jpg";

const Profile = () => {
  return (
    <div className='p-4  lg:mb-[140px] lg:mt-[40px] mb-[50px] flex flex-col justify-center lg:flex-row lg:space-x-32  mx-auto '>
      <div className='p-4'>
        <img className=' lg:w-[300px] rounded-[15px] mt-8' src={profileimg} alt="profileimg" />
      </div>
      <div className='font-Redrose'>
      <h1 className='mt-8 lg:mt-14 mb-4 font-bold flex justify-center text-persian-green-600 text-2xl'>About Me</h1>
            <p className='  text-gray-700 text-xl'>
            I am a Front End Developer with experience in HTML, CSS, <br/> JavaScript, and related frameworks such as React. <br/>
            I am passionate about creating innovative, user-friendly <br/> web applications and take pride in delivering high-performance <br/> 
            solutions. I possess strong problem-solving skills, excellent <br/> communication ability, and a keen eye for detail. 
                <br />
                <br />
                When i'm not working you'll find me playing video <br /> games or watching movies
            </p>
      </div>
    </div>
  )
}

export default Profile