import { IconItemArray } from "@/types/ItemsTypes";
import { ReactElement } from "react";

import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

import { LiaRandomSolid } from "react-icons/lia";
import { PiRepeatLight } from "react-icons/pi";

export const ButtonProps: IconItemArray = [
  {
    model: <LiaRandomSolid size={20} />,
  },
  {
    model: <FaStepBackward size={20} />,
  },
  {
    model: <FaPlay size={24} />,
  },
  {
    model: <FaStepForward size={20} />,
  },
  {
    model: <PiRepeatLight size={20} />,
  },
];
