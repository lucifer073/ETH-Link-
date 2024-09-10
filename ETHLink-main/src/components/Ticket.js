import React from 'react'
import { useWriteContract, useAccount } from 'wagmi';
import { CONTRACT_ADDRESS, TICKET_ABI } from '../contracts/verification'


export default function Ticket(props) {
  const account = useAccount();
  const {writeContract, error, status} = useWriteContract();
  const handleTickets = () => {
    if (error) {
      alert(error.shortMessage)
    }

    writeContract({
      abi: TICKET_ABI,
      address: CONTRACT_ADDRESS,
      functionName: "approveTicket",
      args: [
        1,
      ],
    })

  }
  return (
    <>
    <div className='p-5 rounded-lg flex flex-row bg-[#4C4D5D]'>
        <div className='text-left'>
        <p className='text-[#F18404] font-bold'>{props.id}</p>
        <p className='font-semibold'>{props.name}</p>
        <p className=''>{props.role}</p>
        <p className=''>{props.company}</p>
        <p className=''>{props.location}</p>
        </div>
        <div className='items-center'>
        <img className='h-[80px] w-[100px]' src='/images/cover-letter (1) 1.png' alt='' />
        <button className='m-3 px-5 rounded-xl bg-green-400' onClick={handleTickets}>Accept</button>
        <button className='m-3 px-5 rounded-xl bg-red-500'>Reject</button>
        </div>
        
    </div>
    </>
  )
}
