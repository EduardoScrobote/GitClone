import Player from "@/components/Player/Player";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";

export default function Home() {
  return (
    <div className="w-full max-h-screen flex flex-col p-2">
      <div className="w-full max-h-[99vh] h-[99vh] flex col p-2 gap-2">
        <Sidebar />
        <div className="w-[100%] bg-[#121212] rounded-md h-full"></div>
      </div>
      <div className="w-[99%] flex justify-center items-center h-24 bg-black absolute bottom-0">
        <Player />
      </div>
    </div>
  );
}
