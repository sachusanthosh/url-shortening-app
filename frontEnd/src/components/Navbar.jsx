import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import { useFirebase } from "../firebase/firebase";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const firebase = useFirebase();
  const user = firebase.user;
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await firebase.logoutUser();
    handleClose();
    navigate("/"); // Redirect to welcome page after logout
  };

  return (
    <div className="nav-container bg-custom-bg fixed flex justify-between items-center w-full px-6 py-4 text-white">
      <div className="nav-logo flex items-center space-x-2 font-bold">
        <Link to="/">
          <span className="text-gradient-v1 font-bold text-2xl">Shortify</span>
        </Link>
      </div>

      <div className="nav-links">
        <ul className="flex space-x-6">
          {!user ? (
            <>
              <li>
                <NavLink to="/login" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>
                  <button className="login_btn bg-custom-bg-alt py-3 px-4 text-white border border-[#353C4A] rounded-full transform transition duration-200 active:scale-90 hover:shadow-white">
                    <span className="px-1 custom-font">Login</span>
                    <i className="fa-solid fa-right-to-bracket px-1 text-[#C9CED6]"></i>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>
                  <button className="signup_btn bg-[#144EE3] py-3 px-4 text-white rounded-full transform transition duration-200 active:scale-90 hover:shadow-blue">
                    <span className="px-2 custom-font">Register Now</span>
                  </button>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </IconButton>
                </Tooltip>
                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ "aria-labelledby": "basic-button" }}>
                  <MenuItem onClick={handleClose}>
                    <span className="px-2">User profile</span>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                    <span className="px-2">Logout</span>
                  </MenuItem>
                </Menu>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;