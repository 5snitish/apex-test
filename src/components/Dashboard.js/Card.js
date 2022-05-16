import React from "react";
import CardToggle from "./CardToggle";

const Card = ({ title1, value1, logo, value2, title2, active }) => {
  return (
    <div className="w-[294px] flex-col bg-white rounded-lg  h-[256px]">
      <div className="flex flex-col  px-[26px]  justify-between py-[18px] space-y-3 border-b border-black/20">
        <div className="border-2 border-theme_green w-[45px] h-[45px] flex items-center justify-center rounded-full ">
          <div className="bg-theme_gray w-[37px] h-[37px] flex items-center justify-center rounded-full">
            {logo}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-theme_black capitalize font-medium text-sm">
              {title1}
            </span>
            <span className="text-theme_green capitalize font-medium text-[28px]">
              {value1}
            </span>
          </div>
          <svg
            width="19"
            height="13"
            viewBox="0 0 19 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.3335L17 6.33349"
              stroke="#323132"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.833 0.5L17.6663 6.33333L11.833 12.1667"
              stroke="#323132"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col  items-center  space-y-2 px-[26px] py-[18px]  ">
        <CardToggle active={active} />
        <div className="flex items-center space-x-2">
          <span className="text-theme_green capitalize font-medium text-[18px]">
            {value2}
          </span>
          <span className="text-theme_black capitalize font-medium text-xs">
            {title2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
