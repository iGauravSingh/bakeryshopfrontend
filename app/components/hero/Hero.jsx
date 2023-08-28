"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'

// images 

import bread from './bread.png'
import sandwich from './sandwich.png'
import pastry from './pastry.png'
import food from './food.png'
import punf from './punf.png'
import fveg from './fveg.png'
import left from './left.png'
import right from './right.png'

import { useEffect, useState } from 'react'



const bannerData = [
    {
        id: 1,
         title: 'SANDWICHES',
         point: [
         {id:1, title:'BREAKFAST', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia!',image: food },
         {id:2, title:'HEALTHY SNACKS', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia!',image: punf }
        ],
        image: sandwich
    },
    {
        id: 2,
         title: 'BREAD',
         point: [
         {id:1, title:'BAKE THE VERY BEST', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia!', image: fveg },
         {id:2, title:'UNSPEAKABLY GOOD', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia!', image: food }
        ],
        image: bread
    },
    {
        id: 3,
         title: 'PASTRY',
         point: [
         {id:1, title:'CHOCOLATE', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia!', image: punf },
         {id:2, title:'SWEET CLASICS', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia!', image: food }
        ],
        image: pastry
    },
]

const heroImageVariant = {
    hidden: {
        opacity: 0,
        y: 0,
        scale: 0.5,
    },
    show: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}

const heroItemHeadingVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 1.25,
            ease: [0, 0.71, 0.2, 1.01], 
        }
    }
}

const heroItemPoint1Variant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01], 
        }
    }
}

const heroItemPoint2Variant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01], 
        }
    }
}


export default function Hero() {

    const [heroData,setHeroData] = useState(bannerData[0])
    const [index,setIndex] = useState(0)
    

    useEffect(()=>{

        const interval =  setInterval(()=>{
            if(index === 2){
                //console.log('in equal',index)
                setIndex(0)
                setHeroData(bannerData[2])
            }
             else {
                //console.log('inset uper',index)
                setHeroData(bannerData[index])
                setIndex(prev=> prev +1 )
                //console.log('inset lower',index)
            }
        },4000)
    
        return ()=> clearInterval(interval)
      },[index])


  return (
    <>
    <div className='bg-red-50 md:px-[10rem] px-[3rem] '>
        
            <div className='flex flex-col md:flex-row'>
               {/* Item points  */}
                <div className='w-full md:w-1/2 mt-8 md:mt-36 font-title'>
                    <motion.div 
                        key={index}
                        variants={heroItemHeadingVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}>
                        <h1
                        
                        className='text-4xl md:text-6xl font-semibold'>
                            {heroData.title}
                        </h1>

                        <div>
                            {heroData.point.map(itm=> (
                                
                                    <div className='flex items-center gap-4 mt-8' key={itm.id}>
                                        <Image className='w-[6rem] h-[6rem]' src={itm.image} alt='itm.title' />
                                        <div className='flex flex-col'>
                                            <h3 className='font-semibold text-2xl'>{itm.title}</h3>
                                            <p className='mt-4 font-medium text-lg'>{itm.desc}</p>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Item Image  */}
                <motion.div
                key={index}
                variants={heroImageVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className='w-full md:w-1/2md:mt-36 mt-8'>
                    <Image className='w-[20rem] h-[20rem] md:w-full md:h-full' src={heroData.image} alt={heroData.title} />
                </motion.div> 
            </div>

              
    </div>
            <div className='hidden absolute top-[25rem] left-[3rem] md:block'>
                <Image src={left} alt='left' width={30} height={30} />
            </div>
            <div className='hidden absolute top-[25rem] right-[3rem] md:block'>
            <Image src={right} alt='right' width={30} height={30} />
            </div>
    </>
  )
}







        {/* ribbion  */}
        {/* <div className='w-[15rem] border-b-[22px] border-t-[22px] border-r-[18px] border-r-transparent  border-yellow-600  absolute top-[15rem] left-[2rem]'>
        
        
        <h4 className='text-lg font-medium text-white absolute'>CALL US +9198675643 </h4>
            
        </div> */}