import React, {useState} from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LinkIcon from '@mui/icons-material/Link'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
function Socials() {
  const [isFollowed, setIsFollowed] = useState(false)

  const handleFollow = () => {
    setIsFollowed(true);
    
  };
  const [status, setStatus] = useState('idle');

  const handleConnect = () => {
    setStatus('pending');
    setTimeout(() => {
      setStatus('accepted');
    }, 5000);
  };
  return (
    <>
      <div className='my-5 bg-black rounded-xl p-5'>
        <div className='flex flex-row space-x-3'>
        <button
  id="follow-button"
  className={`px-3 py-1 rounded-2xl font-semibold ${
    isFollowed ? 'bg-green-500' : 'bg-[#98948B]'
  }`}
  onClick={handleFollow}
  disabled={isFollowed}
>
  {isFollowed ? (
    <DoneAllTwoToneIcon className='mx-1 text-white' />
  ) : (
    <PersonAddAltIcon className='mx-1 text-white' />
  )}
  {isFollowed ? 'FOLLOWED' : 'FOLLOW'}
</button>
      <button
        className={`px-3 py-1 rounded-2xl font-semibold ${
          status === 'accepted' ? 'bg-green-500' : 'bg-[#98948B]'
        }`}
        onClick={handleConnect}
        disabled={status !== 'idle'}
      >
        {status === 'pending' ? (
          <HourglassBottomTwoToneIcon className='mx-1 text-white' />
        ) : status === 'accepted' ? (
          <HowToRegTwoToneIcon className='mx-1 text-white ' />
        ) : (
          <LinkIcon className='mx-1 text-white' />
        )}
        {status === 'pending' ? 'PENDING' : status === 'accepted' ? 'ACCEPTED' : 'CONNECT'}
      </button>
        </div>
        <div className='flex flex-col mx-5 my-3'>
          <h3 className='text-xl text-[#F18404]'>
            CONNECTIONS: <span className='text-white'>500+</span>
          </h3>
          <h3 className='text-xl text-[#F18404]'>
            FOLLOWERS: <span className='text-white'>612</span>
          </h3>
        </div>
      </div>

      <div className='my-5 bg-black p-5 rounded-xl'>
        <h1 className='text-center mb-5 text-xl text-[#F18404]'>CONTACT</h1>
        <div className='space-x-3'>
          <a href='mailto:rachitdhaka29@gmail.com' className='bg-[#98948B] px-3 py-1 rounded-2xl text-[#313131] font-semibold'>
            <EmailRoundedIcon className='mx-1 text-white' />
            EMAIL
          </a>
          <a href='tel:+9176647509' className='bg-[#98948B] px-3 py-1 rounded-2xl text-[#313131] font-semibold'>
            <ChatRoundedIcon className='mx-1 text-white' />
            MESSAGE
          </a>
        </div>
      </div>
    </>
  )
}

export default Socials
