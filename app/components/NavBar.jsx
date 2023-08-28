"use client"

import Image from "next/image";
import Link from "next/link";

// images 
import menu from './menu.png'
import close from './close.png'
import basket from './basket.png'
import search from './search.png'
import CartModal from "./CartModal/CartModal";
import { useContext, useEffect, useState } from "react";
import { useShopContext } from "./contexts/ShopContext";
import { useRouter } from 'next/navigation'



export default function NavBar() {

  const router = useRouter()
// cart items 
  const { shop } = useShopContext()

  const [menuOpenStatus,setMenuOpenStatus] = useState(false)


  return (
    <nav className="">
    <div className='h-[6rem] font-title border-b-2'>
      <div className="flex justify-between items-center my-auto px-6 md:px-12 h-full">

        <div className="bg-red-50 rounded-full p-2 cursor-pointer hidden md:block">
          <Image src={search} width={40} height={40} alt="search" />
        </div>

        <div className="hidden md:block">
          <div className="flex md:gap-6">
            <div className="hidden md:block group">
              <Link className="hover:text-yellow-600 text-lg font-semibold" href='/'>HOME</Link>
              {/* <ul className="absolute hidden group-hover:block w-[10rem] text-left pl-4 cursor-pointer bg-white">
                <li className="pt-10" onClick={handleClick}>Item1</li>
                <li className="pt-4">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4 pb-4">Item</li>
              </ul> */}
            </div>
            <div className="hidden md:block group">
              <Link className="hover:text-yellow-600 text-lg font-semibold" href='/'>PAGES</Link>
              {/* <ul className="absolute hidden group-hover:block w-[10rem] text-left pl-4 cursor-pointer bg-white">
                <li className="pt-10">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4 pb-4">Item</li>
              </ul> */}
            </div>
            <div className="hidden md:block group">
              <Link className="hover:text-yellow-600 text-lg font-semibold" href='/'>BLOG</Link>
              {/* <ul className="absolute hidden group-hover:block w-[10rem] text-left pl-4 cursor-pointer bg-white">
                <li className="pt-10">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4 pb-4">Item</li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="cursor-pointer" onClick={()=> router.push('/')}>
          <h2 className='text-4xl'>BAKEONN</h2>
          <p className="text-[0.60rem] font-light text-slate-300 text-right">BAKED GOODS SINCE 1960</p>
        </div>
        <div className="hidden md:block">
          <div className="flex md:gap-6">
          <div className="hidden md:block group">
              <Link className="hover:text-yellow-600 text-lg font-semibold" href='/'>PORTFOLIO</Link>
              {/* <ul className="absolute hidden group-hover:block w-[10rem] text-left pl-4 cursor-pointer bg-white">
                <li className="pt-10">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4 pb-4">Item</li>
              </ul> */}
            </div>
            <div className="hidden md:block group">
              <Link className="hover:text-yellow-600 text-lg font-semibold" href='/'>SHOP</Link>
              {/* <ul className="absolute hidden group-hover:block w-[10rem] text-left pl-4 cursor-pointer bg-white">
                <li className="pt-10">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4 pb-4">Item</li>
              </ul> */}
            </div>
            <div className="hidden md:block group">
              <Link className="hover:text-yellow-600 text-lg font-semibold" href='/'>ELEMENTS</Link>
              {/* <ul className="absolute hidden group-hover:block w-[10rem] text-left pl-4 cursor-pointer bg-white">
                <li className="pt-10">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4">Item</li>
                <li className="pt-4 pb-4">Item</li>
              </ul> */}
            </div>
          </div>
        </div>
        
        {/* menu  */}
        <div className="bg-red-50 rounded-full p-2 cursor-pointer md:hidden">
          {menuOpenStatus ? 
          <Image src={close} width={40} height={40} alt="menu" onClick={()=> setMenuOpenStatus(prev=> !prev)} />
          :
          <Image src={menu} width={40} height={40} alt="menu" onClick={()=> setMenuOpenStatus(prev=> !prev)} />  
          }
        </div>



        {/* basket  */}
        <div className="relative bg-red-50 rounded-full p-2 cursor-pointer hidden md:block group" onClick={()=> router.push('/cart')}>
          <p className="w-[0.8rem] h-[0.8rem] bg-red-600 text-[0.60rem] text-white text-center rounded-full absolute right-1">{shop?.length}</p>
          <Image src={basket} width={40} height={40} alt="basket" />
          <div className="absolute right-6 hidden group-hover:block w-[16rem] text-left pl-4 cursor-pointer bg-white">
              <CartModal />
          </div>
        </div>
      </div>
    </div>
      {
        menuOpenStatus ? <div className={`absolute h-screen z-50 bg-red-400 top-[6rem] left-0 right-0 font-title flex flex-col gap-4 items-center`}>
          <Link className=" mt-8 text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>HOME</Link>
          <Link className="text-3xl font-semibold tracking-wide" href='/cart' onClick={()=>setMenuOpenStatus(prev=> !prev)}>CART</Link>
          <Link className="text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>ABOUT</Link>
          <Link className="text-3xl font-semibold tracking-wide" href='/' onClick={()=>setMenuOpenStatus(prev=> !prev)}>CONTACT US</Link>
        </div>
        :
        ''
      }
    </nav>
  )
}
