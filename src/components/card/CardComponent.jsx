import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function CardComponent({image,title,category,price,slug}) {
  return (
    <div className="h-[460px] w-[350px] bg-slate-950  cursor-pointer mb-5 flex flex-col  rounded overflow-hidden">
      <div className="w-[100%] relative h-[300px] overflow-hidden">
        <Link href={`/products/${slug}`}>
          <Image
            src={image}
            fill
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </Link>
        <IoHeartOutline
          className="absolute top-3 right-3"
          color="#f80"
          size={30}
        />
      </div>
      <div className="p-3">
        <h1>{title}</h1>
        <p>{category}</p>
        <h1>${price}</h1>
        
          <button className="w-[100%] p-3 bg-[#f80]   rounded mt-2 focus:bg-amber-950">
            Add to cart
          </button>
    
      </div>
    </div>
  );
}
