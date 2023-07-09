import '@/styles/globals.css'
import Head from "next/head";
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const cors = require("cors");
export default function App({ Component, pageProps }) {
  const [cart,setCart]= useState({})
  const [subTotal,setSubTotal]= useState(0)
  const router = useRouter()
  useEffect(()=>{
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(cart)
      }
      
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  },[])
const saveCart = (myCart)=>{
  localStorage.setItem("cart",JSON.stringify(myCart))
  let subt=0
  let keys = Object.keys(myCart)
  for (let i = 0;i< keys.length; i++) {
   subt=myCart[keys[i]].price *myCart[keys[i]].qty;
    
  }
  setSubTotal(subt)
}
  const addToCart=(itemCode,qty,price,name,size,variant)=>{
    let newCart =cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty+qty
    }
    else{
    newCart[itemCode]={qty:1,price,name,size,variant}

    }
    setCart(newCart)
    saveCart(newCart)
  }
  const buyNow = (itemCode,qty,price,name,size,variant)=>{
    let newCart ={itemCode:{qty:1,price,name,size,variant}};

    setCart(newCart)
    saveCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
    
  }

  const clearCart=()=>{
    setCart({})
    saveCart({})
  }
  const removeFromCart=(itemCode,qty,price,name,size,variant)=>{
    let newCart =cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty-qty
    }
    if(newCart[itemCode]["qty"]<=0)
    {
        delete newCart[itemCode]

    }
    setCart(newCart)
    saveCart(newCart)
  }
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  cors.apply(cors(corsOptions));
  return <>
  <Head><title>ShopTube</title><link rel="icon" href="/next.svg" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8651032257595693"
     crossorigin="anonymous"></script>
  </Head>
  <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
  <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} /><Footer/></>
}
