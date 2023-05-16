import React from "react";
import { Link } from "react-router-dom";

const Header = ({ headerTitle, showButton }) => {
  return (
    <div className="flex w-full bg-white px-10 py-7 items-center justify-between">
      <div className="w-80 mx-auto justify-center items-center">
        <h1 className="font-inter text-4xl font-bold text-center items-center">
          {headerTitle}
        </h1>
      </div>
      <div className="px-7">
        {showButton && (
          <Link
            className="bg-black px-3 py-2 justify-center items-center rounded-md hidden md:block"
            to={"/create-job"}
          >
            <h2 className="text-white font-bold">Create Job</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
