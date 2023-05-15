import React, { Fragment, useState } from "react";
import AdminSidebarcomponent from "../../components/AdminSidebarcomponent";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";

const AdminCreateUser = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [responseData, setResponseData] = useState("");
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Validations come here....

    const url = "http://localhost/CAFS/CreateUser.php";
    const adminId = 1;
    let fData = new FormData();
    fData.append("fullname", fullName);
    fData.append("username", userName);
    fData.append("email", email);
    fData.append("phone", phone);
    fData.append("email", email);
    fData.append("organization", organization);
    fData.append("password", password);
    fData.append("adminId", adminId);
    console.log({
      fullName,
      email,
      phone,
      userName,
      adminId,
    });
    setIsLoading(true);
    axios
      .post(url, fData)
      .then((response) => {
        setResponseData(response.data);
        setisModalOpen(true);
        setFullName("");
        setUserName("");
        setEmail("");
        setPhone("");
        setOrganization("");
        setPassword("");
        setConfPassword("");
        const onSuccess = () => {
          setisModalOpen(false);
        };
        setIsLoading(false);
        setTimeout(onSuccess, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setResponseData(error);
      });
  };

  function closeResponseModal() {
    setisModalOpen(false);
    setResponseData("");
  }

  const Modal = ({ title, isOpen, closeModal }) => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Message
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-center text-gray-500">{title}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };
  return (
    <div className="flex flex-row">
      <div>
        <AdminSidebarcomponent />
      </div>
      <div className="w-screen h-full flex flex-col justify-center items-start mt-16 px-10">
        <h2 className="text-2xl font-bold">ADD USER</h2>
        <div className="border px-6 my-3 rounded-lg">
          <form className="mt-4 w-[25rem]">
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={fullName}
                type="text"
                name="floating_fullname"
                id="floating_fullname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setFullName(e.target.value)}
              />
              <label
                htmlFor="floating_fullname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={userName}
                type="text"
                name="floating_username"
                id="floating_username"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={email}
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={phone}
                type="text"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={organization}
                type="text"
                name="floating_organization"
                id="floating_organization"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setOrganization(e.target.value)}
              />
              <label
                htmlFor="floating_organization"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Organization
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={password}
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={confPassword}
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => handleOnSubmit(e)}
            >
              {isLoading && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              {!isLoading && "Create"}
            </button>
          </form>
        </div>
        {isModalOpen && (
          <Modal
            title={responseData}
            isOpen={isModalOpen}
            closeModal={closeResponseModal}
          />
        )}
      </div>
    </div>
  );
};

export default AdminCreateUser;
