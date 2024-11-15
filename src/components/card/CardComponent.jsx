import Image from 'next/image';
import React from 'react'

export default function CardComponent() {
  return (
    <div className="h-[460px] w-[350px]  cursor-pointer mb-5 flex flex-col  rounded overflow-hidden">
      <div className="w-[100%] relative h-[300px] overflow-hidden">
        <Image
          src={"/shoes/1.jpg"}
          fill
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
      <div>
        <h1>Air jordan</h1>
        <p>men's Shoe</p>
        <h1>$100</h1>
      </div>
    </div>
  );
}
