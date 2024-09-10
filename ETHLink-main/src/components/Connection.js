import React, { useState} from 'react';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const Connection = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
    setTimeout(() => {
      setIsRemoved(true);
    }, 3000);
  };

  const handleRemove = () => {
    setIsRemoved(true);
  };

  if (isRemoved) {
    return null; // Remove the whole div
  }

  return (
    <div className='flex flex-row justify-between items-start py-3 my-2 rounded-lg bg-black'>
      <div className='w-[40px] h-[40px] ml-2 rounded-full'>
        <img className='w-full h-full rounded-full size-fit' src='/images/man.png' alt=''/>
      </div>
      <h2 className={`font-bold py-1 text-lg items-start ${isConnected ? 'text-green-500' : ''}`}>
        {isConnected ? 'Connected' : props.name}
      </h2>
      <div className='py-0 space-x-3 mx-4'>
        {!isConnected && (
          <button className='rounded-full w-[40px] h-[40px] bg-green-600' onClick={handleConnect}>
            <DoneIcon/>
          </button>
        )}
        {!isConnected && (
          <button className='rounded-full w-[40px] h-[40px] bg-red-600' onClick={handleRemove}>
            <ClearIcon/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Connection;
