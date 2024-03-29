"use client"
import React, { useState } from "react";
import Orders from "./Orders";
import Products from "./Products";
import Accounts from "./Accounts";







const admin = () => {

  const [selectedPage, setSelectedPage] = useState('orders')

  const handleOrders = () => {
    setSelectedPage('orders')
  }
  
  const handleProducts = () => {
    setSelectedPage('products')
  }
  
  const handleAccounts = () => {
    setSelectedPage('accounts')
  }

  return (
    <div className=" min-h-screen flex font-serif">
      {/* side left panel  */}
      <div className=" w-[20%] min-h-screen bg-slate-400 border-r-2 shadow-lg flex flex-col items-center">
        <p onClick={handleOrders} className="mt-7 cursor-pointer">ORDERS</p>
        <p onClick={handleProducts} className="mt-7 cursor-pointer">PRODUCTS</p>
        <p onClick={handleAccounts} className="mt-7 cursor-pointer">ACCOUNTS</p>
      </div>

      {/* right panel  */}

      <div className=" w-[80%] min-h-screen bg-slate-200 ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <p className=" text-center text-2xl mt-2 mb-4">{selectedPage.toUpperCase()}</p>
      { selectedPage === 'orders' && <Orders />}
      { selectedPage === 'products' && <Products />}
      { selectedPage === 'accounts' && <Accounts />}
    </div>
      </div>
    </div>
  );
};

export default admin;
