import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function Proposals() {

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const customEvent = new CustomEvent('emailNotification', {
      detail: { message: 'Check your E-Mail Notification for future Updates' },
    });
    document.dispatchEvent(customEvent);
  }

  document.addEventListener('emailNotification', function (event) {
    alert(event.detail.message);
  });

  return (
    <div className='text-white bg-[#4C4D5D] min-h-screen'>
      <Header/>
      <div className='grid grid-cols-3 p-5 m-5 bg-[#4C4D5D] text-white '>
      <div className='col-span-1 bg-[#4C4D5D] border-solid border-r-2 border-white '>
        <div className='text-center flex flex-col m-5 h-[500px]'>
            <h1 className='font-bold text-xl text-center text-[#F18404] pb-5 mx-5 border-b-2 border-solid border-white'>Account</h1>
            <Link to="/company/proposals"><p className='p-5 mx-5 text-lg text-center'>Proposal</p></Link>
            <Link to="/company/tickets"><p className='p-5 mx-5 text-lg text-center border-b-2 border-solid border-white'>Tickets</p></Link>
            <button className='p-5 mx-5 text-lg text-center'>Settings</button>
            <button className='p-5 mx-5 text-lg text-center'>Notifications</button>
            <p></p>
        </div>
        <div className='items-center m-5 px-5 '>
          <div className='m-5 flex flex-row items-center px-5'>
            <img className='h-[40px] w-[40px]' src='/images/VARTAA (1).png' alt='' />
            <h2 className='p-5 font-bold text-lg text-center'>Vartalaap Podcast</h2>
          </div>
          <button className='px-5 mx-5 text-center bg-black rounded-lg font-bold'>LOGOUT</button>
        </div>
      </div>
      <div className="col-span-2 bg-black rounded-r-xl">
      <h1 className='m-5 font-bold text-xl text-center text-[#F18404]'>Proposal</h1>
      <div className='p-5 m-5'>
      <form onSubmit={handleSubmit} className='md:p-10 px-5 py-10 items-center'>
            <div className='flex flex-row'>
            <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[460px] w-[400px] rounded-md flex flex-row'>
               <input type='text' placeholder='Company Name' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[420px] rounded-md flex flex-col outline-none'/>
             </div>
            </div>

            <div className='flex flex-row item'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[460px] w-[400px] rounded-md flex flex-row'>
               <input type='text' placeholder='Title' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[420px] rounded-md flex flex-col outline-none'/>
             </div>
            </div>

            <div className='flex flex-row'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[460px] w-[400px] rounded-md flex flex-row'>
               <textarea name='Description' placeholder='Description' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[420px] rounded-md flex flex-col outline-none'/>
             </div>
            </div>

            <div className='flex flex-row'>
             <div className='text-[#fff500] m-5  md:w-[550px] w-[500px] rounded-xl flex flex-row'>
               <h1>Proof of Verification: </h1>
               <input type='file' placeholder='Upload' className='bg-[#4C4D5C] text-[#fff500] px-3 py-3 w-[420px] rounded-xl flex flex-col outline-none'/>
               <button className='items-center mx-5 px-10 rounded-xl bg-[#F18404]'>SUBMIT</button>
             </div>
            </div>


        </form>
      </div>
      </div>
    </div>
    </div>
  )
}
