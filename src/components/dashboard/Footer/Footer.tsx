import React from "react";
import Logo from "../../../assets/footer.svg";
import separatorIcon from "../../../assets/separator.svg";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-[329px] mt-16 items-center gap-3 absolute top-[2150px] left-[30px]">
      <img
        className="w-full h-px object-cover"
        alt="Divider line"
        src={separatorIcon}
      />

      <div className="inline-flex items-center justify-center gap-1">
        <h1 className="text-[#999999] font-bold">Spark</h1>
        <img className="w-[20px] h-3.5" alt="Company logo" src={Logo} />
        <h1 className="font-light">nomy</h1>
      </div>
      <div className="text-[#999999] text-[10px] text-center leading-[14px]">
        sparking the creator economy
      </div>
    </div>
  );
};
