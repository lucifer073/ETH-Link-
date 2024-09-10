/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import 'react-datepicker/dist/react-datepicker.css'
import VerifiedIcon from '@mui/icons-material/Verified';import { useWriteContract, useAccount } from 'wagmi';
import { CONTRACT_ADDRESS, TICKET_ABI } from '../contracts/verification'
export default function Experience() {
  const [experienceDetails, setExperienceDetails] = useState([])
  const [experienceFormData, setExperienceFormData] = useState({
    image: '',
    designation: '',
    companyName: '',
    startDate: '',
    endDate: '',
    location: '',
  })
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const { writeContract, error, status} = useWriteContract();

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setExperienceFormData({ ...experienceFormData, [name]: value })
  }

  const handleSubmit = () => {
    setExperienceDetails([...experienceDetails, experienceFormData])
    setExperienceFormData({
      designation: '',
      companyName: '',
      startDate: '',
      endDate: '',
      location: '',
    })
    handleClose()
  }

  const handleClearLocalStorage = () => {
    localStorage.clear();
    // Optionally, perform any additional actions after clearing local storage
  };
  

  const handleContract = async () => {
    const { designation, companyName, startDate, endDate, location } = experienceFormData;

    if (
      designation.trim() !== '' &&
      companyName.trim() !== '' &&
      startDate.trim() !== '' &&
      endDate.trim() !== '' &&
      location.trim() !== ''
    ) {
      // Assuming you have error and writeContract functions defined elsewhere
      try {
        // Update experience details after 20 seconds
        setTimeout(() => {
          const newDetails = [...experienceDetails, experienceFormData];
          setExperienceDetails(newDetails);
          localStorage.setItem('experienceDetails', JSON.stringify(newDetails));
        }, 20000);
  
        // Reset form data
        setExperienceFormData({
          image: '',
          designation: '',
          companyName: '',
          startDate: '',
          endDate: '',
          location: '',
        });
  
  
        // Close the dialog after successful submission
        handleClose();
  
        // Add contract handling logic here
        await writeContract({
          abi: TICKET_ABI,
          address: CONTRACT_ADDRESS,
          functionName: "createTicket",
          args: [
            '0x592fa743889fc12d14e24548b6a4471714f487080ebf56a5ec853646105ab4cf',
            'RachitDhaka',
            'ContentWriter',
            5,
            '0x961C70EbA755ebC9753F6A50693A888BF07bBb93',
          ],
        });
  
      } catch (error) {
        alert(error.shortMessage);
      }
    } else {
      alert('All fields are required!');
    }
  };

  useEffect(() => {
    const storedExperienceDetails = localStorage.getItem('experienceDetails');
    if (storedExperienceDetails) {
      setExperienceDetails(JSON.parse(storedExperienceDetails));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedExperienceDetails = [...experienceDetails]
    updatedExperienceDetails.splice(index, 1)
    setExperienceDetails(updatedExperienceDetails)
  }

  return (
    <div className='rounded-lg mx-10 my-5 min-h-fit bg-[#4C4D5D] text-white'>
      <div className='flex flex-row justify-between'>
        <h1 className='m-5 p-5 text-3xl text-[#F18404]'>EXPERIENCE</h1>
        <div className='flex items-center'>
          <button
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
            onClick={handleOpen}
          >
            {' '}
            <AddIcon className='mx-5 my-2 text-[#F18404]' />{' '}
          </button>
        </div>
      </div>
      <div className='flex flex-col'>
        {experienceDetails.map((experience, index) => (
          <div
            key={index}
            className='flex flex-row bg-black p-4 rounded-lg m-5'
          >
            {experience.image && (
              <img
                src={experience.image}
                className='h-[100px] w-[100px] m-5 rounded-full'
                alt='Experience Image'
              />
            )}
            <div className='flex flex-row justify-between'>
              <div className='w-[1000px]'>
                <h1 className='font-bold text-2xl'>
                  {experience.designation}
                  <VerifiedIcon className='mx-2 mb-1 text-green-500' />
                </h1>
                <p className='text-xl'>{experience.companyName}</p>
                <div className='py-5'>
                  <p>Start Date: {experience.startDate}</p>
                  <p>End Date: {experience.endDate}</p>
                  <p>{experience.location}</p>
                </div>
              </div>
              <div className='items-center'>
                <img
                  className='h-[50px] w-[50px] mx-10 my-10'
                  src='/images/QR 1.png'
                  alt=''
                />
              </div>

              <div>
                <IconButton
                  aria-label='delete'
                  onClick={() => handleDelete(index)}
                  style={{ color: '#FFFFFF' }}
                >
                  <DeleteIcon onClick={handleClearLocalStorage} className='m-5' />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Experience</DialogTitle>
        <DialogContent>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => {
              const file = e.target.files[0]
              if (file) {
                const reader = new FileReader()
                reader.onloadend = () => {
                  setExperienceFormData({
                    ...experienceFormData,
                    image: reader.result,
                  })
                }
                reader.readAsDataURL(file)
              }
            }}
          />
          {experienceFormData.image && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={experienceFormData.image}
              className='h-[100px] w-[100px] my-5'
              alt='Experience Image'
            />
          )}
          <TextField
            margin='dense'
            label='Designation'
            fullWidth
            name='designation'
            value={experienceFormData.designation}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Company Name'
            fullWidth
            name='companyName'
            value={experienceFormData.companyName}
            onChange={handleInputChange}
          />

          <TextField
            margin='dense'
            label='Start Date'
            type='date'
            fullWidth
            name='startDate'
            value={experienceFormData.startDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin='dense'
            label='End Date'
            type='date'
            fullWidth
            name='endDate'
            value={experienceFormData.endDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            margin='dense'
            label='Location'
            fullWidth
            name='location'
            value={experienceFormData.location}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleContract} color='primary' variant='contained'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}