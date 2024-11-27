'use client'
import { IoHeartOutline } from "react-icons/io5";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import React, { useState } from "react";
import Image from "next/image"; 
import { products } from "@/utils/data";

export default function ProductPage({ params }) {
  const { slug } = React.use(params); 
  const mainProduct = products.find(product => product.slug === slug);
  console.log('mainProduct', mainProduct);
  const [bigImage, setBigImage] = useState(mainProduct.image)
  
  
  
  

  const product = {
    name: "Nike Air Max",
    description: "A premium quality shoe for your everyday and sportswear.",
    price: "$120",
    images: [
      "/shoes/nike-free-metcon/1.jpeg",
      "/shoes/nike-free-metcon/2.jpeg",
      "/shoes/nike-free-metcon/3.jpeg",
      "/shoes/nike-free-metcon/4.jpeg",
      "/shoes/nike-free-metcon/5.jpeg",
      "/shoes/nike-free-metcon/6.jpeg",
      "/shoes/nike-free-metcon/7.jpeg",
    ],
  };

  return (
    <div>
      <NavbarComponent />
      <div className="flex gap-5 p-5 justify-center min-h-screen pt-20">
        {/* Thumbnail Images Section */}
        <div className="w-[10%] flex flex-col gap-3">
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              width={100}
              height={100}
              onMouseOver={() => setBigImage(image)}
              className="w-full h-auto rounded-md object-cover cursor-pointer"
            />
          ))}
        </div>

        {/* Sticky Image Section */}
        <div className="w-2/4 sticky top-0 h-[500px]">
          <Image
            src={bigImage}
            alt="Main Product"
            width={500}
            height={500}
            className="w-full h-full rounded-md object-cover"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-3 lg:sticky top-20  h-[500px]">
          <h1 className="text-3xl font-bold">{mainProduct.title}</h1>
          <p className="text-gray-400">{mainProduct.description}</p>
          <p className="text-xl font-semibold">{mainProduct.price}</p>

          {/* Add to Cart Button */}
          <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Add to Cart
          </button>

          {/* Add to Favorite Button with Icon */}
          <button className="flex w-full py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 items-center justify-center">
            Add to Favorite
            <IoHeartOutline className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}