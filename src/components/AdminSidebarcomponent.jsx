import React, { useState } from "react";

import {
  FaChartLine,
  FaFileImport,
  FaChartPie,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
useState;
const AdminSidebarcomponent = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);
  const menus = [
    {
      title: "Manage Users",
      icon: <FaChartLine color="#ffffff" size={20} />,
      path: "/Admin/",
    },
    { title: "Create User", icon: <FaFileImport />, path: "/admin/createuser" },
  ];
  return (
    <div
      className={`${
        open ? "w-60" : "w-20"
      } duration-300 h-screen p-5 pt-8 bg-dark-purple relative w-20`}
      // onMouseOver={() => !open && setOpen(true)}
    >
      {/* <FaAngleLeft
          size={20}
          color="#ffffff"
          className={`absolute rounded-full cursor-pointer -right-2 top-6 w-7 border-2 border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        /> */}
      <div className="flex items-center gap-x-4">
        <h1
          className={`font-inter text-white origin-left font-bold text-2xl duration-300`}
        >
          CAFS ADMIN
        </h1>
      </div>
      <ul className="pt-8">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-light-white ${
              pathname === menu.path ? "bg-light-white" : ""
            }`}
          >
            <Link
              to={menu.path}
              className="flex gap-x-4 items-center"
              //   onClick={() => setOpen(false)}
            >
              {menu.icon}
              <span
                className={`${
                  !open && "hidden"
                } font-inter origin-left duration-200`}
              >
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex p-3 absolute bottom-0 mb-3 font-inter border-neutral-700">
        <Link
          className="flex gap-x-4 items-center"
          onClick={() => confirm("Umetoka!")}
        >
          {<FaSignOutAlt color="#ffffff" size={20} />}
          <span
            className={`${
              !open && "hidden"
            } font-inter origin-left duration-200 text-white `}
          >
            Sign Out
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebarcomponent;
