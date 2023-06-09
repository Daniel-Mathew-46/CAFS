import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  Analysis,
  CreateJob,
  Dashboard,
  Report,
  AdminCreateUser,
  AdminManagerUsers,
} from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/create-job", element: <CreateJob /> },
  { path: "/analysis", element: <Analysis /> },
  { path: "/reports", element: <Report /> },
  { path: "/admin/", element: <AdminManagerUsers /> },
  { path: "/admin/createuser", element: <AdminCreateUser /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
