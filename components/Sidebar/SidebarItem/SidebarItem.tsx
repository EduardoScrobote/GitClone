import React from "react";

import { SidebarItems } from "./SidebarProps";

function SidebarItem() {
  return (
    <div>
      {SidebarItems.map((prop, index) => (
        <>
          <div className="w-full gap-2 items-center  text-[#9f9f9f] hover:bg-[#1e1c2a] mt-2 flex">
            <div className="w-14 h-14 bg-cover bg-center bg-playlist rounded-sm"></div>
            <div className="flex flex-col">
              <h1 className="text-md">{prop.name}</h1>
              <p className="text-sm">{prop.type}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default SidebarItem;
