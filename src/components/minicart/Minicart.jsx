import Image from 'next/image';
import React from 'react'

const Minicart = () => {
  return (
    <div className="flex flex-col gap-5 h-[100%] w-[100%] overflow-hidden   p-3">
      <h3>You have 3 items in the cart</h3>
      <div className="flex gap-3">
        {/* image area */}
        <div className="">
          <Image
            src={"/shoes/nike-free-metcon/1.jpeg"}
            alt={`Product `}
            width={50}
            height={50}
            className="w-full h-auto rounded-md object-cover cursor-pointer"
          />
            </div>
              <div className="flex flex-col">
                  <h1>Nike cortez sandero</h1>
                  <p>Category: Mens Shoe</p>
                  <h1 className='text-[20px]'>$200</h1>
              </div>
      </div>
      <div className="flex gap-3">
        {/* image area */}
        <div className="">
          <Image
            src={"/shoes/nike-free-metcon/1.jpeg"}
            alt={`Product `}
            width={50}
            height={50}
            className="w-full h-auto rounded-md object-cover cursor-pointer"
          />
            </div>
              <div className="flex flex-col">
                  <h1>Nike cortez sandero</h1>
                  <p>Category: Mens Shoe</p>
                  <h1 className='text-[20px]'>$200</h1>
              </div>
      </div>
      <div className="flex gap-3">
        {/* image area */}
        <div className="">
          <Image
            src={"/shoes/nike-free-metcon/1.jpeg"}
            alt={`Product `}
            width={50}
            height={50}
            className="w-full h-auto rounded-md object-cover cursor-pointer"
          />
            </div>
              <div className="flex flex-col">
                  <h1>Nike cortez sandero</h1>
                  <p>Category: Mens Shoe</p>
                  <h1 className='text-[20px]'>$200</h1>
              </div>
      </div>
      <div className="flex gap-3">
        {/* image area */}
        <div className="">
          <Image
            src={"/shoes/nike-free-metcon/1.jpeg"}
            alt={`Product `}
            width={50}
            height={50}
            className="w-full h-auto rounded-md object-cover cursor-pointer"
          />
            </div>
              <div className="flex flex-col">
                  <h1>Nike cortez sandero</h1>
                  <p>Category: Mens Shoe</p>
                  <h1 className='text-[20px]'>$200</h1>
              </div>
      </div>
    </div>
  );
}

export default Minicart
