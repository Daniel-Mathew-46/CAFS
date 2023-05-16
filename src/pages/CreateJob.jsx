import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import SidebarComponent from "../components/SidebarComponent";
import { FaFolder } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
// import ApiManager from "../constants/ApiManager";
import axios from "axios";
import ResponseModal from "../components/ResponseModal";
import SubmitButton from "../components/SubmitButton";

function CreateJob() {
  const [jobtitle, setjobtitle] = useState("");
  const [jobrequirements, setjobrequirements] = useState("");
  const [cvFiles, setCVFiles] = useState([]);
  const [cvCount, setCVCount] = useState([]);
  const [responseData, setResponseData] = useState("");
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeFileInput = (e) => {
    // using setCVFiles to set the files in the cvFiles state variable
    let files = e.target.files;
    setCVCount(files.length);
    setCVFiles([...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobtitle.length === 0) {
      alert("jobtitle has left Blank!");
    } else if (jobrequirements.length === 0) {
      alert("jobtrequirements has left Blank!");
    } else {
      const url = "http://localhost/CAFS/CreateJob.php";
      let fData = new FormData();
      let selectedFiles = [...cvFiles];
      let acceptableFilesType = [
        "png",
        "jpg",
        "jpeg",
        "pdf",
        "msword",
        "vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      // get the name of the files and push them to the files array
      for (let file of selectedFiles) {
        let fileType = file.type.split("/")[1];
        if (!acceptableFilesType.includes(fileType)) {
          alert(`File ${file.name.split(".")[0]} is not acceptable. Check it!`);
          return;
        }
        // console.log(file);
        // files.push({ name: file.name, file });
        fData.append("files[]", file);
      }
      fData.append("jobtitle", jobtitle);
      fData.append("jobrequirements", jobrequirements);
      setIsLoading(true);
      axios
        .post(url, fData)
        .then((response) => {
          setResponseData(response.data);
          setisModalOpen(true);
          setjobtitle("");
          setjobrequirements("");
          setCVFiles([]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setResponseData(error);
        });
    }
  };

  function closeResponseModal() {
    setisModalOpen(false);
    setResponseData("");
  }

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
                  value={jobtitle}
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
                  value={jobrequirements}
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
                        <span className="block">
                          {cvFiles.length > 0
                            ? `Selected ${cvCount} Cvs.`
                            : "Upload CVs"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center justify-center">
              {/* <CustomButton btnText={"Save"} onClick={(e) => handleSubmit(e)} /> */}
              <SubmitButton
                isLoading={isLoading}
                text={"Save"}
                handleOnSubmit={handleSubmit}
              />
            </div>
          </form>
        </div>
        {responseData && (
          <ResponseModal
            title={responseData}
            isOpen={isModalOpen}
            closeModal={closeResponseModal}
          />
        )}
      </div>
    </div>
  );
}

export default CreateJob;
