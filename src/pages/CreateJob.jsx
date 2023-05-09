import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { FaFolder } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import SideBarComponent from "../components/SidebarComponent";
// import ApiManager from "../constants/ApiManager";
import axios from "axios";
import SidebarComponent from "../components/SidebarComponent";
function CreateJob() {
  const [jobtitle, setjobtitle] = useState("");
  const [jobrequirements, setjobrequirements] = useState("");
  const [cvFiles, setCVFiles] = useState([]);

  const changeFileInput = (e) => {
    // using setCVFiles to set the files in the cvFiles state variable
    let files = e.target.files;
    setCVFiles([...files]);
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobtitle.length === 0) {
      alert("jobtitle has left Blank!");
    } else if (jobrequirements.length === 0) {
      alert("jobtrequirements has left Blank!");
    } else {
      const url = "http://localhost/CAFS/sendData.php";

      let uploadedFiles = [...cvFiles];
      let files = [];
      // get the name of the files and push them to the files array
      // users can also get files content, convert it to blob format and send it to the backend
      for (let file of uploadedFiles) {
         files.push({ name: file.name });
      }
      let fData = new FormData();
      console.log(files)
      fData.append("jobtitle", jobtitle);
      fData.append("jobrequirements", jobrequirements);
      fData.append("cvfiles", JSON.stringify({files: files}));
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <SidebarComponent />
      <div className="flex-1 overflow-y-scroll md:overflow-hidden">
        <Header headerTitle={"Create Job"} />
        <SubHeader headerTitle={"Create New Job"} />
        <div className="w-full px-10 mt-6 ">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="jobtitle"
                className="block text-lg font-inter font-medium text-gray-900"
              >
                Job Title
              </label>
              <div className="mt-1">
                <input
                  id="jobtitle"
                  name="jobtitle"
                  type="text"
                  required
                  className="w-[20rem] border-2 rounded-lg border-gray-300 px-3 py-2 md:w-[30rem]"
                  onChange={(e) => setjobtitle(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="jobtrequirements"
                className="block text-lg font-inter font-medium text-gray-900"
              >
                Job Requirements
              </label>
              <div className="mt-1 flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
                <textarea
                  id="jobtrequirements"
                  name="jobtrequirements"
                  type="textarea"
                  aria-multiline={true}
                  required
                  className="w-[20rem] h-[10rem] border-2 rounded-lg border-gray-300 px-3 py-2 md:w-[30rem]"
                  onChange={(e) => setjobrequirements(e.target.value)}
                />
                <div className="w-[10rem] h-[10rem] bg-gray-200 rounded-lg mx-auto px-12 border-2 border-gray-300">
                  <div className="w-full h-full items-center justify-center rounded-lg border-dotted">
                    {/* <div
                      aria-hidden="true"
                      className="absolute rounded-xl bg-white bg-opacity-80 backdrop-blur-xl group-hover:bg-opacity-60 group-hover:scale-110 transition duration-300"
                    ></div> */}
                    <input
                      type="file"
                      name="cvs"
                      id="cvs"
                      className="absolute self-center w-[9rem] h-[9rem] opacity-0 z-10 cursor-pointer"
                      multiple
                      onChange={(e) => changeFileInput(e)}
                    />

                    <div className="items-center justify-center mt-7">
                      <FaFolder size={60} className=" text-gray-700" />
                      <p className=" font-inter text-center text-gray-700 text-sm">
                        <span className="block">Upload CVs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center justify-center">
              <CustomButton btnText={"Save"} onClick={(e) => handleSubmit(e)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
