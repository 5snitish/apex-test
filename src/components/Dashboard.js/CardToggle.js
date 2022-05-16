import React from "react";

const Toggle = ({ active, name }) => {
  return (
    <div
      className={`h-full flex items-center justify-center border-x border-theme_green   w-[61px]  ${
        active === name
          ? "bg-theme_green text-white"
          : "bg-white text-theme_green"
      }`}
    >
      <span className={`capitalize text-tiny font-semibold`}>{name}</span>
    </div>
  );
};

const CardToggle = ({ active }) => {
  return (
    <div
      className={
        "h-[30px] border flex w-[182px]  border-theme_green rounded-[4px]"
      }
    >
      <Toggle name={"DAY"} active={active} />
      <Toggle name={"WEEK"} active={active} />
      <Toggle name={"MONTH"} active={active} />
    </div>
  );
};

export default CardToggle;
