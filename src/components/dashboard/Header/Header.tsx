import React from "react";
import { Button } from "../../common/Button/Button";
import { ChevronLeft } from "lucide-react"; 
import batteryIdicatorIcon from "../../../assets/BatteryAndIndicator.svg"
import avatar from "../../../assets/Avatar.svg";

export const Header: React.FC = () => {
  return (
    <div className="w-full bg-purple-300 p-1">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 h-[24px]">
        <div className="text-[15px] font-semibold text-black">9:41</div>
        <img
          className="w-[80px] h-[80px]"
          alt="Battery and signal indicators"
          src={batteryIdicatorIcon}
        />
      </div>

      {/* Navigation Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-2 py-1 h-auto"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
          <span className="text-black text-[17px] font-normal">Back</span>
        </Button>

        <h1 className="text-black text-[17px] font-semibold">Dashboard</h1>

        <img
          src={avatar}
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </header>
    </div>
  );
};