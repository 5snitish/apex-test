import React from "react";
import ProfileContainer from "../headerComponents/ProfileContainer";
import TableToggle from "../sideBarComponents/TableToggle";

const ActivityHeader = () => {
  return (
    <div className={"w-full h-[65px] flex justify-between space-x-8 items-center "}>
      <div className="flex  flex-col ">
        <span className="font-bold text-sm text-theme_black">
          Recent Activity
        </span>
        <span className="font-medium text-sm text-theme_black/50">
          12 new this week
        </span>
      </div>
      <TableToggle data={["Today", "Yesterday", "This Week"]} active="Today" />
    </div>
  );
};

const ActivityCard = () => {
  return (
    <div className={"w-full flex items-center justify-between "}>
      <div className="flex flex-col">
        <span className="font-medium text-xs text-theme_black">WED</span>
        <span className="font-medium text-xs text-theme_black/50">NOV 24</span>
      </div>
      <ProfileContainer />
      <div className="flex flex-col">
        <span className="font-medium text-xs text-black">
          New document added
        </span>
        <span className="font-medium text-xs underline text-theme_blue">
          Lorem.pdf
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-xs text-black/80">Project</span>
        <span className="font-medium text-xs underline text-theme_black/50">
          Londonderry XYZ
        </span>
      </div>
      <div className="flex flex-col h-8 w-[30px] items-center justify-center bg-theme_gray_light">
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.33496L10.1474 4.33496"
            stroke="#323132"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.19238 1L10.5274 4.335L7.19238 7.67"
            stroke="#323132"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
const RecentActivity = () => {
  return (
    <div className={"bg-white space-y-6 p-6 h-[480px] rounded-[4px] "}>
      <ActivityHeader />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </div>
  );
};

export default RecentActivity;
