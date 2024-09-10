import React from 'react'
import Header from './Header'
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
// import LinkIcon from '@mui/icons-material/Link'
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone'

export default function CompNotifications() {
  return (
    <div className='min-h-screen text-white'>
      <Header />
      <div className='grid grid-cols-3 text-white mx-10 my-5 rounded-lg'>
        <div className='col-span-1 p-3 rounded-l-lg text-left border-solid border-r-2 border-white bg-[#4D4C5D]'>
          <div className='p-5 items-center'>
            <div className='flex items-center justify-center mb-5'>
              <img
                className='h-[200px] w-[200px] rounded-full m-5'
                src='/VARTAA (1).png'
                alt=''
              />
            </div>

            <div className='my-5 rounded-xl p-5 bg-black'>
              <div className='flex flex-row space-x-3'>
                <div className='m-5 flex flex-col'>
                  <h1 className='text-center mb-5 text-xl '>
                    VARTALAAP
                    <CheckCircleOutlineTwoToneIcon className='mx-2 mb-1 text-green-500' />
                  </h1>
                  <h3 className='py-5'>
                    India's first college-level podcast series🎙️
                  </h3>
                  <h3 className=''>Education · Chennai, Tamil Nadu</h3>
                  <h3>137 followers · 2-10 employees</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-2 p-3 rounded-r-lg text-left text-white bg-[#4D4C5D]'>
          <div className='text-left border-solid border-b-2 border-white font-bold text-xl'>
            <h1 className='p-5'>Company Notifications</h1>
          </div>
          <div className='flex flex-row space-x-5 justify-between py-3 w-full my-2 rounded-lg bg-black'>
            <div className='flex flex-row space-x-4'>
              <div className='w-[40px] h-[40px] rounded-full mx-5 my-3 '>
                <img
                  className='w-full h-full rounded-full size-fit'
                  src='/images/dp 5.png'
                  alt=''
                />
              </div>

              <div>
                <h2 className='font-bold py-1 text-xl text-white text-left'>
                  <span className='text-[#F18404]'> New Ticket Raised: </span>
                </h2>
                <p className='py-1 text-lg text-white text-left'>
                  Rachit Dhaka has raised a ticket for their certificate
                  verification.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row space-x-5 justify-between py-3 w-full my-2 rounded-lg bg-black'>
            <div className='flex flex-row space-x-4'>
              <div className='w-[40px] h-[40px] rounded-full mx-5 my-3 '>
                <img
                  className='w-full h-full rounded-full size-fit'
                  src='/images/Sarthak 3.png'
                  alt=''
                />
              </div>

              <div>
                <h2 className='font-bold py-1 text-xl text-white text-left'>
                  <span className='text-[#F18404]'> New Ticket Raised: </span>
                </h2>
                <p className='py-1 text-lg text-white text-left'>
                  Sarthak Tyagi has raised a ticket for verification.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-row space-x-5 justify-between py-3 w-full my-2 rounded-lg bg-black'>
            <div className='flex flex-row space-x-4'>
              <div className='w-[40px] h-[40px] rounded-full mx-5 my-3 '>
                <img
                  className='w-full h-full rounded-full size-fit'
                  src='/images/Aniket.jpg'
                  alt=''
                />
              </div>

              <div>
                <h2 className='font-bold py-1 text-xl text-white text-left'>
                  <span className='text-[#F18404]'> New Ticket Raised: </span>
                </h2>
                <p className='py-1 text-lg text-white text-left'>
                  Aniket Kumar has raised a ticket for skill verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
