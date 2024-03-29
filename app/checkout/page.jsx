"use client"
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import useOrder from '../hooks/useOrder';


import { ShopContext } from '../components/contexts/ShopContext';
import { useRouter } from 'next/navigation';


const PayPalCheckoutButton = () => {

  const router = useRouter();
  const { addOrder } = useOrder()
  const {shop,setShop} = useContext(ShopContext)

  const { user, isLoading } = useSelector((state) => state.user.value)

  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  var orderArr =[]
  const findOrderDetail = () => {
    shop.map(order => orderArr.push(order.name))
    console.log('from find order detai;',orderArr)
  }
  const totalAmount = shop.reduce((acc, item) => acc + (item.price  * 100) /100, 0);

  const handleCheckout = async () => {
    setIsProcessing(true);
    findOrderDetail()
      await addOrder({ orderArr,totalAmount })
    // Simulate a delay to mimic processing
    setTimeout( () => {
      setIsProcessing(false);
      // Simulate a successful payment
      
      
      alert('Payment successful! Thank you for your purchase.');
      setShop([])
      router.push('/');
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing logic here
    console.log('Form data:', formData);
    // You can display a success message or navigate to a success page
  };

  if( user && !isLoading) {
    return (
      <div className=' font-serif'>
          <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              className="mt-1 p-2 border rounded w-full"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              id="expirationDate"
              className="mt-1 p-2 border rounded w-full"
              value={formData.expirationDate}
              onChange={handleChange}
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              className="mt-1 p-2 border rounded w-full"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="CVV"
            />
          </div>
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay Now
          </button> */}
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleCheckout}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Checkout with PayPal'}
        </button>
        </form>
      </div>
        
      </div>
    );
  } else {
    return (
      <div className=' font-serif'>
        Please login
      </div>
    )
  }

  
};

export default PayPalCheckoutButton;