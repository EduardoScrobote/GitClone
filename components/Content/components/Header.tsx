import React from "react";

import { BsArrowDownCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Header() {
  return (
    <div>
      <div className="w-full flex justify-between gap-[70%]">
        <div className="flex gap-4">
          <div className="flex justify-center items-center rounded-full w-10 h-10 hover:bg-[#1e1c2a]">
            <IoIosArrowBack size={20} />
          </div>
          <div className="flex justify-center items-center rounded-full w-10 h-10 hover:bg-[#1e1c2a]">
            <IoIosArrowForward size={20} />
          </div>
        </div>
        <div className="flex p-2 rounded-md h-8 gap-2 items-center w-auto">
          <div className="bg-[#212121] hover:cursor-pointer flex p-2 rounded-md h-8 gap-2 items-center w-56">
            <BsArrowDownCircle />
            <h1>Instalar aplicativo</h1>
          </div>
          <div className="flex justify-center  bg-[#212121] hover:cursor-pointer items-center rounded-full w-10 h-10 hover:bg-[#1e1c2a]">
            <FaRegBell size={20} />
          </div>
          <div className="flex justify-center p-2 bg-[#212121] hover:cursor-pointer items-center rounded-full w-10 h-10 hover:bg-[#1e1c2a]">
            <div className="flex justify-center bg-[#0e7e4a] hover:cursor-pointer items-center rounded-full w-8 h-6 hover:scale-125 transition-all delay-150">
              E
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
