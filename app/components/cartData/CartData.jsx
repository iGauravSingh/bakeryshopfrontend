
"use client"


import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Link from 'next/link'





export default function CartData() {

  // Calculate total amount
  
  
    const {shop,setShop} = useContext(ShopContext)

    const totalAmount = shop.reduce((acc, item) => acc + (item.price  * 100) /100, 0);

    const handleremoveitem = (id) => {
      setShop(shop.filter((item)=> item.id !== id ))
    }

    return (
        <div className='text-2xl px-4 md:px-[20rem] font-mono'>
          <div>
            <h2 className='font-bold text-2xl md:text-3xl text-center mb-12 mt-8 pb-4 border-b-2'>YOUR ITEMS</h2>
            <div>
              {shop?.length === 0 ?
              <h2 className='font-bold text-2xl text-green-700'>Nothing Here Yet continue Shoping</h2>
              :
              <div>
                {shop?.map(item=> (
                  <div className='flex gap-4 mb-4 items-center justify-between' key={item.id}>
                    <p>{item.name}</p>
                    <p className='font-medium'>₹ {item.price}</p>
                    <p onClick={()=>handleremoveitem(item.id)} className=' text-red-500 border-2 border-red-600 px-2 py-1 cursor-pointer'>Remove</p>
                  </div>
                ))}
    
              <div className='flex justify-between items-center mt-8 font-bold text-2xl md:text-3xl border-t-2 pt-8'>
                <p>TOTAL AMOUNT</p>
                <p>₹ {totalAmount}</p>
              </div>
              <div className='text-center mt-8'>
                <Link href="/checkout"><button className='bg-slate-950 text-white w-[30%] px-2 md:px-4  py-1 md:py-2 text-sm md:text-base'>CHECKOUT</button></Link>
              
              </div>
                </div> 
                }
              </div>
    
          </div>
        </div>
      )
}
