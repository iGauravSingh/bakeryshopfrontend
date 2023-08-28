import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-[15rem] bg-slate-950 text-white font-title'>
        <div className='flex justify-between items-center pt-[3rem] px-6 md:px-24'>
            <div className='border-2 px-6 py-4 hidden md:block'>
                <h3 className='font-title'>BAKEONN</h3>
            </div>

            <div>
                <h3 className='text-lg md:text-2xl font-normal'>USEFULL LINKS</h3>
                <p className='mt-4 mb-2 text-xs'>ABOUT US</p>
                <p>CALL +91234567987</p>
            </div>
            <div>
                <h3 className='text-lg md:text-2xl font-normal'>RESOURCES FROM</h3>
                <p className='mt-4 mb-2'>unsplash</p>
                <p>freepik</p>
            </div>
        </div>
        <p className='text-center mt-8 text-red-500'>created by Gaurav Singh</p>
    </div>
  )
}
