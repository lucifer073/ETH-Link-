import React from 'react'

export default function Job(props) {
  return (
    <>
        <div className='flex flex-row space-x-5 justify-between py-3 my-2 rounded-lg bg-black'>
         <div className='flex flex-row space-x-4'>
         <div className='w-[40px] h-[40px] rounded-full mx-5 my-3 '>
           <img className='w-full h-full rounded-full size-fit' src={props.src} alt=''/>
          </div>
          <div>
            <h2 className='font-bold py-1 text-xl text-white text-left'>
             {props.company}
            </h2>
            <p className='text-md'>{props.role}</p>
          </div>
          
         </div>
          
            <div className='py-3 px-3 space-x-3 mx-10'>
                <button className='rounded-lg w-[80px] h-[40px] bg-green-600'>
                  Apply
                </button>
                
            </div>
        </div>
       </> 
  )
}

