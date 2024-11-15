"use client"

import NavbarComponent from "@/components/navbar/NavbarComponent";
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
      <div className="h-[100vh] w-[100%] items-center justify-center">
          
      </div>
    </>
  );
}
export default Home;
