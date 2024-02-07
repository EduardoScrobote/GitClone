import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";

export default function Home() {
  return (
    <div className="w-full h-screen flex p-2 gap-2">
      <Sidebar />
      <div className="w-[100%] bg-[#121212] rounded-md h-full"></div>
    </div>
  );
}
