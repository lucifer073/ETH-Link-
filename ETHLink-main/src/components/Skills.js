import React from 'react'

export default function Skills(props) {
  return (
    <>
    <div className='my-2 rounded-lg bg-[#4C4D5D]'>
        <div className='border-white border-solid border-b-2'>
           <h1 className='text-center'>{props.name}</h1>
        </div>
        <div className='flex flex-row space-x-3 m-2 p-2 items-center'>
            <div className='w-[200px] h-[10px] bg-black'>
             
            </div>
            <p className='text-sm'>
              {props.number}%
            </p>
        </div>
    </div>
    </>
  )
}
