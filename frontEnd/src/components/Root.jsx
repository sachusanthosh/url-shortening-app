import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;