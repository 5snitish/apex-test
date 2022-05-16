import React from "react";
import Asset from "./sidebarlogos/Asset";
import Circle from "./sidebarlogos/Circle";
import Companies from "./sidebarlogos/Companies";
import Dashboard from "./sidebarlogos/Dashboard";
import Documents from "./sidebarlogos/Documents";
import Employees from "./sidebarlogos/Employees";
import Iso from "./sidebarlogos/Iso";
import Projects from "./sidebarlogos/Projects";
//  header utility

const QuickActionBtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex cursor-pointer items-center w-[104px] h-[32px] rounded-[4px] bg-theme_green  justify-center"
      }
    >
      <span className={"font-semibold text-theme_black text-tiny"}>
        Quick Actions
      </span>
    </div>
  );
};

const LogoAndBtnContainer = ({ children, border = true }) => {
  return (
    <div
      className={`h-14 bg-theme_black/95 flex items-center ${
        border ? " border-b" : ""
      } border-white/40 justify-center`}
    >
      {children}
    </div>
  );
};

const SidebarCard = ({ Logo, active = false, name, actionBtn = false }) => {
  const className = `flex flex-col w-full h-16 justify-center  border-b border-white/40 space-y-2  px-[14px] border-white/40 ${
    active ? "bg-white/20" : "bg-theme_black"
  }  `;
  return (
    <div className={className}>
      {Logo}
      <div className={"w-full flex items-center justify-between"}>
        <span
          className={`${
            active ? "text-white" : "text-white/40"
          } font-semibold text-tiny  `}
        >
          {name}
        </span>
        {actionBtn && (
          <svg
            width="4"
            height="7"
            viewBox="0 0 4 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.66626 6L3.33293 3.33333L0.66626 0.666668"
              stroke="white"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-full w-32  bg-theme_black sidebarShadow">
      <LogoAndBtnContainer>
        <img src="./assets/logo.png" className="h-7 w-20" alt="logo" />
      </LogoAndBtnContainer>
      <LogoAndBtnContainer>
        <QuickActionBtn />
      </LogoAndBtnContainer>
      <SidebarCard name="Dashboard" active Logo={<Dashboard />} />
      <SidebarCard name="Companies" actionBtn Logo={<Companies />} />
      <SidebarCard name="Asset" actionBtn Logo={<Asset />} />
      <SidebarCard name="Projects" actionBtn Logo={<Projects />} />
      <SidebarCard name="Documents" actionBtn Logo={<Documents />} />
      <SidebarCard name="Employees" actionBtn Logo={<Employees />} />
      <SidebarCard name="ISO19650" actionBtn Logo={<Iso />} />
      <div className=" mt-14 items-center justify-center">
        <LogoAndBtnContainer border={false}>
          <div className="flex space-y-2 flex-col items-center justify-center">
              <Circle/>
            <span className="font-semibold text-tiny text-white/50">
              APEX V1.0
            </span>
          </div>
        </LogoAndBtnContainer>
      </div>
    </div>
  );
};

export default Sidebar;
