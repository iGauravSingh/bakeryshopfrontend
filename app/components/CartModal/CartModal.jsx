"use client"


import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Link from 'next/link'



export default function CartModal() {

    const { shop } = useContext(ShopContext) 

    

  return (
    <div className='px-4'>
        <div className=''>
            {shop && shop.map(item=> (
                <div className='flex gap-4 mb-4 items-center justify-between' key={item.id}>
                    <p>{item.name}</p>
                    <p className='font-bold'>$ {item.price}</p>
                </div>
            ))}
        </div>
        <div className='mt-8 border-t-2 pt-4'>
            <div className='flex items-center justify-between'>
                <h4 className='font-bold text-xl'>Total</h4>
                <h4 className='font-bold text-xl'>$ 90</h4>
            </div>
            <div className='flex items-center justify-between mt-4 mb-4'>
                <Link href='/cart' className='bg-slate-950 text-white font-medium py-2 px-2 text-sm'>VIEW CART</Link>
                <Link href='/cart' className='bg-slate-950 text-white font-medium py-2 px-2 text-sm'>CHECKOUT</Link>
            </div>
        </div>
    </div>
  )
}
