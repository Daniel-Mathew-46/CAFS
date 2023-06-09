import React, { useEffect, useState } from "react";
import ReactToPrint from "react-to-print";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import DescriptionText from "../components/DescriptionText";
import ListMenu from "../components/ListMenu";
import CustomButton from "../components/CustomButton";
import DataTable from "../components/DataTable";
import SidebarComponent from "../components/SidebarComponent";
import axios from "axios";


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
  const [data, setData] = useState(null);
  const url = "http://localhost/CAFS/Reports.php";
  let fData = new FormData();
  fData.append("hrId", 1);

  useEffect(() => {
    axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((error) => alert(error));
  }, [])
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <SidebarComponent />
      <div className="flex-1 overflow-scroll">
        <Header headerTitle={"Report"} showButton={true} />
        <SubHeader headerTitle={"Report".toUpperCase()} />
        <DescriptionText descrText={"Select a job to print report"} />
        <div className="flex mt-3 flex-row justify-start items-center">
          <ListMenu selected={selected} setSelected={setSelected} jobs={jobs} />
        </div><strong className="font-inter font-semibold text-gray-800">
        {data}
      </strong>
        <div className="flex flex-col mt-10">
          <DescriptionText
            descrText={`Reports for ${selected?.name.toUpperCase()} Job`}
          />
          <DataTable />
        </div>
        <div className="items-center justify-center w-full">
          <CustomButton btnText={"Print"} onClick={() => alert("Printing!")} />
        </div>
      </div>
    </div>
  );
};

export default Report;
