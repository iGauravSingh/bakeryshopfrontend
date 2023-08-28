"use client"


import Image from 'next/image'
import wood from './wood.jpg'
import { useEffect, useState } from 'react'


const qoutesDisp = [
    'Good food is the foundation of genuine happiness.',
    'You have to taste a culture to understand it',
    'I know once people get connected to real food, they never change back.'
]

export default function Qoutes() {

    const [qouteState,setQouteState] = useState(qoutesDisp[0])
    

    let i=0
    const [dot,setDot] = useState(i)

    useEffect(()=>{

        const interval =  setInterval(()=>{
            if(i === 3){
                
                i=0
                setQouteState(qoutesDisp[i])
                setDot(i)
            } else {
                // console.log(i)
                setQouteState(qoutesDisp[i])
                setDot(i)
                i++
                
            }
        },4000)
    
        return ()=> clearInterval(interval)
      },[])

      const handleClick = (id)=> {
        i=id
        setDot(id)
        setQouteState(qoutesDisp[id])
      }

  return (
    <div className='mt-12 mb-12'>
        <div className='relative'>
            <Image className='h-[35rem]' src={wood} alt='wood' />
            <div className='absolute top-[18rem] left-auto w-full'>
                <div className='flex flex-col items-center justify-center gap-12'>
                    <h3 className='text-3xl tracking-wide text-white font-greatvibe px-4'>{qouteState}</h3>
                    <div className='flex gap-2'>
                        {dot === 0 ? <div className='w-2 h-2 bg-white rounded-full cursor-pointer'></div> : <div className='w-2 h-2 bg-slate-400 rounded-full cursor-pointer' onClick={()=> handleClick(0)}></div>}
                        {dot === 1 ? <div className='w-2 h-2 bg-white rounded-full cursor-pointer'></div> : <div className='w-2 h-2 bg-slate-400 rounded-full cursor-pointer' onClick={()=> handleClick(1)}></div>}
                        {dot === 2 ? <div className='w-2 h-2 bg-white rounded-full cursor-pointer'></div> : <div className='w-2 h-2 bg-slate-400 rounded-full cursor-pointer' onClick={()=> handleClick(2)}></div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
