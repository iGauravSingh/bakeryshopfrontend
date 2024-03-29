"use client"

import NavBar from '@/app/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Great_Vibes } from 'next/font/google'
import { ShopContextProvider } from './components/contexts/ShopContext'

import { Provider } from "react-redux";
import { store } from "./app/store.js";

const inter = Inter({ subsets: ['latin'] })

const greatvibe = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

const metadata = {
  title: 'Bakeonn Bakery',
  description: 'Fresh and Tasty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${greatvibe.className}`}>
        <Provider store={store}>
        <ShopContextProvider>
          <NavBar />
          {children}
          
        </ShopContextProvider>
        </Provider>
        </body>
    </html>
  )
}
