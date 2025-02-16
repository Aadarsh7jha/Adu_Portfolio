import React, { useState } from 'react'
import img from '../Assets/adu.webp'
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";
const Nav = () => {

    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },{
            id: 4,
            text: "Skills"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]

    let [openmENU,setOpenMenu] =useState(false)
  return (
    <div className='max-w-screen-2xl bg-white container mx-auto py-2 md:px-17  shadow-md px-4  lg:px-20 fixed top-0 left-0
    '>
        <div className=' flex items-center h-16 justify-between'>
            <div className='flex space-x-2'>
                <img src={img} className='h-[60px] rounded-full' />
                <h2 className='text-2xl cursor-pointer font-semibold'>Aadars<span className='text-green-500'>h</span>
                <p className='text-sm'>Web Devloper</p>
                </h2>

            </div>
            <div>
                <ul className={`flex gap-[25px] menu ${ openmENU ? 'active' : '' }`}>
                   {
                    navItems.map(({text,id})=>{
                        return(
                            <li
                            
                            className='cursor-pointer duration-200 hover:scale-110 hover:text-orange-500'
                            >
                            <Link
                            onClick={()=>setOpenMenu(!openmENU)}
                            to={text} smooth={true} duration={500} offset={-90} activeClass='active' >{text}</Link>
                             </li>
                        )
                    })
                   }
                </ul>

            </div>
            <div className=' md:hidden cursor-pointer'  onClick={()=>setOpenMenu(!openmENU)}>
            
            {
                openmENU ? <IoIosClose  className='text-[42px] ' /> :
                <IoMenu className='text-[35px] ' />
            }
            
            </div>
        </div>
    </div>
  )
}

export default Nav