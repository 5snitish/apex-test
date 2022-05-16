import React from "react";
import Notification from "./headerLogos/Notification";
import QuestonMark from "./headerLogos/QuestonMark";
import ProfileContainer from "./ProfileContainer";

const Details = () => {
    return (
        <div className="h-full flex bg-black/5">
            <div className="flex items-center justify-center border-[0.5px] w-16  border-theme_green ">
                <QuestonMark />
            </div>
            <div className="flex  items-center justify-center border-[0.5px] w-16  border-theme_green ">
                <div className="relative">
                    <Notification />
                    <div className="w-[14px] absolute top-[-5px] right-0 h-[14px] rounded-full bg-theme_green flex items-center justify-center ">
                        <span className="    text-white font-bold text-[8px]">2</span>
                    </div>
                </div>
            </div>

            <div className="   px-6 flex items-center justify-between   w-[258px]    ">
                <div className="flex items-center justify-center space-x-3 ">
              <ProfileContainer/>
                    <div className="flex flex-col  ">
                        <span className="font-light text-black text-tiny">
                            Good afternoon,
                        </span>
                        <div className="flex items-center space-x-1 justify-center">
                            <span className="font-semibold text-theme_black text-tiny">
                            Greg Sharples
                            </span>
                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L3.66667 3.66667L6.33333 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Details;
