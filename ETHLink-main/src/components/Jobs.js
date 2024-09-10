import React from 'react'
import Header from './Header'
import SearchIcon from '@mui/icons-material/Search';
import Job from './Job';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Jobs() {
    const [value, setValue] = React.useState('female');
    const [value1, setValue1] = React.useState('$120 - $240');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleChange1 = (event) => {
        setValue1(event.target.value);
      };

  return ( 
    <div className='bg-black w-full min-h-screen h-[1111px]'>
     <Header/>
     <div className='flex flex-row rounded-3xl bg-[#4D4C5D] m-10 p-5'>
        <SearchIcon className='mx-2 text-xl'/>
        <input type='text' placeholder='Search' className='mx-2 pr-10 bg-[#4D4C5D] outline-none w-[1200px] text-xl text-[#F18404] text-left' />
      </div>
      <div className='grid grid-cols-3 text-white mx-10 my-5 rounded-lg'>
        <div className='col-span-1 p-3 rounded-l-lg text-left border-solid border-r-2 border-white bg-[#4D4C5D]'>
      <FormControl>
      <FormLabel className='mx-5 text-white font-mono' id="demo-controlled-radio-buttons-group">EMPLOYMENT</FormLabel>
        <RadioGroup
          className='mx-10 my-5'
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
        <FormControlLabel value="Full Time" control={<Radio />} label="Full Time" />
        <FormControlLabel value="Part Time" control={<Radio />} label="Part Time" />
        <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
        <FormControlLabel value="On Site" control={<Radio />} label="On Site" />
        <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel className='mx-5 text-white font-mono' id="demo-controlled-radio-buttons-group">SALARY</FormLabel>
        <RadioGroup
          className='mx-10 my-5'
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value1}
          onChange={handleChange1}
        >
        <FormControlLabel value="$120 - $240" control={<Radio />} label="$120 - $240" />
        <FormControlLabel value="$240 - $360" control={<Radio />} label="$240 - $360" />
        <FormControlLabel value="$360 - $480" control={<Radio />} label="$360 - $480" />
        <FormControlLabel value="$480 - $600" control={<Radio />} label="$480 - $600" />
        <FormControlLabel value="$600+" control={<Radio />} label="$600+" />
      </RadioGroup>
    </FormControl>
        </div>
        <div className='col-span-2 p-3 rounded-r-lg text-left text-white bg-[#4D4C5D]'>
         <Job company='Google' role='Software Developer Engineer' src='/images/Logo-google-icon-PNG.png' />
         <Job company='Metamask' role='Blockchain Developer' src='/images/metamask-icon.png'/>
         <Job company='Vartalaap Podcast' role='Content Writer' src='/images/VARTAA (1).png'/>
         <Job company='SRM Institute of Science and Technology' role='Frontend Developer' src='/images/Srmseal 1.png'/>
         <Job company='Google' role='Software Engineer' src='/images/Logo-google-icon-PNG.png' />
        </div>
      </div>
    </div>
  )
}
