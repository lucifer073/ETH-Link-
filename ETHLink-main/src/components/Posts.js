import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import SendIcon from '@mui/icons-material/Send'

export default function Posts() {
  return (
    <div>
      <div className='p-3 m-3 bg-black flex flex-col rounded-lg'>
        <div className='flex flex-row pb-3 m-2 bg-black border-solid border-b-2 border-white'>
          <div className='w-[40px] h-[40px] ml-2 rounded-full'>
            <img
              className='w-full h-full rounded-full size-fit'
              src='/images/man.png'
              alt=''
            />
          </div>
          <h2 className='font-bold py-1 mx-5 text-xl items-start'>
            Rachit Dhaka | rachit.blockchain
          </h2>
        </div>

        <div className='border-solid border-b-2 border-white m-2'>
          <p className='py-1 text-sm items-start'>
            Just starting with this platform , feels really amazing about How
            web3 has been recognized every where and people supporting it . Rate
            my design in the next post 🙌
          </p>
          <img className='my-5 w-[600px]' src='/images/image 1.png' alt='' />
        </div>

        <div className='flex flex-row justify-between py-1 mx-5 '>
          <div className='space-x-4'>
            <button>
              <FavoriteBorderIcon />
            </button>
            <button>
              <MessageIcon />
            </button>
            <button>
              <SendIcon />
            </button>
          </div>
          <img
            className='w-[30px] [h-20px]'
            src='images/Component 21.png'
            alt=''
          />
        </div>
      </div>

      </div>
  )
}
