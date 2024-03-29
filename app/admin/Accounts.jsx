import React from 'react'
import useAccount from '../hooks/useAccount';


const orderData = [
    {
      OrderId: 1,
      orderDetails: ["accccc", "acccc"],
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


  // id          Int      @id @default(autoincrement())
  // username    String
  // email       String   @unique
  // password    String
  // address     String
  // phoneNumber String
  // orders

const Accounts = () => {

  const {data, loading, error} = useAccount()

  return (
    <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">User ID</th>
            <th scope="col" className="py-3 px-6">User Name</th>
            <th scope="col" className="py-3 px-6">User Email</th>
            <th scope="col" className="py-3 px-6">User Password</th>
            <th scope="col" className="py-3 px-6">User Address</th>
            <th scope="col" className="py-3 px-6">User PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}`}>
              {/* <td className="py-4 px-6">{order.OrderId}</td>
              <td className="py-4 px-6">
                {order.orderDetails.join(", ")}
              </td> */}
              <td className="py-4 px-6">{order.id}</td>
              <td className="py-4 px-6">{order.username}</td>
              <td className="py-4 px-6">{order.email}</td>
              <td className="py-4 px-6">{order.password}</td>
              <td className="py-4 px-6">{order.address}</td>
              <td className="py-4 px-6">{order.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Accounts