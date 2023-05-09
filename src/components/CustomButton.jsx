import React from "react";

const CustomButton = ({ btnText, onClick }) => {
  return (
    <div className="relative px-7 ml-5 mt-4">
      <button
        className=" bg-blue-800 px-3 py-2 justify-center items-center rounded-md hidden md:block"
        onClick={onClick}
      >
        <h2 className="text-white font-bold">{btnText}</h2>
      </button>
    </div>
  );
};

export default CustomButton;
