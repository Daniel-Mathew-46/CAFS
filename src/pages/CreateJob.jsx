import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const CreateJob = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header headerTitle={"Create Job"} />
        <SubHeader headerTitle={"Create Job"} />
      </div>
    </div>
  );
};

export default CreateJob;
