"use client"

import CardComponent from "@/components/card/CardComponent";
import HeroComponent from "@/components/hero/HeroComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { products } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";


const Home = () => {
  
  return (
    <>
      <NavbarComponent />
      <div className="h-[100%] w-[100%] items-center justify-center">
        <HeroComponent />
        {/* all cards start */}
        <div className="h-[100%] w-[100%] flex items-center justify-center p-5 flex-wrap gap-5">
          {/* card end */}
          {products.map((product) => (
            <CardComponent
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              slug={product.slug}
            />
          ))} 

          {/* card end */}
        </div>
        {/* all cards end */}
      </div>
    </>
  );
}
export default Home;
