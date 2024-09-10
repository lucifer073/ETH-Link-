import React from 'react'
import Header from './Header'
import Ticket from './Ticket'
import { Link } from 'react-router-dom'
export default function Tickets() {
  return (
    <div className='text-white bg-[#4C4D5D] min-h-screen'>
      <Header />
      <div className='grid grid-cols-3 p-5 m-5 bg-[#4C4D5D] text-white '>
        <div className='col-span-1 bg-[#4C4D5D] border-solid border-r-2 border-white '>
          <div className='text-center flex flex-col m-5 h-[500px]'>
            <h1 className='font-bold text-xl text-center text-[#F18404] pb-5 mx-5 border-b-2 border-solid border-white'>
              Account
            </h1>
            <Link to="/company/proposals"><p className='p-5 mx-5 text-lg text-center'>Proposal</p></Link>
            <Link to="/company/tickets"><p className='p-5 mx-5 text-lg text-center border-b-2 border-solid border-white'>Tickets</p></Link>
            <p className='p-5 mx-5 text-lg text-center'>Settings</p>
            <Link to='/company/compNotifications'>
              <p className='p-5 mx-5 text-lg text-center'>Notifications</p>
            </Link>
          </div>
          <div className='items-center m-5 px-5'>
            <div className='m-5 flex flex-row items-center px-5'>
              <img
                className='h-[40px] w-[40px]'
                src='/images/VARTAA (1).png'
                alt=''
              />
              <h2 className='p-5 font-bold text-lg text-center'>
                Vartalaap Podcast
              </h2>
            </div>
            <button className='px-5 mx-5 text-center bg-black rounded-lg font-bold'>
              LOGOUT
            </button>
          </div>
        </div>
        <div className='col-span-2 bg-black rounded-r-xl'>
          <h1 className='m-5 font-bold text-xl text-center text-[#F18404]'>
            Tickets Raised
          </h1>
          <div className='grid grid-cols-3 gap-4 p-5 m-5'>
            <Ticket
              name='Rachit Dhaka'
              id='000001'
              role='Content-writer'
              company='Vartalaap Podcast'
              location='Chennai'
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}
