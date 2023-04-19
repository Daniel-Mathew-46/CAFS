import { useState } from "react";
import { CreateJob, Dashboard, Login } from "./pages";
// import Dashboard from "../pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Dashboard" },
    { title: "Create Job" },
    { title: "Analysis" },
    { title: "Reports" },
  ];
  return (
    <div className="container">
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <CreateJob />
    </div>
  );
}

export default App;
