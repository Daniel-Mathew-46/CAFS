import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ListMenu from "../components/ListMenu";
import CustomButton from "../components/CustomButton";
import DescriptionText from "../components/DescriptionText";
import DataTable from "../components/DataTable";
import SidebarComponent from "../components/SidebarComponent";
import axios from "axios";

const Analysis = () => {
  const jobs = [
    { name: "IT Officer" },
    { name: "Database Administrator" },
    { name: "Senior Frontend Developer" },
    { name: "Backend Developer" },
    { name: "Cloud Engineer" },
    { name: "Accountant Manager" },
  ];
  const [selected, setSelected] = useState(jobs[0]);
  const [data, setData] = useState(null);
  const url = "http://localhost/CAFS/Analysis.php";
  let fData = new FormData();
  fData.append("hrId", 1);

  useEffect(() => {
    axios
      .get(url, fData)
      .then((response) => setData(response.data))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <SidebarComponent />
      <div className="flex-1 overflow-scroll">
        <Header headerTitle={"Analysis"} showButton={true} />
        <SubHeader headerTitle={"Analysis".toUpperCase()} />
        <DescriptionText descrText={"Select a job to analyze"} />
        <div className="flex mt-3 flex-row justify-start items-center">
          <ListMenu selected={selected} setSelected={setSelected} jobs={jobs} />
          <CustomButton
            btnText={"Analyze"}
            onClick={() => alert("You pressed Analyze!")}
          />
        </div>
        <strong className="font-inter font-semibold text-gray-800">
          {data}
        </strong>
        <div className="flex flex-col mt-10">
          <DescriptionText
            descrText={`Analysis Results for ${selected?.name.toUpperCase()} Job`}
          />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
