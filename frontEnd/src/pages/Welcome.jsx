import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-bg text-white">
      <h1 className="text-4xl font-bold text-gradient-v1 mb-6">Welcome to Shortify</h1>
      <p className="text-lg mb-6">Shorten your long links easily and efficiently.</p>
      <div className="flex space-x-4">
        <NavLink to="/login">
          <button className="bg-[#144EE3] py-3 px-6 text-white rounded-full hover:shadow-blue">
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-[#144EE3] py-3 px-6 text-white rounded-full hover:shadow-blue">
            Signup
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;