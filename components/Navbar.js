import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiTShirt2Fill } from "react-icons/ri";
import Link from "next/link";
// import RiAccountCircleLine from  "react-icons/ri";
function Navbar() {
  return (
    <div>
      <nav className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          
        <Link href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <RiTShirt2Fill />ShopTube

            {/* >
                */}
             
                
            
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg> */}
            
          </a></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 cursor-pointer hover:text-gray-900">Home</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Products</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">About Us</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">
              More &darr;
            </a>

           
          </nav>
          <button className="inline-flex items-center bg-gray-100  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <RiAccountCircleFill />
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg> */}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
