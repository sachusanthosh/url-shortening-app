import React from "react";

const Cards = () => {
  return (
    <div className="link-card bg-custom-bg text-white w-[32rem] rounded-xl shadow-md p-3">
      <div className="head flex justify-between items-center">
        <div className="title text-md font-semibold">Title</div>
        <i className="fa-solid fa-trash text-[#353C4A] cursor-pointer transform transition duration-200 active:scale-90"></i>
      </div>
      <hr className="border-[#353C4A] border-t my-3" />

      <div className="short-link">
        <h1 className="font-bold">short link</h1>
        <div className="short-link-display">
          <input
            type="text"
            className="bg-transparent border-none outline-none text-[#a1a5ac] text-sm px-2"
            placeholder=""
            value={"https://shortify.com/short-link"}
            readOnly
          />
            <button className=" font-semibold text-white px-6 py-2 rounded-full text-sm transform transition duration-200 active:scale-90">
                <i className="fa-regular fa-copy"></i>
            </button>
        </div>
      </div>
      <div className="original-link">
      <h1 className="font-bold">original link</h1>
        <div className="original-link-display">
          <input
            type="text"
            className="bg-transparent border-none outline-none text-[#a1a5ac] text-sm px-2"
            placeholder=""
            value={"https://shortify.com/original-link"}
            readOnly
          />
            <button className=" font-semibold text-white px-6 py-2 rounded-full text-sm transform transition duration-200 active:scale-90">
                <i className="fa-regular fa-copy"></i>
            </button>
        </div>
      </div>
      <hr className="border-[#353C4A] border-t my-3" />
      <div className="date font-bold text-xs float-right">04 / 11 / 2002</div>
    </div>
  );
};

export default Cards;
