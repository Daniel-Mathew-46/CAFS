import React from "react";

const DescriptionText = ({ descrText }) => {
  return (
    <div className="px-10 mt-5">
      <strong className="font-inter font-semibold text-gray-800">
        {descrText}
      </strong>
    </div>
  );
};

export default DescriptionText;
