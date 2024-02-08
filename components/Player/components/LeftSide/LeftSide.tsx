import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

function LeftSide() {
  return (
    <div className="flex w-[64rem]">
      <Image
        src="/mix-png.png"
        alt=""
        width={64}
        height={64}
        className="rounded-md"
      />
      <div className="flex flex-col w-48 ml-4  justify-center">
        <h1 className="text-md hover:underline hover:decoration-solid decoration-white hover:cursor-pointer">
          Hear me now
        </h1>
        <p className="text-sm text-[#242230]">Alok feat zeeba</p>
      </div>
      <div className="flex w-10 h-10 mt-2 p-2 items-center justify-center hover:bg-[#1e1c2a] rounded-full hover:cursor-pointer">
        <FaRegHeart size={24} />
      </div>
    </div>
  );
}

export default LeftSide;
