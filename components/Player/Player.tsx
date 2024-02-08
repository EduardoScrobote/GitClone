"use client";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { NextUIProvider } from "@nextui-org/react";
import Buttons from "./components/PlayerButtons/Buttons";
import Right from "./components/RightSide/Right";
import LeftSide from "./components/LeftSide/LeftSide";

function Player() {
  return (
    <div className="w-[100%] flex flex-row items-center gap-[20%]">
      <div className="flex items-center justify-center w-[16rem]">
        <LeftSide />
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
