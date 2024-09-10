import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PublicIcon from '@mui/icons-material/Public';

export default function Login() {
  return (
    <div className='font-mono text-white bg-gradient-to-b from-[#414141] to-[ #000000]'>
     <div className='px-10 mx-10 py-5 items-center font-mono md:justify-between justify-normal flex flex-row'>
      <div className='flex flex-row items-center'>
       <img className='h-[40px] w-[40px] rounded-full mx-2' src='/images/ethLink.jpg' alt=''/>
       <h1 className='text-3xl mr-10'>ETHLink</h1>
       
      </div>
      
      <button className='px-10 py-3 rounded-xl bg-[#595B63] mx-5'>SIGN IN</button>
     </div>
      <div className='font-mono flex justify-between items-center flex-wrap max-w-full md:m-auto p-10 text-white'>
      <div className='md:mx-10 max-w-fit mx-5'>
        <h1 className='font-bold text-3xl px-10'>CREATE A NEW ACCOUNT</h1>
        <p className='py-5 px-10 text-xl'>Already have an account ? 
          <a href='/signin' className='mx-2 text-blue-500'>
          Login
          </a>
        </p>
        <form className='md:p-10 px-5 py-10'>
            <div className='flex flex-row'>
                 <input type="text" placeholder='First Name' className='text-[#fff500] md:m-5 ml-5 mr-1 my-5 bg-[#595B63] px-1 md:px-3 py-3 rounded-md outline-none'/>
                 <input type="text" placeholder='Last Name' className='text-[#fff500] md:m-5 mx-2 my-5 bg-[#595B63] px-1 md:px-3 py-3 rounded-md outline-none'/>
            </div>

            <div className='flex flex-row'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[460px] w-[400px] rounded-md flex flex-row'>
               <input type='email' placeholder='Email' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[420px] rounded-md flex flex-col outline-none'/>
               <EmailIcon className='m-3 bg-[#595B63] text-lg'/>
             </div>
            </div>

            <div className='flex flex-row'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[460px] w-[400px] rounded-md flex flex-row'>
               <input type='password' placeholder='Password' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[420px] rounded-md flex flex-col outline-none'/>
               <VisibilityIcon className='m-3 bg-[#595B63] text-lg'/>
             </div>
            </div>

            <div className='flex flex-row'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[460px] w-[400px] rounded-md flex flex-row'>
               <input type='text' placeholder='Nationality' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[420px] rounded-md flex flex-col outline-none'/>
               <PublicIcon className='m-3 bg-[#595B63] text-lg'/>
             </div>
            </div>

        </form>
        
      </div>

      <div className='w-500 md:mx-10 mt-20 md:mt-0'>
       <img className='w-[400px] h-[400px] p-5 mx-10 rounded-full size-full' src='/images/ethlink2.jpg' alt=''/>
      </div>
    </div>

    </div>

  )
}
