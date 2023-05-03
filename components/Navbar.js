import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiTShirt2Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
// import RiAccountCircleLine from  "react-icons/ri";
function Navbar(cart) {
  return (
    <div>
      <nav className="text-white body-font bg-blue-500 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link legacyBehavior href="/"><a className="flex title-font font-medium items-center text-2xl text-white mb-4 md:mb-0"><RiTShirt2Fill />ShopTube</a></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href="/"><Button  className="text-white">Home</Button></Link>
            <Link legacyBehavior href="/products/"><Button  className="text-white">products</Button></Link>
            <Link legacyBehavior href="about"><Button  className="text-white">about us</Button></Link>
            <Link legacyBehavior href="/contact"><Button  className="text-white">contact us</Button></Link>
            <Link legacyBehavior href="/"><Button  className="text-white">More &darr;</Button></Link>
           
          </nav>
          {/* <button className="inline-flex items-center  py-1 px-3 focus:outline-none hover:animate-bounce   hover:text-black rounded-full text-2xl mt-4 md:mt-0"><RiAccountCircleFill />
          </button> */}
          <Link legacyBehavior href="/cart"><IconButton aria-label="delete" size="large"><AiOutlineShoppingCart className="text-white" /><span className="">{Object.keys(cart).length}</span></IconButton></Link>
          <Link legacyBehavior href="/login"><IconButton aria-label="delete" size="large"><RiAccountCircleLine className="text-white" /></IconButton></Link>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;


// sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent