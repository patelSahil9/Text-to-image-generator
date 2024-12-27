import React from 'react'
import { IoStar } from "react-icons/io5";
export default function Customerreview() {
  return (
    <div className='flex flex-col items-center h-[600px] w-full'>
       <h1 className="text-5xl font-bold text-gray-800 mb-4  ">
          Create AI Images
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          {" "}
          Turn your imagination into visuals
        </p>
        <div className='flex flex-row gap-5'id='review'>
            <div className='w-[322px] h-[327px] bg-gray-50 rounded-2xl flex flex-col items-center shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl'>
                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[42px] h-[42px] rounded-full bg-black mt-8   ' />
                <h1 className='text-2xl font-bold  '>John Doe</h1>
                <p className='text-inline flex'>
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} fill='yellow' className='font-bold '/>
                  ))}
                </p>
                <p className=' text-gray-600 mb-10 font-semibold text-center ml-10 mr-10'>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            </div>
            <div className='w-[322px] h-[327px] bg-gray-50 rounded-2xl flex flex-col items-center shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl'>
                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[42px] h-[42px] rounded-full bg-black mt-8   ' />
                <h1 className='text-2xl font-bold  '>John Doe</h1>
                <p className='text-inline flex'>
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} fill='yellow' className='font-bold '/>
                  ))}
                </p>
                <p className=' text-gray-600 mb-10 font-semibold text-center ml-10 mr-10'>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            </div>
            <div className='w-[322px] h-[327px] bg-gray-50 rounded-2xl flex flex-col items-center shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl'>
                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[42px] h-[42px] rounded-full bg-black mt-8   ' />
                <h1 className='text-2xl font-bold  '>John Doe</h1>
                <p className='text-inline flex'>
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} fill='yellow' className='font-bold '/>
                  ))}
                </p>
                <p className=' text-gray-600 mb-10 font-semibold text-center ml-10 mr-10'>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            </div>
            <div className='w-[322px] h-[327px] bg-gray-50 rounded-2xl flex flex-col items-center shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl'>
                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[42px] h-[42px] rounded-full bg-black mt-8   ' />
                <h1 className='text-2xl font-bold  '>John Doe</h1>
                <p className='text-inline flex'>
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} fill='yellow' className='font-bold '/>
                  ))}
                </p>
                <p className=' text-gray-600 mb-10 font-semibold text-center ml-10 mr-10'>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
            </div>
        </div>
    </div>
  )
}
