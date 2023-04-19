import React from "react";
import {
  IoBagHandle,
  IoFileTrayFullOutline,
  IoAnalyticsOutline,
  IoReceiptOutline,
} from "react-icons/io5";

const DashboardStats = () => {
  return (
    <div className="w-full pr-6">
      <div className=" justify-between gap-x-8 px-10 pt-8 md:flex ">
        <div className=" bg-white rounded-sm p-4 border border-gray-300 flex items-center justify-start pr-12 shadow-2xl">
          <div className="w-15 h-15 p-3 rounded-full flex items-center justify-center bg-green-400">
            <IoFileTrayFullOutline
              size={35}
              className="text-white text-center"
            />
          </div>
          <div className="font-inter font-medium text-xl mx-5 justify-center items-center">
            <h2 className=" text-left ">Total CV Scans</h2>
            <h4 className=" text-center text-gray-500 mt-4">50</h4>
          </div>
        </div>
        <div className=" bg-white rounded-sm p-4 border border-gray-300 flex items-center justify-start pr-12 shadow-2xl mt-3 md:mt-0">
          <div className="w-15 h-15 p-3 rounded-full flex items-center justify-center bg-sky-400">
            <IoBagHandle size={35} className="text-white text-center" />
          </div>
          <div className="font-inter font-medium text-xl mx-5 justify-center items-center">
            <h2 className=" text-left ">Total Jobs Created</h2>
            <h4 className=" text-center text-gray-500 mt-4">100</h4>
          </div>
        </div>
        <div className=" bg-white rounded-sm p-4 border border-gray-300 flex items-center justify-start pr-12 shadow-2xl mt-3 md:mt-0">
          <div className="w-15 h-15 p-3 rounded-full flex items-center justify-center bg-yellow-400">
            <IoReceiptOutline size={35} className="text-white text-center" />
          </div>
          <div className=" text-xl mx-5 justify-center items-center">
            <h2 className=" text-left font-inter font-medium">
              Total Report Prints
            </h2>
            <h4 className=" text-center text-gray-500 mt-4">50</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-8 px-12 pt-10">
        <div className=" bg-white rounded-sm p-4 border border-gray-300 flex items-center justify-start pr-12 shadow-2xl">
          <div className="w-15 h-15 p-4 rounded-full flex items-center justify-center bg-red-400">
            <IoAnalyticsOutline size={35} className="text-white text-center" />
          </div>
          <div className="font-inter font-medium text-xl mx-5 justify-center items-center">
            <h2 className=" text-left ">Total Analysis'</h2>
            <h4 className=" text-center text-gray-500 mt-4">50</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
