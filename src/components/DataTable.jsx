import React from "react";
import { FaFilePdf } from "react-icons/fa";

const DataTable = () => {
  const data = [
    {
      id: 1,
      "Candidate Name": "Bright Augustino",
      Email: "bightaugustino@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "70%",
    },
    {
      id: 2,
      "Candidate Name": "Daniel Mathew",
      Email: "dannymatty@gmaill.com",
      Phone: "0548858949",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "60%",
    },
    {
      id: 3,
      "Candidate Name": "Innocent Masuki",
      Email: "InnoMasuki@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "59%",
    },
    {
      id: 4,
      "Candidate Name": "Zaidu Nyoni",
      Email: "zaidunyoni@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "57.5%",
    },
    {
      id: 5,
      "Candidate Name": "Hassan Juma",
      Email: "jumahassan@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "55%",
    },
    {
      id: 6,
      "Candidate Name": "Giddey Rompson",
      Email: "rompsongiddey@gmaill.com",
      Phone: "0548878485",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "52%",
    },
    {
      id: 7,
      "Candidate Name": "Aisha Ramadhan",
      Email: "ramadhanaisha@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "51%",
    },
    {
      id: 8,
      "Candidate Name": "Muko Likanga",
      Email: "likangaMuko@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "50%",
    },
    {
      id: 9,
      "Candidate Name": "Jone Doe",
      Email: "johndoe@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "48%",
    },
    {
      id: 10,
      "Candidate Name": "Diana Anne",
      Email: "dianaanne@gmaill.com",
      Phone: "0548874940",
      Resume: <FaFilePdf size={20} className=" text-sky-800" />,
      Rank: "47%",
    },
    // {
    //     id: 1,
    //     "Candidate Name": "Bright Augustino",
    //     Email: "bightaugustino@gmaill.com",
    //     Phone: "0548874940",
    //     Resume: <FaFilePdf size={20} color="black"/>,
    //     Rank: "70%"
    // },
    // {
    //     id: 1,
    //     "Candidate Name": "Bright Augustino",
    //     Email: "bightaugustino@gmaill.com",
    //     Phone: "0548874940",
    //     Resume: <FaFilePdf size={20} color="black"/>,
    //     Rank: "70%"
    // },
  ];
  return (
    <div className="bg-white mt-5 px-12 pb-3 rounded-sm border-gray-200 flex-1">
      <table className="w-[65rem] table-auto border-collapse border-transparent border-spacing-10 border-slate-500">
        <thead>
          <tr className="font-inter text-gray-500 font-semibold">
            <td>No</td>
            <td>Candidate Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Resume</td>
            <td>Rank</td>
          </tr>
        </thead>
        <tbody className="mt-3">
          {data.map((item, index) => (
            <tr
              key={`Cand-${index + 1}`}
              className={`py-12 font-inter rounded-sm content-center ${
                index % 2 == 0 ? "bg-slate-500" : ""
              } `}
            >
              <td>{index + 1}</td>
              <td>{item["Candidate Name"]}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td className=" self-center">
                <a href="#">{item.Resume}</a>
              </td>
              <td>{item.Rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
