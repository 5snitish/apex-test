import React from "react";
import ProfileContainer from "../headerComponents/ProfileContainer";
const Client = () => {
    return (
        <div
            className={
                "h-[65px] flex items-center  w-full border-b border-theme_black/10 px-6"
            }
        >
            <div className={"flex space-x-2 items-center w-full justify-between "}>
                <ProfileContainer />
                <div className="flex flex-col">
                    <span className="font-medium text-xs text-black">
                        Sherlock Piping Ltd.
                    </span>
                    <span className="font-normal text-tiny underline text-black/80 ">
                        Sherlock Holmes (Client Admin)
                    </span>
                    <span className="font-normal text-tiny  text-black/50">
                        123, Baker St London XY1 2Z
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-xs text-black/80">Projects</span>
                    <div className="flex  items-center space-x-2">
                        <span className="font-medium text-xs text-theme_black/50">12</span>
                        <svg
                            width="8"
                            height="5"
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.33301 1L3.99967 3.66667L6.66634 1"
                                stroke="#323132"
                                stroke-opacity="0.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
const TopClients = () => {
    return (
        <div
            className={"bg-white h-[480px] w-[348px] flex flex-col  rounded-[4px] "}
        >
            <div className="h-[65px] flex      items-center  p-6  border-b border-theme_black/10">
                <span className={"text-sm text-theme_black font-bold "}>
                    Top Clients
                </span>
            </div>
            <div className={"flex flex-col   w-full   "}>
                <Client />
                <Client />
                <Client />
                <Client />
            </div>
        </div>
    );
};

export default TopClients;
