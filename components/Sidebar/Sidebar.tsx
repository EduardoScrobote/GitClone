import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import SidebarItem from "./SidebarItem/SidebarItem";
import { MdOutlineVideoCall, MdOutlineVideoLibrary } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { HiPlus, HiPlusSmall } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="w-[27%] min-w-[26rem]  flex flex-col gap-2">
      <div className="bg-[#121212] rounded-md justify-center flex flex-col w-[100%] h-[8rem]">
        <div className="flex items-center ml-4 hover:text-white gap-2">
          <GoHome color="white" size={26} />
          <p className="text-md text-slate-300 hover:text-white hover:cursor-pointer">
            Inicio
          </p>
        </div>
        <div className="flex items-center ml-4 mt-4 hover:text-white gap-2">
          <CiSearch color="white" size={26} />
          <p className="text-md text-slate-300 hover:text-white hover:cursor-pointer">
            Buscar
          </p>
        </div>
      </div>
      <div className="bg-[#121212] rounded-md flex flex-col w-[100%] p-4 h-full">
        <div className="w-full mb-4 flex gap-44 justify-center items-center flex-row">
          <div className="flex hover:text-white gap-2">
            <MdOutlineVideoLibrary color="white" size={26} />
            <p className="text-md w-28 text-slate-300 hover:text-white hover:cursor-pointer">
              Sua biblioteca
            </p>
          </div>
          <div className="flex">
            <div className="rounded-full hover:bg-[#1e1c2a] hover:cursor-pointer p-2">
              <HiPlus size={20} />
            </div>
            <div className="rounded-full hover:bg-[#1e1c2a] hover:cursor-pointer p-2">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>
        <div className=" w-8 h-8 item justify-center items-center flex ">
          <div className="ml-52 flex">
            <div className="rounded-full w-8 h-8 item justify-center items-center flex hover:bg-[#1e1c2a] hover:cursor-pointer">
              <IoSearchOutline size={26} />
            </div>
            <input
              type="text"
              placeholder="Buscar em sua bibliotéca"
              className="ml-2 bg-transparent text-white hover:cursor-text focus:border-slate-500"
            />
          </div>
        </div>
        <div className="scrollbar mt-2 scrollbar-h scrollbar-rounded-md scrollbar-thumb-slate-700 overflow-y-scroll max-h-[44rem]">
          <SidebarItem />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
