"use client"

import { useRouter } from 'next/navigation'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsStarFill,BsStar } from 'react-icons/bs'
import Image from 'next/image'

import { ShopContext } from "../contexts/ShopContext";
import { useContext } from "react";

import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'
import five from './5.jpg'
import six from './6.jpg'
import seven from './7.jpg'
import eight from './8.jpg'


//import basket from './basket.png'




export const productData = [
    {id: 13321, name: 'BERRILUM',Image: one, price: 10, stars: 5 },
    {id: 345452, name: 'ICEBERRY',Image: two, price: 20, stars: 4 },
    {id: 345453, name: 'CHOCOLAVA',Image: three, price: 15, stars: 4 },
    {id: 446676, name: 'HEART SHARDS',Image: four, price: 8, stars: 3 },
    {id: 5787, name: 'MILKY WAY',Image: five, price: 20, stars: 4 },
    {id: 6898, name: 'CELEBRATION',Image: six, price: 12, stars: 5 },
    {id: 789676, name: 'GREEN GARDEN',Image: seven, price: 14, stars: 5 },
    {id: 8675, name: 'CREAM DOME',Image: eight, price: 25, stars: 4 },
]


export default function Products() {

    const router = useRouter()

    const { shop, setShop} = useContext(ShopContext)

    const starGiver = (rate)=>{
        let star =[]
        for(let i = 1; i<= rate; i++){
          star.push(<BsStarFill className='fill-yellow-600' key={i} alt='icon' />)
        }
        return star
      }

      const handleClick =(id)=> {
        const data = productData.find(prod=> prod.id === id) 
        setShop(prev=> [...prev,data])
        //console.log(shop)
      }

  return (
    <div className='px-8 mt-12'>
        <div className='font-title flex flex-col justify-center items-center'>
            <h2 className='text-4xl'>POPULAR PRODUCTS</h2>
            <p className='text-center mt-6 mb-8 text-slate-900 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.</p>

            <div className='flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4'>
                {productData.map(product=> (
                    <div key={product.id} className='relative group cursor-pointer'>
                        <Image className='w-full h-[25rem] md:w-[20rem] md:h-[25rem]' src={product.Image} alt={product.title} />
                        <div className='hidden group-hover:block'>
                            <div className='absolute flex items-center justify-center w-[18rem] h-[3rem] top-[21rem] left-[1rem] gap-4 bg-white hover:bg-yellow-600 hover:text-white'>
                                <AiOutlineShoppingCart size={20} alt='icon' />
                                {shop.find(ii=> ii.id ===product.id) ? 
                                <p className='text-sm tracking-wide' onClick={()=> router.push('/cart')}>VIEW CART</p> 
                                : 
                                <p className='text-sm tracking-wide' onClick={()=>handleClick(product.id)}>ADD TO CART</p>}
                                
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='flex mt-4 tracking-wider'>{starGiver(product.stars)}</p>
                            <p className='mt-2 text-lg font-medium'>{product.name}</p>
                            <p className='mt-2 mb-6 text-yellow-600'>₹{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
