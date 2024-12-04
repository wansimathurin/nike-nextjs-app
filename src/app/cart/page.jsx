'use client'
import React, { useState } from "react";

import Image from "next/image";
import { IoIosTrash } from "react-icons/io";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { useStoreCart } from "@/store/cart.store";
import { products } from "@/utils/data";

export default function Page() {
  const { selectedIds, removeItem } = useStoreCart();
  // const [subTotal, setSubTotal] = useState(0);

  // Filter products based on selected IDs
  const cartItems = products.filter((product) =>
    selectedIds.includes(product.id)
  );

 let subTotal = 0
 cartItems?.forEach((product) =>subTotal+=product.price)

  const noItemsPresent = () => {
      return (
        <div className="container pt-80">
          <p className="text-center text-[#f80] text-lg">
            Your cart is empty. Add some products!
          </p>
        </div>
      );
  }

  return (
    <div>
      <NavbarComponent />
      {cartItems.length == 0 ? (
        noItemsPresent()
      ) : (
        <div className="h-[100%] w-[100%] bg-white shadow-md rounded-lg pt-28 p-6">
          <h3 className="text-black  mb-4">
            You have {cartItems.length} items in your cart
          </h3>

          {/* Item 1 */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  1 x{" "}
                  <span className="text-black font-bold">${item.price}</span>
                </p>
                <p className="text-sm text-gray-500">Size: Regular</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <IoIosTrash color="#f80" size={30} />
              </button>
            </div>
          ))}

          {/* Subtotal */}
          <div className="flex justify-between items-center pt-4 border-t">
            <p className="text-sm font-semibold text-black">Subtotal</p>
              <p className=" font-bold text-[#f80] text-2xl">${ subTotal }</p>
          </div>

          {/* Buttons */}
          <div className="space-y-2 mt-4">
            <button className="w-full py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              View Cart
            </button>
            <button className="w-full py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
