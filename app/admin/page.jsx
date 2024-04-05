"use client"
import React, { useState } from "react";
import Orders from "./Orders";
import Products from "./Products";
import Accounts from "./Accounts";







const Admin = () => {

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

    // State to hold whether the user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // State to hold the user's password input
    const [password, setPassword] = useState('');
  
    // The hard-coded password (note: this is not secure)
    const correctPassword = 'mypassword';
  
    // Function to check the password
    const checkPassword = () => {
      if (password === correctPassword) {
        setIsAuthenticated(true);
      } else {
        alert('Incorrect password!');
      }
    };

      // Render the password input form if the user is not authenticated
  if (!isAuthenticated) {
    return (
      <div className=" flex flex-col font-serif items-center justify-center mt-14 gap-6">
        <label htmlFor="password">Admin Password</label>
        <input
          className=" border-2 px-2 py-2"
          id="password"
          type="password"
          value={password}
          placeholder="Please Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" border-2 border-black text-black px-4 py-2 rounded-lg" onClick={checkPassword}>Enter</button>
      </div>
    );
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

export default Admin;
