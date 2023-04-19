import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import DescriptionText from "../components/DescriptionText";
import ListMenu from "../components/ListMenu";
import CustomButton from "../components/CustomButton";

const Report = () => {
  const jobs = [
    { name: "IT Officer" },
    { name: "Database Administrator" },
    { name: "Senior Frontend Developer" },
    { name: "Backend Developer" },
    { name: "Cloud Engineer" },
    { name: "Accountant Manager" },
  ];
  const [selected, setSelected] = useState(jobs[0]);
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header headerTitle={"Report"} showButton={true} />
        <SubHeader headerTitle={"Report".toUpperCase()} />
        <DescriptionText descrText={"Select a job to print report"} />
        <div className="flex mt-3 flex-row justify-start items-center">
          <ListMenu selected={selected} setSelected={setSelected} jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default Report;