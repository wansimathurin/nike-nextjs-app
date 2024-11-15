import Image from 'next/image'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className="h-[80vh] w-[100%] bg-slate-950 flex items-center justify-center">
      <h1 className="text-[250px] text-[#f80]">NIKE AIR</h1>
      <Image
        src="/nike.png"
        height={600}
        width={600}
        alt="Nike shoe"
        className="absolute -rotate-45 transition-transform ease-in-out cursor-pointer hover:rotate-0"
      />
    </div>
  );
}
