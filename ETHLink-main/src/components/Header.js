import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useLocation } from 'react-router-dom';
import { useAccount } from 'wagmi'
import { config } from '../App';
import { motion } from 'framer-motion';


export default function Header() {

  const account = useAccount();
  const address = account.address;
  const location = useLocation();

  return (
        <motion.div 
          initial={{
            opacity: 0,
            x: -100
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 1 }}
          viewport={{ once: true }}
          className='px-10 mx-10 py-5 items-center font-mono md:justify-between justify-normal flex flex-row text-white border-b-2 border-solid border-white'>
          <div className='w-[40px] h-[40px] mx-5 flex flex-row items-center'>
          <img className='w-full h-full rounded-full size-fit' src='/images/dp 5.png' alt=''/>
          <p className='text-bold text-lg text-center p-5'>
          {address && address.length > 0
              ? `${address.substring(
                  0,
                  6
                )}...${address.substring(38)}`
              : 'Connect Wallet'}
          </p>
          </div>
          <div className='flex flex-row rounded-3xl bg-[#4D4C5D] px-5 py-2'>
            <SearchIcon className='mx-2'/>
            <input type='text' placeholder='Search' className='mx-2 pr-10 bg-[#4D4C5D] outline-none text-[#F18404] text-center' />
          </div>
          <div className='flex flex-row justify-between'>
      <Link to='/feed'>
        <button>
          <HomeIcon className={location.pathname === '/feed' ? 'mx-5 text-[#F18404]' : 'mx-5 hover:text-[#F18404]'} />
        </button>
      </Link>
      <Link to='/profile'>
        <button>
          <Person2Icon className={location.pathname === '/profile' ? 'mx-5 text-[#F18404]' : 'mx-5 hover:text-[#F18404]'} />
        </button>
      </Link>
      <Link to='/jobs'>
        <button>
          <BusinessCenterIcon className={location.pathname === '/jobs' ? 'mx-5 text-[#F18404]' : 'mx-5 hover:text-[#F18404]'} />
        </button>
      </Link>
      <Link to='/notifications'>
        <button>
          <NotificationsIcon className={location.pathname === '/notifications' ? 'mx-5 text-[#F18404]' : 'mx-5 hover:text-[#F18404]'} />
        </button>
      </Link>
    </div>
        </motion.div>
  )
}
