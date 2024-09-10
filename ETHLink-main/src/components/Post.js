import React from 'react'
import ImageIcon from '@mui/icons-material/Image';


export default function Post() {
  return (
    <div className='bg-[#4D4C5D] px-1 rounded-xl h-fit col-span-1'>
        <div className='p-3 mb-3 text-center border-solid border-b-2 border-white'>
         <h1 className='text-2xl font-bold'>POST</h1>
        </div>

         <div className='flex flex-row justify-between items-start py-3 my-2 rounded-lg bg-[#4D4C5D]'>
          <div className='font-bold py-1 px-3 text-md items-start rounded-2xl max-w-xl bg-black'>
            <input className='bg-black outline-none'
             type='text'
             placeholder='Enter your text here'
            />
          </div>
          <button className='py-0 space-x-1 mx-2'>
            <ImageIcon className=' hover:text-[#F18404] my-1'/>
          </button>
          <button className='bg-black my-1 px-3 rounded-xl text-[#F18404]'>
            Post
          </button>
         </div>
          
    </div>
  )
}

