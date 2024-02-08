import React from "react";

import { ButtonProps } from "./ButtonsProp";

function Buttons() {
  return (
    <>
      {ButtonProps.map((prop, i) => (
        <div
          key={i}
          className="hover:bg-[#1e1c2a] w-10 h-10 p-2 flex items-center justify-center rounded-full"
        >
          {prop.model}
        </div>
      ))}
    </>
  );
}

export default Buttons;
