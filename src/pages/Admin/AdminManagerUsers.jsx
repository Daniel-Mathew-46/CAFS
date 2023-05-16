import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import AdminSidebarcomponent from "../../components/AdminSidebarcomponent";
import axios from "axios";
import SubmitButton from "../../components/SubmitButton";

const AdminManagerUsers = () => {
  const adminId = 1;
  const fData = new FormData();
  let [isAddOrEditOpen, setIsAddOrEditOpen] = useState(false);
  let [isViewModalOpen, setIsViewModalOpen] = useState(false);
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToShow, setUserToShow] = useState({});
  const [users, setUsers] = useState([]);

  function getUsers() {
    fData.append("adminId", adminId);
    axios
      .post("http://localhost/CAFS/GetUsers.php", fData)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setUsers(error);
      });
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  console.log(users);

  function openViewModal(id) {
    let usertoShow = users.filter((user, index) => user.id === id);
    setUserToShow(usertoShow[0]);
    setIsViewModalOpen(true);
  }
  function closeViewModal() {
    setIsViewModalOpen(false);
  }

  function openAddOrEditModal(id) {
    let usertoShow = {};
    if (id !== null) {
      usertoShow = users.filter((user, index) => user.id === id);
      setUserToShow(usertoShow[0]);
    } else {
      setUserToShow(usertoShow);
    }
    setIsAddOrEditOpen(true);
  }

  function closeAddOrCreateModal() {
    setIsAddOrEditOpen(false);
  }

  function openDeleteModal(id) {
    let usertoShow = {};
    if (id !== null) {
      usertoShow = users.filter((user, index) => user.id === id);
      setUserToShow(usertoShow[0]);
    } else {
      setUserToShow(usertoShow);
    }
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
    setUserToShow({});
  }

  const Modal = ({ data, title, isOpen, closeModal }) => {
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
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Information for {data?.username}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div>
                      <h2 className="text-lg text-black font-bold">
                        Full Name
                      </h2>
                      <p className="text-sm text-gray-500">{data?.fullname}</p>
                    </div>
                    <div className="mt-2">
                      <h2 className="text-lg text-black font-bold">Username</h2>
                      <p className="text-sm text-gray-500">{data?.username}</p>
                    </div>
                    <div className="mt-2">
                      <h2 className="text-lg text-black font-bold">Email</h2>
                      <p className="text-sm text-gray-500">{data?.email}</p>
                    </div>
                    <div className="mt-2">
                      <h2 className="text-lg text-black font-bold">Phone</h2>
                      <p className="text-sm text-gray-500">{data?.phone}</p>
                    </div>
                    <div className="mt-2">
                      <h2 className="text-lg text-black font-bold">
                        Organization
                      </h2>
                      <p className="text-sm text-gray-500">
                        {data?.organization}
                      </p>
                    </div>
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

  const AddOrCreateModal = ({ data, title, isOpen, closeModal }) => {
    var id_ = data?.id || "";
    var fullname = data?.fullname || "";
    var username = data?.username || "";
    var email_ = data?.email || "";
    var phone_ = data?.phone || "";
    var organization_ = data?.username || "";
    var password_ = data?.password || "";
    const [id, setId] = useState(id_);
    const [fullName, setFullName] = useState(fullname);
    const [userName, setUserName] = useState(username);
    const [email, setEmail] = useState(email_);
    const [phone, setPhone] = useState(phone_);
    const [organization, setOrganization] = useState(organization_);
    const [password, setPassword] = useState(password_);
    const [confPassword, setConfPassword] = useState(password_);
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState("");

    const handleOnSubmit = (e) => {
      e.preventDefault();
      const url = "http://localhost/CAFS/Manage.php";
      fData.append("id", id);
      fData.append("fullname", fullName);
      fData.append("username", userName);
      fData.append("email", email);
      fData.append("phone", phone);
      fData.append("organization", organization);
      fData.append("password", password);
      fData.append("adminId", adminId);
      fData.append("action", "update");
      axios
        .post(url, fData)
        .then((response) => {
          setResponseData(response.data);
          setFullName("");
          setUserName("");
          setEmail("");
          setPhone("");
          setOrganization("");
          setPassword("");
          setConfPassword("");
          const onSuccess = () => {
            closeAddOrCreateModal();
            //Call the getUsers function;
            getUsers();
          };
          setIsLoading(false);
          setTimeout(onSuccess, 3000);
        })
        .catch((error) => {
          setIsLoading(false);
          setResponseData(error);
        });
    };

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
            <div className="fixed inset-0 bg-black bg-opacity-30" />
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
                    {title}
                  </Dialog.Title>
                  <form className="mt-4">
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
                    {responseData && (
                      <div className="mt-2">
                        <p className="text-sm text-green-600">{responseData}</p>
                      </div>
                    )}
                    <SubmitButton
                      isLoading={isLoading}
                      text={"Update"}
                      handleOnSubmit={handleOnSubmit}
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  //Delete Modal
  const DeleteModal = ({ data, isOpen, closeModal }) => {
    const [responseData, setResponseData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const url = "http://localhost/CAFS/Manage.php";
    const id = data.id;
    let deleteFormData = new FormData();
    deleteFormData.append("adminId", adminId);
    deleteFormData.append("id", id);
    deleteFormData.append("action", "delete");
    function onConfirmDelete() {
      axios
        .post(url, deleteFormData)
        .then((response) => {
          setResponseData(response.data);
          const onSuccess = () => {
            closeDeleteModal();
            //Call the getUsers function;
            getUsers();
          };

          setIsLoading(false);
          setTimeout(onSuccess, 3000);
        })
        .catch((error) => {
          setIsLoading(false);
          setResponseData(error);
        });
    }
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
                    <p className="text-sm text-center text-gray-500">
                      Are you sure to delete user{" "}
                      <span className="font-bold text-sm text-gray-500">
                        {data?.fullname}
                      </span>
                      ?
                    </p>
                  </div>

                  {responseData && (
                    <div className="mt-2">
                      <p className="text-sm text-green-600">{responseData}</p>
                    </div>
                  )}
                  <div className="mt-4 flex flex-row">
                    <button
                      disabled={isLoading}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={isLoading}
                      type="button"
                      className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onConfirmDelete}
                    >
                      {isLoading && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="text-center w-4 h-4 mr-3 text-white animate-spin"
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
                      Delete
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
    <>
      <div className="flex flex-row">
        <div>
          <AdminSidebarcomponent />
        </div>
        <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
          <h1 className="text-3xl font-bold font-inter">MANAGE USERS</h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-dark-purple">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          #
                        </th>
                        {/* <th
                          scope="col"
                          className="text-sm font-lg text-white px-6 py-4 font-inter"
                        >
                          Name
                        </th> */}
                        <th
                          scope="col"
                          className="text-sm font-lg text-white px-6 py-4 font-inter"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-lg text-white px-6 py-4 font-inter"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-lg text-white px-6 py-4 font-inter"
                        >
                          Phone
                        </th>
                        {/* <th
                          scope="col"
                          className="text-sm font-lg text-white px-6 py-4 font-inter"
                        >
                          Organization
                        </th> */}
                        <th
                          scope="col"
                          className="text-sm font-lg text-white px-6 py-4 font-inter"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-black border-b-2">
                      {users.map((data, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b-2 border-black font-inter"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-inter">
                            {index + 1}
                          </td>
                          {/* <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap font-inter">
                            {data.fullname}
                          </td> */}
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap font-inter">
                            {data.username}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap font-inter">
                            {data.email}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap font-inter">
                            {data.phone}
                          </td>
                          {/* <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap font-inter">
                            {data.organization}
                          </td> */}
                          <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                            <Link
                              onClick={() => openViewModal(data.id)}
                              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-inter"
                            >
                              View
                            </Link>
                            <Link
                              onClick={() => openAddOrEditModal(data.id)}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-inter"
                            >
                              Edit
                            </Link>
                            <Link
                              onClick={() => openDeleteModal(data.id)}
                              to={"#"}
                              className="bg-red-600 text-white px-6 py-2 rounded-lg font-inter"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isViewModalOpen && (
        <Modal
          data={userToShow}
          isOpen={isViewModalOpen}
          title={"User's Information"}
          closeModal={closeViewModal}
        />
      )}
      {isAddOrEditOpen && (
        <AddOrCreateModal
          data={userToShow}
          isOpen={isAddOrEditOpen}
          title={"Add or Edit User"}
          closeModal={closeAddOrCreateModal}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          data={userToShow}
          isOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
        />
      )}
    </>
  );
};

export default AdminManagerUsers;

{
  /* <button
                      disabled={isLoading}
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={(e) => handleOnSubmit(e)}
                    >
                      {isLoading && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="text-center w-4 h-4 mr-3 text-white animate-spin"
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
                      {!isLoading && "Update"}
                    </button> */
}
