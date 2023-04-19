import React from "react";
import { dayOfWeekMap, monthsMap } from "../constants/constants";

const SubHeader = ({ headerTitle }) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const dateOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className="flex w-full bg-white px-10 items-center justify-between">
      <div className="justify-center items-center">
        <h2 className="font-inter text-lg font-bold text-center items-center">
          {headerTitle}
        </h2>
      </div>
      <div className="px-7">
        <h2 className=" font-bold">
          {dayOfWeekMap[dayOfWeek]}, {monthsMap[month]} {dateOfMonth}, {year}{" "}
          {"  "}
        </h2>
      </div>
    </div>
  );
};

export default SubHeader;
