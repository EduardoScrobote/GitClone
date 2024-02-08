import { ReactElement } from "react";

import { PiScreencastFill } from "react-icons/pi";
import { HiMiniQueueList } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { LuVolume2 } from "react-icons/lu";
import { IconItemArray } from "@/types/ItemsTypes";

export const RightItemProp: IconItemArray = [
  {
    model: <PiScreencastFill size={20} />,
  },
  {
    model: <HiMiniQueueList size={20} />,
  },
  {
    model: <FaComputer size={20} />,
  },
  {
    model: <LuVolume2 size={20} />,
  },
];
