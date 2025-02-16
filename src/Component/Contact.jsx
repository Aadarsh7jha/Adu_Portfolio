import React from 'react'

const Contact = () => {
    
  return (
    <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <h1 className='text-3xl font-bold my-[10px]'>Contact me</h1>
        <span className='font-semibold'>Please fill out the form below to contact me</span>
        <div className='shadow-xl bg-gray-200 m-auto p-[20px] rounded-xl w-[400px]'>
        <form onSubmit={onsubmit} >
        <h2 className='font-semibold text-xl'>Send Your Message</h2>
            <div className='flex mt-[10px] flex-col '>  
                <label className='m-[8px]'>Full Name</label>
        
                <input type='text'
                placeholder='Enter your full name'
                name="Full Name"
                className='px-3 py-3 border-[2px] rounded-lg'  />
            </div>
            <div className='flex mt-[10px] flex-col '>  
                <label className='m-[8px]'>Email Address</label>
                <input type='text'
                placeholder='Enter your Email Address'
                name="Email Address"
                className='px-3 py-3 border-[2px] rounded-lg'  />
            </div>
            <div className='flex mt-[10px] flex-col '>  
                <label className='m-[8px]'>Message</label>
                <input type='text'
                placeholder='Type your message here'
                name="Message"
                className='px-3 py-3 border-[2px] rounded-lg'  />
            </div>
            <button type="submit" 
            className='text-white bg-orange-500 px-[30px] py-[10px] mt-4 rounded-xl '
            >Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact