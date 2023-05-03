import Head from "next/head";
import Image from "next/image";
import Crousel from "components/Crousel";
import Product from "../models/Product";
import mongoose from "mongoose";

// import { AiOutlineHeart } from "react-icons/ai";
import Button from "@mui/material/Button";
import Link from "next/link";
export default function Home({ products,addToCart,slug }) {
  return (
    <>
      <Head>
        <meta name="description" content="Created by Shibashish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <h1 className="mx-3 bg-green-500 text-red-500">Hello</h1> */}
      <Crousel />
      <>
        {/* component */}
        {/* UI card from https://uxplanet.org/ultimate-guide-for-designing-ui-cards-59488a91b44f */}
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
          <div className="relative m-3 flex flex-wrap justify-center">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer "
                >
                  <div className="overflow-x-hidden rounded-4xl relative">
                    <img
                      className="h-40 rounded-2xl w-full object-fill"
                      src={products[item].img}
                    />
                    <p className="absolute right-2 top-2 bg-slate-500  rounded-full p-2 cursor-pointer group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 group-hover:opacity-50 opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </p>
                  </div>
                  <div className="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-0">
                        <Link
                          legacyBehavior
                          href={`/products/${products[item].slug}`}
                        >
                          <a> {products[item].title} </a>
                        </Link>
                      </p>
                      <p className="text-md text-gray-800 mt-0">
                        {products[item].price}
                      </p>
                      <p className="text-md text-gray-800 mt-2">
                        {products[item].size.includes("S") && <span className="border border-gray-600 mx-1 px-1">S</span>}
                        {products[item].size.includes("M") && <span className="border border-gray-600 mx-1 px-1">M</span>}
                        {products[item].size.includes("L") && <span className="border border-gray-600 mx-1 px-1"> L</span>}
                        {products[item].size.includes("XL") && <span className="border border-gray-600 mx-1 px-1">XL</span>}
                        {products[item].size.includes("XXL") && <span className="border border-gray-600 mx-1 px-1"> XXL</span>}
                        {products[item].size.includes("Regular") && <span className="border border-gray-600 mx-1  p-1 text-sm">Regular</span>}
                        {products[item].size.includes("7") && <span className="border border-gray-600 mx-1 px-1">7</span>}
                        {products[item].size.includes("8") && <span className="border border-gray-600 mx-1 px-1">8</span>}
                        {products[item].size.includes("9") && <span className="border border-gray-600 mx-1 px-1">9</span>}
                      </p>
                      <p className="text-md text-gray-800 mt-3">
                        {products[item].color.includes("Red") && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes("Blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes("White") && <button className="border-2 border-gray-300 ml-1 bg-white-700 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes("Green") && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes("Black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes("W-P") && <button className="border-2 border-gray-300 ml-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-full w-6 h-6 focus:outline-none" />}
                      </p>
                      {/* </p><span className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none">9</span> */}
                    </div>
                    <div className="flex flex-col mb-1 mr-4 group cursor-pointer">
                      <Button variant="outlined" className="h-10 w-1/10 m-2">Buy Now</Button>
                      {/* <Button  onClick={()=>{addToCart(products[item].slug,1,products[item].price,products[item].title,products[item].size,products[item].color)}} variant="outlined" className="h-10 w-1/10 m-2">Add to cart</Button> */}
                      {/* <AiOutlineHeart className="h-6 w-6 group-hover:opacity-70"/> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Raw Denim Heirloom Man Braid
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">
                    Authentic Cliche Forage
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">
                    Kinfolk Chips Snackwave
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">
                    Coloring Book Ethical
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">
                    Typewriter Polaroid Cray
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">
                    Pack Truffaut Blue
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">
                    The Catcher In The Rye
                  </span>
                </div>
              </div>
            </div>
            {/* <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Button
            </button> */}
            <Button
              variant="outlined"
              className="flex mx-auto mt-16  bg-blue-500 text-white hover:text-black text-lg "
            >
              Button
            </Button>
          </div>
        </section>
      </>
    </>
  );
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
  }
  await mongoose.connect(process.env.MONGO_URI);
  let products = await Product.find();
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}
