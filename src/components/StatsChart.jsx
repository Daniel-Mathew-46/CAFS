import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Jan",
    Jobs: 0,
    CVs: 0,
    Reports: 0,
  },
  {
    name: "Feb",
    Jobs: 0,
    CVs: 0,
    Reports: 0,
  },
  {
    name: "Mar",
    Jobs: 16,
    CVs: 100,
    Reports: 5,
  },
  {
    name: "Apr",
    Jobs: 10,
    CVs: 90,
    Reports: 20,
  },
  {
    name: "May",
    Jobs: 5,
    CVs: 60,
    Reports: 5,
  },
  {
    name: "Jun",
    Jobs: 9,
    CVs: 55,
    Reports: 2,
  },
  {
    name: "Jul",
    Jobs: 0,
    CVs: 0,
    Reports: 0,
  },
  {
    name: "Aug",
    Jobs: 0,
    CVs: 0,
    Reports: 0,
  },
  {
    name: "Sept",
    Jobs: 0,
    CVs: 0,
    Reports: 0,
  },
  {
    name: "Oct",
    Jobs: 0,
    CVs: 0,
    Reports: 0,
  },
];
const StatsChart = () => {
  return (
    <div className="h-[22rem] bg-white mt-3 p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="font-inter font-semibold text-gray-700">
        Statistics
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray={"3 3 0 0"} vertical={false} />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"Jobs"} fill="#0ea5e9" />
            <Bar dataKey={"CVs"} fill="#ea580c" />
            <Bar dataKey={"Reports"} fill="#E75858" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsChart;
