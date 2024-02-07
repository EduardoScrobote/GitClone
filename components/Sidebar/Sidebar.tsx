import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import SidebarItem from "./SidebarItem/SidebarItem";

function Sidebar() {
  return (
    <div className="w-[27%] flex flex-col gap-2">
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
        <SidebarItem />
      </div>
    </div>
  );
}

export default Sidebar;
