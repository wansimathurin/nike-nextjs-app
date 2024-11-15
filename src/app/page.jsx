"use client"

import CardComponent from "@/components/card/CardComponent";
import HeroComponent from "@/components/hero/HeroComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  // const counter = 0
  // const updateCounter = () => {
  //   alert(counter + 1);
  // }
  const today = new Date().getDay()

  
  console.log(today)

  const clickRef = useRef(0);
  const handleClick = () => {
    clickRef.current = clickRef.current + 1;
      alert("You clicked " + clickRef.current + " times!");
  }
  return (
    <>
      <NavbarComponent />
      <div className="h-[100%] w-[100%] items-center justify-center">
        <HeroComponent />
        {/* all cards start */}
        <div className="h-[100%] w-[100%] flex items-center justify-center p-5 flex-wrap gap-5">
          {/* card end */}
          <CardComponent />
         
         
          {/* card end */}
        </div>
        {/* all cards end */}
      </div>
    </>
  );
}
export default Home;
