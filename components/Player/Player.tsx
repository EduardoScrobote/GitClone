"use client";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { NextUIProvider } from "@nextui-org/react";
import Buttons from "./components/PlayerButtons/Buttons";
import Right from "./components/RightSide/Right";

function Player() {
  return (
    <div className="w-[100%] flex flex-row items-center  gap-[24rem]">
      <div className="flex items-center w-[16rem]">
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
        <div className="flex w-10 h-10 p-2 items-center justify-center hover:bg-[#1e1c2a] rounded-full hover:cursor-pointer">
          <FaRegHeart size={24} />
        </div>
      </div>
      <div className="flex flex-col w-[44rem] items-center">
        <div className="flex w-full items-center justify-center mb-2">
          <Buttons />
        </div>
        <div className="flex w-full items-center">
          <p className="mr-2 text-sm">00:00</p>
          <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <p className="ml-2 text-sm">01:30</p>
        </div>
      </div>
      <div className="">
        <Right />
      </div>
    </div>
  );
}

export default Player;
