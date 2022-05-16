import React from "react";
import Card from "../components/Dashboard.js/Card";
import Assests from "../components/Dashboard.js/dashboardLogos/Assests";
import Compainies from "../components/Dashboard.js/dashboardLogos/Compainies";
import Document from "../components/Dashboard.js/dashboardLogos/Document";
import ProjectsProgress from "../components/Dashboard.js/ProjectsProgress";
import RecentActivity from "../components/Dashboard.js/RecentActivity";
import TopClients from "../components/Dashboard.js/TopClients";
import Project from "../components/sideBarComponents/sidebarlogos/Project";


const Dashboard = () => {
    return (
        <div className={"flex px-[30px] py-9 flex-col h-full space-y-4 overflow-y-scroll w-full"}>
            <div className="flex justify-between flex-wrap gap-5">
                <Card
                    active={"DAY"}
                    title1={"TOTAL COMPANIES"}
                    value1={14}
                    title2={"COMPANIES ADDED "}
                    value2={"01"}
                    logo={<Compainies />}
                />
                <Card
                    active={"WEEK"}
                    title1={"TOTAL ASSETS"}
                    value1={24}
                    title2={"COMPANIES ADDED "}
                    value2={"07"}
                    logo={<Assests />}
                />
                <Card
                    active={"MONTH"}
                    title1={"TOTAL PROJECTS"}
                    value1={24}
                    title2={"PROJECTS ADDED "}
                    value2={"07"}
                    logo={<Project />}
                />
                <Card
                    active={"DAY"}
                    title1={"TOTAL DOCUMENTS"}
                    value1={14}
                    title2={"DOCUMENTS ADDED "}
                    value2={"07"}
                    logo={<Document />}
                />
            </div>

            <div className="flex justify-between   flex-wrap gap-5  ">
                <RecentActivity />
                <TopClients />
                <ProjectsProgress />
            </div>
        </div>
    );
};

export default Dashboard;
