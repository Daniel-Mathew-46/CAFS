import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import DashboardStats from "../components/DashboardStats";
import StatsChart from "../components/StatsChart";
import JobCategCharts from "../components/JobCategCharts";
import SidebarComponent from "../components/SidebarComponent";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen w-screen ">
      <SidebarComponent />
      <div className="flex-1 overflow-y-scroll">
        <Header headerTitle={"Dashboard"} showButton={true} />
        <SubHeader headerTitle={"Dashboard"} />
        <DashboardStats />
        <div className="w-full flex gap-2 flex-col px-12 overflow-x-auto md:flex-row">
          <StatsChart />
          <JobCategCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
