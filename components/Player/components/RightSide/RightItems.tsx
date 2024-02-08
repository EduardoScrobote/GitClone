import React from "react";

import { RightItemProp } from "./RightProps";
import { BsWindowFullscreen } from "react-icons/bs";
import { AiOutlineArrowsAlt } from "react-icons/ai";

function RightItems() {
  return (
    <div className="flex w-[18rem] justify-center items-center">
      {RightItemProp.map((prop, i) => (
        <div
          key={i}
          className="hover:bg-[#1e1c2a] w-10 h-10 p-2 flex items-center justify-center rounded-full"
        >
          {prop.model}
        </div>
      ))}
      <div className="w-[8rem] bg-gray-200 rounded-full h-1 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
      <div className="hover:bg-[#1e1c2a] w-10 h-10 p-2 flex items-center justify-center rounded-full">
        <BsWindowFullscreen size={18} />
      </div>
      <div className="hover:bg-[#1e1c2a] w-10 h-10 p-2 flex items-center justify-center rounded-full">
        <AiOutlineArrowsAlt size={18} />
      </div>
    </div>
  );
}

export default RightItems;
