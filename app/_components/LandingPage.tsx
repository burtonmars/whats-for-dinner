'use client';

import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { Image } from 'cloudinary-react';

const LandingPage = () => {
  const imagePath = 'https://res.cloudinary.com/dv54qhjnt/image/upload/v1712097910/salmon_dinner_qkzoe1.jpg'
  return (
    <div className='card card-compact mb-12 md:mb-0 mx-12 w-5/6 lg:w-96 bg-base-100 shadow-xl h-[550px]'>
       <figure className="w-full h-1/2">
            <Image className="w-full h-full object-cover" cloudName="dv54qhjnt" publicId={imagePath}/>
        </figure>
        <div className='h-1/2 w-full flex py-10 flex-col justify-center items-center text-center'>
            <div className="card-body flex flex-col justify-between" style={{ height: '40%' }}>
            <div className='text-2xl'><span className='text-red-500 font-bold'>welcome</span> to what's for dinner!</div>
            <div className='text-2xl'>ready to add dinner ideas to your collection?</div>
            <div className='text-2xl flex justify-center gap-2'>
                <span>
                    <SignInButton>
                        <button className='text-green-500 font-bold'>sign in</button>
                    </SignInButton>
                </span> to start
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage