import React, { useState } from 'react'
import useProduct from '../hooks/useProduct';


const orderData = [
    {
      OrderId: 1,
      orderDetails: ["prooo", "prooo"],
      orderAmount: 90,
      orderDeliveryAddress: "some ddress",
      customerId: "asxas",
    },
    {
      OrderId: 2,
      orderDetails: ["aaa1", "bbbs1","jsjasj8","9s8ca"],
      orderAmount: 90,
      orderDeliveryAddress: "some ddress",
      customerId: "asxas",
    },
    {
      OrderId: 3,
      orderDetails: ["aaa1", "bbbs1"],
      orderAmount: 90,
      orderDeliveryAddress: "some ddress",
      customerId: "asxas",
    },
  ];


const Products = () => {

  const { data, loading, error, addProduct, deleteProduct } = useProduct()

  const [name,setName] = useState('')
  const [Image,setImage] = useState('')
  const [price,setPrice] = useState(0)
  const [star,setStar] = useState(0)
  
  if(loading){
    return (<p>Loading...</p>)
  }

  const handleNameChange =(e) => {
    setName(e.target.value)
  }
  const handleImageChange =(e) => {
    setImage(e.target.value)
  }
  const handlePriceChange =(e) => {
    setPrice(e.target.value)
  }
  const handleStarChange =(e) => {
    setStar(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct({name,Image,price,star})
  }
  const handleDelate = (id) => {
    deleteProduct(id)
  }

  return (
    <>
    {/* add product  */}
    <div>
      <h3 className=' text-center'>Add New Product</h3>
    <form onSubmit={handleSubmit} className=' flex gap-5 mb-4 justify-center' action="">
            <input onChange={handleNameChange} value={name} type="text" placeholder='name of product..' />
            <input onChange={handleImageChange} value={Image} type="text" placeholder='Image link..' />
            <input onChange={handlePriceChange} value={price} type="text" placeholder='price..' />
            <input onChange={handleStarChange} value={star} type="text" placeholder='Star..' />
            <input className=' bg-black text-white px-2 py-2 cursor-pointer' type="submit" placeholder='' />
            
        </form>
    </div>
    {/* product list  */}
    <h3 className=' text-center'>Product List</h3>
    <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Product ID</th>
            <th scope="col" className="py-3 px-6">Product Image</th>
            <th scope="col" className="py-3 px-6">Product Amount</th>
            <th scope="col" className="py-3 px-6">Product Star</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}`}>
              {/* <td className="py-4 px-6">{order.OrderId}</td> */}
              {/* <td className="py-4 px-6">
                {order.orderDetails.join(", ")}
              </td> */}
               <td className="py-4 px-6"><span className=' flex gap-2 items-center'><p onClick={()=>handleDelate(order.id)} className=' text-red-500 text-xl cursor-pointer'>X</p>{order.id}</span></td>
              <td className="py-4 px-6">{order.Image}</td>
              <td className="py-4 px-6">{order.price}</td>
              <td className="py-4 px-6">{order.stars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Products