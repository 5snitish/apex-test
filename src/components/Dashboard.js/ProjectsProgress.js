import React from "react";
import TableToggle from "../sideBarComponents/TableToggle";

const Progress = () => {
  return (
    <div
      className={
        "flex w-full items-center justify-between px-6 h-[65px]  border-b border-theme_black/10"
      }
    >
      <div className="flex flex-col">
        <span className="font-medium text-xs underline text-black/80">
          Project 1
        </span>
        <span className="font-medium text-xs  text-theme_black/50">
          Londonderry XYZ
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-xs text-black/80">Status</span>
        <span className="font-medium text-xs  text-theme_black/50">
          Completed
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <div className="font-medium text-xs text-theme_black">Progress</div>
          <div className="font-medium text-tiny text-theme_black/50">(4/4)</div>
        </div>
        <div className="flex space-x-2">
          <div className="w-full h-2 bg-theme_green rounded-full"></div>
        </div>

        {/* <span className="font-medium text-xs  text-theme_black/50">
          Completed
        </span> */}
      </div>
    </div>
  );
};

const ProjectsProgress = () => {
  return (
    <div
      className={"bg-white h-[480px] w-[348px] flex flex-col  rounded-[4px] "}
    >
      <div className="  flex    flex-col   justify-center-center  p-6 space-y-4  border-b border-theme_black/10">
        <span className={"text-sm text-theme_black font-bold "}>
          Projects Progress
        </span>
        <TableToggle data={["Completed", "Ongoing"]} active={"Completed"} />
      </div>

      <div className={"flex flex-col   w-full   "}>
        <Progress />
        <Progress />
        <Progress />
        <Progress />
        <Progress />
      </div>
    </div>
  );
};

export default ProjectsProgress;
