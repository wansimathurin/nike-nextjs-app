import Image from 'next/image';
import React from 'react'

export default function CardComponent() {
  return (
    <div className="h-[460px] w-[350px] bg-slate-950 cursor-pointer mb-5 flex flex-col gap-3 rounded overflow-hidden">
      <div className="w-[100%] relative h-[300px] overflow-hidden">
        <Image
          src={"/shoes/1.jpg"}
          fill
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
    </div>
  );
}
