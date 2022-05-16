import React from "react";

const Toggle = ({ name, active }) => {
  return (
    <div
      className={`  h-[31px] flex items-center justify-center rounded-[4px] px-3 font-medium text-xs ${
        active === name
          ? "bg-theme_green  text-theme_black "
          : "bg-theme_green/20 text-theme_green"
      } `}
    >
      <span>{name}</span>
    </div>
  );
};

const TableToggle = ({ data, active }) => {
  return (
    <div className={"flex space-x-2"}>
      {data.map((item, key) => (
        <Toggle name={item} active={active} key={key} />
      ))}
    
    </div>
  );
};

export default TableToggle;
