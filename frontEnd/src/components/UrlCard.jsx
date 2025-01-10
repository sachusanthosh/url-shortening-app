import React from "react";
import Cards from "./Cards";
import Pagination from "@mui/material/Pagination";

const UrlCard = () => {
  return (
    <div className="cards-container bg-custom-bg-alt text-white w-[70rem] rounded-md shadow-md">
      <div className="header flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">
          Your Links <i className="fa-solid fa-link text-gradient-v1"></i>
        </h1>
        <div className="search flex items-center border border-gray-600 rounded-full px-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none p-1 text-sm"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="cards p-4 flex justify-around">
        <Cards />
        <Cards />
      </div>
      <div className="pagination py-3 flex justify-center">
        <Pagination sx={{
      "& .MuiPaginationItem-root": {
        color: "white", // Text color for pagination items
      },
      "& .Mui-selected": {
        color: "white", // Text color for the selected item
        backgroundColor: "#3b82f6", // Example: Tailwind `bg-blue-500`
      },
    }} count={10} variant="filled" color="primary" shape="rounded" />
      </div>
    </div>
  );
};

export default UrlCard;
