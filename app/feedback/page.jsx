
"use client"
import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";





const Feedback = () => {

    
    const router = useRouter()
    const [name,setName ] = useState()
    const [message,setMessage] = useState()

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlemessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8080/feedback/add",{name,message})
          router.push('/');
        } catch (error) {
          console.error('error in feed back submit',error)
        }
    }

    return (
        <>
        
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-lg font-semibold font-serif">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Feedback</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-lg font-semibold">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                onChange={handleNameChange}
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-lg font-semibold">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                onChange={handlemessageChange}
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={message}
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        </>
    );
};

export default Feedback;