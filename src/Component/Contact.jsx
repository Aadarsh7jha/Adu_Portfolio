import React from 'react'

const Contact = () => {
    
  return (
    <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <h1 className='text-3xl font-bold my-[10px]'>Contact me</h1>
        <span className='font-semibold'>Please fill out the form below to contact me</span>
        <div className='shadow-xl bg-gray-200 m-auto p-[20px] rounded-xl w-[95%] md:w-[400px] mt-5'>
        <form action="https://api.web3forms.com/submit"  method="POST" >
        <input type="hidden" name="access_key" value="c9ec1a18-e7a7-4c3f-9a36-5df0e02f3b0a" />
        <h2 className='font-semibold text-xl'>Send Your Message</h2>
            <div className='flex mt-[10px] flex-col '>  
                <label className='m-[8px]'>Full Name</label>
        
                <input type='text'
                placeholder='Enter your full name'
                name="Full Name"
                className='px-3 py-3 border-[2px] rounded-lg'
                required  />
            </div>
            <div className='flex mt-[10px] flex-col '>  
                <label className='m-[8px]'>Email Address</label>
                <input type='email'
                placeholder='Enter your Email Address'
                name="Email Address"
                className='px-3 py-3 border-[2px] rounded-lg'
                required 
                minLength={13} />
            </div>
            <div className='flex mt-[10px] flex-col '>  
                <label className='m-[8px]'>Message</label>
                <input type='text'
                placeholder='Type your message here'
                name="Message"
                className='px-3 py-3 border-[2px]  rounded-lg h-[80px]'
                required  />
            </div>
            <button type="submit" 
            className='text-white bg-orange-500 px-[30px] py-[10px] w-[50%]   mt-4 rounded-full '
            >Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact