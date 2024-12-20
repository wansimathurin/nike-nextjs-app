import { useStoreCart } from "@/store/cart.store";
import { useStoreFavorite } from "@/store/favorite.store";
import { products } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export default function CardComponent({id, image, title, category, price, slug }) {
  const { selectedIds, toggleId } = useStoreCart();
  const { selectedHeartIds, toggleHeartIconId } = useStoreFavorite();
  // Filter products based on selected IDs
 
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
        {selectedHeartIds.includes(id) ? (
          <IoHeart
            onClick={() => toggleHeartIconId(id)}
            className="absolute top-3 right-3"
            color="#f80"
            size={30}
          />
        ) : (
          <IoHeartOutline
            className="absolute top-3 right-3"
            color="#f80"
            size={30}
            onClick={() => toggleHeartIconId(id)}
          />
        )}
      </div>
      <div className="p-3 text-gray-300">
        <h1>{title}</h1>
        <p>{category}</p>
        <h1>${price}</h1>

        <button
          onClick={() => toggleId(id)}
          className={`w-[100%] p-3 ${
            selectedIds.includes(id) ? "bg-amber-950" : "bg-[#f80]"
          } rounded mt-2 focus:bg-amber-950`}
        >
          {selectedIds.includes(id) ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
