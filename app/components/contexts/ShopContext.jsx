"use client"

import { createContext, useState,useContext } from "react";

export const ShopContext = createContext({})

export function ShopContextProvider({ children }) {
    const [shop,setShop] = useState([])

    return (
        <ShopContext.Provider value={{shop,setShop}}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopContext = () => useContext(ShopContext)