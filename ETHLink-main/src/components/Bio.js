import React, { useState, useEffect } from 'react'
import Header from './Header'
import Skills from './Skills'
import AddIcon from '@mui/icons-material/Add'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Experience from './Experience'
import Socials from './Socials'
import { useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, TICKET_ABI } from '../contracts/verification'
import { config } from '../App'

export default function Bio() {
  // Education
  const account = useAccount()
  const [open, setOpen] = useState(false)
  const [educationDetails, setEducationDetails] = useState([])
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    branch: '',
    city: '',
    startDate: '',
    endDate: '',
    proof: null,
  })

  const { writeContract, error, status } = useWriteContract()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleProofChange = (event) => {
    setFormData({ ...formData, proof: event.target.files[0] })
  }
  const handleSubmit = () => {
    const { institution, degree, branch, city, startDate, endDate, proof } =
      formData

    if (
      institution.trim() !== '' &&
      degree.trim() !== '' &&
      branch.trim() !== '' &&
      city.trim() !== '' &&
      startDate.trim() !== '' &&
      endDate.trim() !== '' &&
      proof
    ) {
      const newDetails = [...educationDetails, formData]
      setEducationDetails(newDetails)
      setFormData({
        institution: '',
        degree: '',
        branch: '',
        city: '',
        startDate: '',
        endDate: '',
        proof: null,
      })
      handleClose() // Close the dialog after successful submission
    } else {
      alert('All fields are required!')
    }
  }
  const handleDelete = (index) => {
    const updatedDetails = [...educationDetails]
    updatedDetails.splice(index, 1)
    setEducationDetails(updatedDetails)
  }

  const handleContract = async () => {
    const { institution, degree, branch, city, startDate, endDate, proof } =
      formData

    if (
      institution.trim() !== '' &&
      degree.trim() !== '' &&
      branch.trim() !== '' &&
      city.trim() !== '' &&
      startDate.trim() !== '' &&
      endDate.trim() !== '' &&
      proof
    ) {
      // Assuming you have error and writeContract functions defined elsewhere
      try {
        // Update education details after 15 seconds
        setTimeout(() => {
          const newDetails = [...educationDetails, formData]
          setEducationDetails(newDetails)
        }, 20000)

        // Reset form data
        setFormData({
          institution: '',
          degree: '',
          branch: '',
          city: '',
          startDate: '',
          endDate: '',
          proof: null,
        })

        // Close the dialog after successful submission
        handleClose()

        // Add contract handling logic here
        await writeContract({
          abi: TICKET_ABI,
          address: CONTRACT_ADDRESS,
          functionName: 'createTicket',
          args: [
            '0x592fa743889fc12d14e24548b6a4471714f487080ebf56a5ec853646105ab4cf',
            'RachitDhaka',
            'ContentWriter',
            5,
            '0x961C70EbA755ebC9753F6A50693A888BF07bBb93',
          ],
        })
      } catch (error) {
        alert(error.shortMessage)
      }
    } else {
      alert('All fields are required!')
    }
  }

  // BIO
  const [bioOpen, setBioOpen] = useState(false)
  const [bioDetails, setBioDetails] = useState([])

  const [bioFormData, setBioFormData] = useState({
    role: '',
    desc: '',
    organization: '',
  })

  const bioHandleOpen = () => {
    setBioOpen(true) // Update bio dialog state
  }

  const bioHandleClose = () => {
    setBioOpen(false) // Update bio dialog state
  }

  const handleBioInputChange = (e) => {
    const { name, value } = e.target
    setBioFormData({ ...bioFormData, [name]: value })
  }

  const handleBioSubmit = () => {
    const { role, desc, organization } = bioFormData

    if (
      role.trim() !== '' &&
      desc.trim() !== '' &&
      organization.trim() !== ''
    ) {
      const newBioDetails = [...bioDetails, bioFormData]
      setBioDetails(newBioDetails)
      setBioFormData({
        role: '',
        desc: '',
        organization: '',
      })
      bioHandleClose()
    } else {
      alert('All fields are required!')
    }
  }

  const handleBioDelete = (index) => {
    const updatedDetails = [...bioDetails]
    updatedDetails.splice(index, 1)
    setBioDetails(updatedDetails)
  }

  useEffect(() => {
    // Reset form state when bio dialog is closed
    if (!bioOpen) {
      setBioFormData({
        role: '',
        desc: '',
        organization: '',
      })
    }
  }, [bioOpen])

  return (
    <div>
      <Header />
      <div className='grid grid-cols-4 h-fit mx-10 my-5 rounded-lg bg-[#4D4C5D] text-white'>
        <div className='col-span-1 flex flex-col items-center m-5'>
          <img
            className='h-[200px] w-[200px] rounded-full m-5'
            src='/images/dp 5.png'
            alt=''
          />
          <Socials />
        </div>

        <div className='col-span-2 m-5 bg-black rounded-xl h-fit'>
          <div className='border-solid border-b-2 border-white'>
            <h1 className='m-5 font-bold text-3xl'>
              GM, MYSELF <span className='text-[#F18404]'> RACHIT DHAKA</span>
            </h1>
          </div>
          {/* BIO */} {/* BIO */} {/* BIO */} {/* BIO */} {/* BIO */}{' '}
          <div>
            <div className='flex flex-col p-5 border-solid border-b-2 border-white'>
              <div className='flex flex-row justify-between'>
                <h2 className='text-2xl text-[#F18404]'>BIO </h2>
                <div>
                  <button
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={bioHandleOpen}
                  >
                    {' '}
                    <EditIcon className='mx-5 my-2 text-[#F18404]' />{' '}
                  </button>
                </div>
              </div>
              {bioDetails.map((bio, index) => (
                <div key={index} className='flex flex-row mb-5 justify-between'>
                  <div className='flex flex-col w-[600px] mx-5'>
                    <h3 className='text-xl'>{bio.role}</h3>
                    <h4 className='text-md'>{bio.desc}</h4>
                    <p>{bio.organization}</p>
                  </div>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleBioDelete(index)}
                    style={{ color: '#FFFFFF' }}
                  >
                    <DeleteIcon className='mx-3' />
                  </IconButton>
                </div>
              ))}
            </div>
            <Dialog open={bioOpen} onClose={bioHandleClose}>
              <DialogTitle>Add Bio Details</DialogTitle>
              <DialogContent>
                <TextField
                  margin='dense'
                  label='Role'
                  fullWidth
                  name='role'
                  value={bioFormData.role}
                  onChange={handleBioInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />

                <TextField
                  margin='dense'
                  label='Description'
                  fullWidth
                  name='desc'
                  value={bioFormData.desc}
                  onChange={handleBioInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />
                <TextField
                  autoFocus
                  margin='dense'
                  label='Organization'
                  fullWidth
                  name='organization'
                  value={bioFormData.organization}
                  onChange={handleBioInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={bioHandleClose} color='primary'>
                  Cancel
                </Button>
                <Button
                  onClick={handleBioSubmit}
                  color='primary'
                  variant='contained'
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* EDUCATION */} {/* EDUCATION */} {/* EDUCATION */}{' '}
          {/* EDUCATION */} {/* EDUCATION */}{' '}
          <div>
            <div className='flex flex-col p-5 border-solid border-b-2 border-white'>
              <div className='flex flex-row justify-between'>
                <h2 className='text-2xl text-[#F18404]'>EDUCATION </h2>
                <div>
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
              {educationDetails.map((education, index) => (
                <div key={index} className='flex flex-row mb-5 justify-between'>
                  <div className='flex flex-col w-[600px] mx-5'>
                    <h3 className='text-xl'>
                      {education.degree} - {education.branch}
                    </h3>
                    <h4 className='text-md'>
                      {education.institution}, {education.city}
                    </h4>
                    <h5 className='text-md'>
                      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      }).format(new Date(education.startDate))}{' '}
                      -{' '}
                      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      }).format(new Date(education.endDate))}
                    </h5>
                  </div>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleDelete(index)}
                    style={{ color: '#FFFFFF' }}
                  >
                    <DeleteIcon className='mx-3' />
                  </IconButton>
                </div>
              ))}
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add Details</DialogTitle>
              <DialogContent>
                <TextField
                  margin='dense'
                  label='Institution'
                  fullWidth
                  name='institution'
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />

                <TextField
                  margin='dense'
                  label='Degree'
                  fullWidth
                  name='degree'
                  value={formData.degree}
                  onChange={handleInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />
                <TextField
                  autoFocus
                  margin='dense'
                  label='Branch'
                  fullWidth
                  name='branch'
                  value={formData.branch}
                  onChange={handleInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />
                <TextField
                  margin='dense'
                  label='City'
                  fullWidth
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  autoComplete='off' // Prevent browser autofill
                />
                <TextField
                  margin='dense'
                  label='Start Date'
                  fullWidth
                  type='date'
                  name='startDate'
                  value={formData.startDate}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
                <TextField
                  margin='dense'
                  label='End Date'
                  fullWidth
                  type='date'
                  name='endDate'
                  value={formData.endDate}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
                <input type='file' onChange={handleProofChange} required />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary'>
                  Cancel
                </Button>

                <Button
                  onClick={() => handleContract()}
                  color='primary'
                  variant='contained'
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className='flex flex-col p-5 h-fit'>
            <h2 className='text-2xl text-[#F18404]'>POSITION</h2>
            <div className='m-5 flex flex-row'>
              <div className='flex flex-col w-[600px]'>
                <h3 className='text-xl'>Content-Writer</h3>
                <h4 className='text-md'>Vartalaap Podcast</h4>
                <h5 className='text-md'>Jan'2024-current</h5>
              </div>
              <img
                className='mx-5 my-3 h-[50px] w-[50px]'
                src='/images/Srmseal 1.png'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='col-span-1'>
          <div className='m-5 bg-black p-5 rounded-lg'>
            <h1 className='m-5 text-center text-[#F18404]'>SKILLS</h1>
            <Skills name={'Python'} number={'70'} />
            <Skills name={'Solidity'} number={'80'} />
            <Skills name={'C'} number={'50'} />
            <Skills name={'SQL'} number={'40'} />
            <Skills name={'Javascript'} number={'90'} />
            <Skills name={'NodeJS'} number={'78'} />
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className='min-h-screen'>
        <Experience />
      </div>
    </div>
  )
}
