import React from 'react'
import useOrder from '../hooks/useOrder';


const orderData = [
    {
      OrderId: 1,
      orderDetails: ["aaa1", "bbbs1"],
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


const Orders = () => {

  const { data, loading, error } = useOrder()

  return (
    <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Order ID</th>
            <th scope="col" className="py-3 px-6">Order Details</th>
            <th scope="col" className="py-3 px-6">Order Amount</th>
            <th scope="col" className="py-3 px-6">Delivery Address</th>
            <th scope="col" className="py-3 px-6">Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}`}>
              <td className="py-4 px-6">{order.OrderId}</td>
              <td className="py-4 px-6">
                {order.orderDetails.join(", ")}
              </td>
              <td className="py-4 px-6">{order.orderAmount}</td>
              <td className="py-4 px-6">{order.orderDeliveryAddress}</td>
              <td className="py-4 px-6">{order.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders