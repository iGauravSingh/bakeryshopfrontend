
"use client"


import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'





export default function CartData() {
  
    const {shop} = useContext(ShopContext)

    return (
        <div className='text-2xl px-4 md:px-[20rem] font-mono'>
          <div>
            <h2 className='font-bold text-2xl md:text-3xl text-center mb-12 mt-8 pb-4 border-b-2'>YOUR ITEM'S</h2>
            <div>
              {shop?.length === 0 ?
              <h2 className='font-bold text-2xl text-green-700'>Nothing Here Yet continue Shoping</h2>
              :
              <div>
                {shop?.map(item=> (
                  <div className='flex gap-4 mb-4 items-center justify-between' key={item.id}>
                    <p>{item.name}</p>
                    <p className='font-medium'>$ {item.price}</p>
                  </div>
                ))}
    
              <div className='flex justify-between items-center mt-8 font-bold text-2xl md:text-3xl border-t-2 pt-8'>
                <p>TOTAL AMOUNT</p>
                <p>$ 90</p>
              </div>
              <div className='text-center mt-8'>
              <button className='bg-slate-950 text-white w-[30%] px-4 py-4'>CHECKOUT</button>
              </div>
                </div> 
                }
              </div>
    
          </div>
        </div>
      )
}
