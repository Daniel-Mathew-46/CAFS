import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;
const COLORS = ["#00C49F", "#0ea5e9", "#FF8042", "#E75858"];
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline={"central"}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const JobCategCharts = () => {
  const data = [
    { name: "IT Related", value: 520 },
    { name: "Finace", value: 607 },
    { name: "Accounting", value: 257 },
    { name: "Coaching", value: 112 },
  ];
  return (
    <div className=" w-[17rem] h-[22rem] bg-white mt-3 p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="font-inter font-semibold text-gray-700">
        Job Categories
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx={"50%"}
              cy={"45%"}
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey={"value"}
            >
              {data.map((_, index) => (
                <Cell
                  key={`Cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default JobCategCharts;
