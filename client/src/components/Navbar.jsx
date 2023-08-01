import React, { useState } from "react";
import logo from "../assets/Screenshot_2023-07-27_at_17.11.04-removebg-preview.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dressesFetch } from "../stores/actions/actionCreator";
import { CATS_LOADING } from "../stores/actions/actionType";

function NavbarPage() {
  const { pathname } = useLocation();
  console.log(pathname), "<pn";
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(dressesFetch({ name: searchQuery }));
    setSearchQuery("");

    // Optionally, you can toggleCollapse() here if you want to automatically collapse the search bar after search
  };

  const logoClick = () => {
    // e.preventDefault()
    dispatch(dressesFetch());
    navigate("/");
  };

  return (
    <>
      <div className=" w-full top-0 z-30 flex items-center justify-between bg-[#DDD9CE] p-1 ">
        <div style={{ width: "60px", height: "50px", marginBottom: "10px" }}>
          <img onClick={logoClick} src={logo} />
        </div>

        {pathname === "/" && (
          <div className="bg-[#DDD9CE] flex justify-end ">
            {isCollapsed ? (
              <div className="relative mx-auto w-96">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="border  border-[#050505]  w-full py-2 pl-4 pr-12 text-[#050505] placeholder-[#DDD9CE]-50 focus:outline-none focus:ring-1 "
                  placeholder="Search"
                  style={{ background: "#DDD9CE", borderRadius: "4px" }}
                />
                <button
                  onClick={handleSearchSubmit}
                  className="absolute right-0 top-0 mt-2 mr-2 focus:outline-none bg-[#DDD9CE9]"
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

            {/*favourite */}
            <NavLink to={"/favorite"}>
              <button className="mx-2 mt-2 flex">
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
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default NavbarPage;
