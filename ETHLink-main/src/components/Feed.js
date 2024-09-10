import React, { useState } from 'react'
import Header from './Header'
import Connection from './Connection'
import Posts from './Posts'
import Post from './Post'
import axios from 'axios'

export default function Feed() {
  const [data, setData] = useState([])

  const getNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=cc3495be8b1d46579e92ca469bab1c3a")
    .then((response) => {
      setData(response.data.articles);
    })
  }

  const getNews1 = () => {
    axios.get("https://newsapi.org/v2/everything?q=ai&apiKey=cc3495be8b1d46579e92ca469bab1c3a")
    .then((response) => {
      setData(response.data.articles);
    })
  }

  const getNews2 = () => {
    axios.get("https://newsapi.org/v2/everything?q=cyber&apiKey=cc3495be8b1d46579e92ca469bab1c3a")
    .then((response) => {
      setData(response.data.articles);
    })
  }

  const getNews3 = () => {
    axios.get("https://newsapi.org/v2/everything?q=cloud&apiKey=cc3495be8b1d46579e92ca469bab1c3a")
    .then((response) => {
      setData(response.data.articles);
    })
  }

  const getNews4 = () => {
    axios.get("https://newsapi.org/v2/everything?q=iot&apiKey=cc3495be8b1d46579e92ca469bab1c3a")
    .then((response) => {
      setData(response.data.articles);
    })
  }

  return (
    <div className='bg-black w-full min-h-screen'>
      <Header />
      <div className='grid grid-cols-4 min-h-screen mb-5 text-white m-5'>
        <div className='px-3 rounded-xl h-fit bg-[#4D4C5D] col-span-1'>
          <div className='p-3 mb-3 text-center border-solid border-b-2 border-white'>
            <h1 className='text-2xl font-bold'>CONNECTIONS</h1>
          </div>
          <Connection name='Devam Savla' />
          <Connection name='Aniket Kumar' />
          <Connection name='Pranav Vinodan' />
          <Connection name='Sarthak Tyagi' />
          <Connection name='Rachit Dhaka' />
        </div>

        <div className='px-5 mx-5 col-span-2'>
          <div className='p-3 rounded-xl h-fit bg-[#4D4C5D]'>
            <Posts />
          </div>
        </div>

        <div className='mx-0 bg-black'>
          <Post />

          <div className='bg-[#4D4D5D] my-5 rounded-lg h-[700px] overflow-y-scroll no-scrollbar'>
            <div className='p-3 mb-3 text-center border-solid border-b-2 border-white'>
              <h1 className='text-2xl font-bold'>NEWS</h1>
            </div>

         <div className=' justify-between items-start py-3 my-2 rounded-lg bg-[#4D4C5D]'>
          <div className='flex flex-row text-center p-3 mx-3 space-x-3'>
           <button onClick={getNews} className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>WEB3</button>
           <button onClick={getNews1} className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>AI</button>
           <button onClick={getNews2} className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>CYBER</button>
           <button onClick={getNews3} className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>CLOUD</button>
           <button onClick={getNews4} className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>IOT</button>
          </div>
          <div className=''>
          {
            data.map((value) => {
              return(
                <div className='border-solid border-b-2 border-white m-2 p-2'>
                  <h1 className='text-[#F18404]'>{value.title}</h1>
                  <p>{value.description}</p>
                </div>
              );
            })
          }
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}
