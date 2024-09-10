import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link, useNavigate } from 'react-router-dom';


export default function Signin() {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const handleConnect = () => {
    // Perform Metamask connection logic
    // For demonstration, setting isConnected to true
    setIsConnected(true);

    // Navigate to feed page after connecting
    navigate('/feed');
  };

  const handleSubmit = () => {
    if (isConnected) {
      // Navigate to feed page if connected
      navigate('/feed');
    } else {
      // Handle case when not connected
      console.log('Please connect Metamask');
    }
  };
  
  return (
    <div className='min-h-screen bg-cyan-500'>
      <div className='px-10 mx-10 py-5 items-center font-mono justify-between flex flex-row'>
        <div className='flex flex-row'>
          <img
            className='h-[40px] w-[40px] rounded-full mx-2'
            src='/images/ethLink.jpg'
            alt=''
          />
          <h1 className='text-3xl mr-10 text-white'>ETHLink</h1>
        </div>
        <h1 className='font-semibold text-white'>
          Welcome to User Login Page
        </h1>
        <Link to='/company/login'>
          <button className='bg-[#F18404] px-10 py-2 rounded-lg'>
            Company Login
          </button>
        </Link>
      </div>

      <div className='items-center flex flex-col'>
        <img
          className='h-[130px] w-[130px] my-10 rounded-full'
          src='/images/ethlink2.jpg'
          alt=''
        />
        <form className='md:p-10 px-5 py-10 text-center items-center'>
        <div className='md:px-20 align-middle mx-10 flex flex-row justify-center px-10 mb-5'>
            <ConnectButton>
              <button onClick={handleConnect} className='px-10 py-3 rounded-xl bg-[#595B63] mx-5'>
                <img
                  className='md:w-[50px] md:h-[50px] h-[50px] w-[50px]'
                  src='/images/metamask-icon.png'
                  alt=''
                />
              </button>
            </ConnectButton>
            <Link to='/feed'><button className='px-10 py-3 rounded-xl bg-[#595B63] mx-5'>LFG🚀</button></Link>
          </div>
          <div className='mb-5'>
            <h2 className='font-bold text-center m-10 p-5 text-white'>OR</h2>
          </div>

          <div className='flex flex-row'>
            <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[500px] w-[400px] rounded-md flex flex-row'>
              <input
                type='email'
                placeholder='Email'
                className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[520px] rounded-md flex flex-col outline-none'
              />
              <EmailIcon className='m-3 bg-[#595B63] text-lg' />
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[500px] w-[400px] rounded-md flex flex-row'>
              <input
                type='password'
                placeholder='Password'
                className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[520px] rounded-md flex flex-col outline-none'
              />
              <VisibilityIcon className='m-3 bg-[#595B63] text-lg' />
            </div>
          </div>
          <button onClick={handleSubmit} className='text-white bg-[#F18404] px-10 py-5 m-5 rounded-lg'>
            SUBMIT
          </button>       
      </form>
     </div>
        
    </div>
  )
}
