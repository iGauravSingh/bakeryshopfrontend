"use client"

import Hero from './components/hero/Hero'
import Products from './components/Products/Products'
import Qoutes from './components/qoutes/Qoutes'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// import { Provider } from "react-redux";
// import { store } from "./app/store.js";

export default function Home() {
  
  return (
    <main>
      {/* <Provider store={store}> */}
      
      <Hero />
      <Products />
      <Qoutes />
      <Menu />
      <Footer />
      <ToastContainer />
      {/* </Provider> */}
    </main>
  )
}
