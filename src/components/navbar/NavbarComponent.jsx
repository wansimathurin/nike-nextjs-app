import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoBagHandleOutline, IoHeartOutline } from "react-icons/io5";
import Minicart from '../minicart/Minicart';


export default function NavbarComponent() {
  const [isCartActive, setIsCartActive] = useState(false);
  // Toggle the isCartActive state when hover events occur
  const handleMouseEnter = () => {
    setIsCartActive(true);
  };

  const handleMouseLeave = () => {
    setIsCartActive(false);
  };
  return (
    <div className="h-[60px] fixed z-50 bg-black text-white flex w-[100%] items-center justify-between p-4 ">
      <Link href="/">
        <Image src={"/logo.png"} width={70} height={70} alt="Logo" />
      </Link>
      <div className="flex gap-5">
        <Link href="#">New</Link>
        <Link href="#">Men</Link>
        <Link href="#">Women</Link>
        <Link href="#">Kids</Link>
        <Link href="#">Best Sellers</Link>
      </div>
      <div className="flex gap-5 cursor-pointer">
        <div className="relative">
          <IoBagHandleOutline color="#f80" size={30} />
          <Link
            href={"/cart"}
            className="h-[20px] w-[20px] bg-[#f80] rounded-full absolute bottom-[-5px] transition-transform duration-300 ease-in-out delay-300 flex items-center justify-center text-[15px] right-[-5px] font-bold hover:h-96 hover:w-96 hover:rounded-md hover:top-7"
            onMouseEnter={handleMouseEnter} // Handle hover start
            onMouseLeave={handleMouseLeave} // Handle hover end
          >
            {isCartActive ? <Minicart /> : 3}
          </Link>
        </div>

        <Link href={"/wishlist"} className="relative">
          <IoHeartOutline color="#f80" size={30} />
          <div className="h-[20px] w-[20px] bg-[#f80] rounded-full absolute bottom-[-5px] flex items-center justify-center text-[15px] right-[-5px] font-bold">
            2
          </div>
        </Link>
      </div>
    </div>
  );
}
