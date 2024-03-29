"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const dummyOrderData = [
    {
      OrderId: 1,
      orderDetails: ["aaa1", "bbbs1"],
      orderAmount: 90,
      orderDeliveryAddress: "some ddress",
      
    },
    {
      OrderId: 2,
      orderDetails: ["aaa1", "bbbs1","jsjasj8","9s8ca"],
      orderAmount: 90,
      orderDeliveryAddress: "some ddress",
      
    },
    {
      OrderId: 3,
      orderDetails: ["aaa1", "bbbs1"],
      orderAmount: 90,
      orderDeliveryAddress: "some ddress",
      
    },
  ];

const UserProfile = () => {
    const { user, isLoading } = useSelector((state) => state.user.value)

    if(!user && !isLoading){
        return ( <div className=' w-screen h-screen flex justify-center items-center'> Please login </div>)
    }

    if(user && !isLoading){
        return (
            
                <div className=" w-screen h-screen flex  overflow-hidden p-4 font-serif">
                  
                  {/* user details  */}
                  <div className=' w-[30%] border-r-2'>
                  <h2 className="text-xl mb-2">User Profile</h2>
                  <div>
                    <strong>Username:</strong> <span className="text-gray-700">{user.username}</span>
                  </div>
                  <div>
                    <strong>Address:</strong> <span className="text-gray-700">{user.address}</span>
                  </div>
                  <div>
                    <strong>Phone Number:</strong> <span className="text-gray-700">{user.phoneNumber}</span>
                  </div>
                  {/* logout  */}
                  <button className=' mt-4 mb-2 bg-black text-white px-2 py-2'>Logout</button>
                  </div>

                  {/* user Orders  */}
                  <div className=' w-[70%] px-5'>
                  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Order ID</th>
            <th scope="col" className="py-3 px-6">Order Details</th>
            <th scope="col" className="py-3 px-6">Order Amount</th>
            <th scope="col" className="py-3 px-6">Delivery Address</th>
            {/* <th scope="col" className="py-3 px-6">Customer ID</th> */}
          </tr>
        </thead>
        <tbody>
          {dummyOrderData.map((order, index) => (
            <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}`}>
              <td className="py-4 px-6">{order.OrderId}</td>
              <td className="py-4 px-6">
                {order.orderDetails.join(", ")}
              </td>
              <td className="py-4 px-6">{order.orderAmount}</td>
              <td className="py-4 px-6">{order.orderDeliveryAddress}</td>
              {/* <td className="py-4 px-6">{order.customerId}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
                  </div>
                </div>
              );
        
    }
  
};

export default UserProfile;