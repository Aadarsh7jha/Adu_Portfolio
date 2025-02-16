import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import img2 from '../Assets/adu2.webp'
const Home = () => {
  return (
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-2 shadow-sm  my-20'>
          <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:w-[50%]  mt-8 md:mt-24 my-2 space-y-2'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a </h1>
            {/* <span className='text-red-700 font-bold'>Devloper</span> */}
            <ReactTyped
        className='text-orange-500 font-bold'
          strings={["Developer","Programmer","coder"]}
          typeSpeed={40}
          loop={true}
        />
            </div>
            <p className='text-sm md:text-md text-justify'>I’m a 19-year-old MERN stack developer with 2 years of web development experience and 10 months of teaching in ayushyam instute. I specialize in building responsive web applications and continually enhance my skills to deliver modern, efficient solutions.</p>
            <br />
            <div className='flex md:flex-row flex-col justify-between '>
            <div>
                <h1 className='text-xl font-semibold '>Available on</h1>
                <div className='flex gap-[20px] items-center justify-center w-[200px] mt-[10px] '>
                  <a target='main' href='https://github.com/Aadarsh7jha'>
                <FaGithub  className='text-[25px] duration-200 hover:scale-110' />
                </a>
                <a  target='main' href='https://www.linkedin.com/in/aadarsh-kumar-7828742ba/'>
                <FaLinkedin  className='text-[25px] duration-200 hover:scale-110' />
                </a>
                <a target='main' href='https://www.youtube.com/@aadarshkumarjha200'>
                <FaYoutube  className='text-[25px] duration-200 hover:scale-110'/>
                </a>
                <a target='main' href='https://www.instagram.com/aadarsh.jha.102/'>
                <FaInstagramSquare className='text-[25px] duration-200 hover:scale-110' />
                </a>
                </div>
                
            </div>

            <div className='md:mt-0 mt-[10px] '>
                <h1 className='text-xl font-semibold'>currently working on</h1>
                <div className='flex gap-[20px] items-center justify-center w-[200px] mt-3'>
                <SiMongodb  className='text-[25px] duration-200 hover:scale-110' />
                <SiExpress  className='text-[25px] duration-200 hover:scale-110' />
                <FaReact  className='text-[25px] duration-200 hover:scale-110'/>
                <FaNodeJs className='text-[25px] duration-200 hover:scale-110' />
                </div>
                
            </div>
            </div>

        </div>
        <div className='md:w-[50%] flex items-center justify-center m-auto md:px-[50px] px-[30px] md:mt-0 mt-4   '>
            <img src={img2} className='xl:w-[80%] w-[80%] lg:mt-8 md:mt-4 m-auto md:ml-[50px] rounded-full'/>
        </div>
          </div>
    </div>
  )
}

export default Home