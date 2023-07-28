import React, { useState } from "react";
import logo from "../assets/Screenshot_2023-07-27_at_17.11.04-removebg-preview.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  //untuk search bar

  const [isCollapsed, setCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement your search logic here, e.g., perform an API call to fetch search results
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    // Optionally, you can toggleCollapse() here if you want to automatically collapse the search bar after search
  };

  return (
    <>
      <div className="sticky w-full top-0 z-30 flex items-center justify-between bg-white p-1 border-b ">
        <NavLink to={"/"}>
          <div style={{ width: "60px", height: "50px", marginBottom: "10px" }}>
            <img src={logo} />
          </div>
        </NavLink>

        {/* search bar */}
        <div className="bg-white flex justify-end ">
          {isCollapsed ? (
            <div className="relative mx-auto w-96 ">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-400 w-full py-2 pl-4 pr-12 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1"
                placeholder="Search"
              />
              <button
                onClick={handleSearchSubmit}
                className="absolute right-0 top-0 mt-2 mr-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                onClick={toggleCollapse}
                className="absolute right-0 top-0 mt-2 mr-12 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button onClick={toggleCollapse}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          )}

          {/* cart and favourite */}

          <button className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
          <button className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          <button className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </button>
          {/* cart and favourite */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
