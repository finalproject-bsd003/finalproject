import React, { useState } from "react";
import logo from "../assets/Screenshot_2023-07-27_at_17.11.04-removebg-preview.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dressesFetch } from "../stores/actions/actionCreator";

import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const appId = "7aa4dc07-dc99-4bc5-b13f-32356aee776c";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
// ----- MENUBAR ---- //
import { useEffect } from "react";
import store from "../stores";
import { categoryFetch, storesFetch } from "../stores/actions/actionCreator";

function Navbar() {
  //untuk search bar
  const { pathname } = useLocation();
  const [isCollapsed, setCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSearchSubmit = () => {
    // Implement your search logic here, e.g., perform an API call to fetch search results
    console.log("Searching for:", searchQuery);
    dispatch(dressesFetch({ name: searchQuery }));
    setSearchQuery("");

    // Optionally, you can toggleCollapse() here if you want to automatically collapse the search bar after search
  };

  // dropdown profile
  const [activeLabel, setActiveLabel] = useState(null);
  const navigate = useNavigate();

  const logoClick = () => {
    // e.preventDefault()
    dispatch(dressesFetch());
    navigate("/");
  };

  // ----- VOICE ----- //
  if (!browserSupportsSpeechRecognition) {
    console.log("Browser doesn't support speech recognition.");
  }

  const handleMouseDown = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleMouseUp = () => {
    // Wait for a brief moment to ensure the transcript is updated
    setTimeout(() => {
      console.log("Transcript before search:", transcript);
      setSearchQuery(transcript);
      handleSearchSubmit();
      SpeechRecognition.stopListening(); // Stop listening after handling the search
      resetTranscript();
    }, 200); // Adjust the delay as needed
  };

  const handleStartStopClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening(); // Stop listening
      // Wait for a brief moment to ensure the transcript is updated
      setTimeout(() => {
        console.log("Transcript before search:", transcript);
        dispatch(dressesFetch({ name: transcript }));
        // setSearchQuery(transcript);
        // handleSearchSubmit();
        resetTranscript();
      }, 200); // Adjust the delay as needed
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true }); // Start listening
    }
    setIsListening(!isListening);
  };

  // ---- MENUBAR ----//

  // GRADE, CATEGORY, NAMA STORE

  useEffect(() => {
    dispatch(categoryFetch());
    dispatch(storesFetch());
  }, []);

  const { categories } = useSelector((state) => state?.category);
  const { stores } = useSelector((state) => state?.store);
  // console.log(categories, stores)

  const handleCategoryClick = (e, CategoryId) => {
    console.log(CategoryId);
    e.preventDefault();
    dispatch(dressesFetch({ CategoryId }));
  };

  const handleGradeClick = (e, grade) => {
    console.log(grade);
    e.preventDefault();
    dispatch(dressesFetch({ grade }));
  };

  const handleStoreClick = (e, StoreId) => {
    console.log(StoreId);
    e.preventDefault();
    dispatch(dressesFetch({ StoreId }));
  };

  const [dropdownOpenGrade, setDropdownOpenGrade] = useState(false);
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [dropdownOpenStore, setDropdownOpenStore] = useState(false);

  useEffect(() => {
    dispatch(categoryFetch());
    dispatch(storesFetch());
  }, []);

  const handleDropdownToggleGrade = () => {
    setDropdownOpenGrade(!dropdownOpenGrade);
  };

  const handleDropdownToggleCategory = () => {
    setDropdownOpenCategory(!dropdownOpenCategory);
  };

  const handleDropdownToggleStore = () => {
    setDropdownOpenStore(!dropdownOpenStore);
  };
  return (
    <>
      <div className="w-full top-0 z-28 flex items-center justify-between bg-[#DDD9CE]">
        <div>
          <img
            onClick={logoClick}
            src={logo}
            style={{ width: "60px", height: "50px", marginBottom: "10px" }}
          />
        </div>

        {pathname === "/" && (
          <>
            <div
              style={{
                position: "sticky",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "1",
              }}
            >
              <div className="flex justify-center p-4">
                <button className="dropdown mx-8 z-10">
                  <details open={dropdownOpenGrade}>
                    <summary
                      className={`m-1 bg-[#DDD9CE] flex items-center cursor-pointer ${
                        activeLabel === "grade" ? "underline" : ""
                      }`}
                      onClick={handleDropdownToggleGrade}
                    >
                      GRADE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 ml-1 ${
                          dropdownOpenGrade ? "transform rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a onClick={(e) => handleGradeClick(e, "S")}>S</a>
                      </li>
                      <li>
                        <a onClick={(e) => handleGradeClick(e, "A")}>A</a>
                      </li>
                      <li>
                        <a onClick={(e) => handleGradeClick(e, "B")}>B</a>
                      </li>
                      <li>
                        <a onClick={(e) => handleGradeClick(e, "C")}>C</a>
                      </li>
                    </ul>
                  </details>
                </button>

                <button className="dropdown mx-8 z-10">
                  <details open={dropdownOpenCategory}>
                    <summary
                      className={`m-1 bg-[#DDD9CE] flex items-center cursor-pointer ${
                        activeLabel === "category" ? "underline" : ""
                      }`}
                      onClick={handleDropdownToggleCategory}
                    >
                      CATEGORY
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 ml-1 ${
                          dropdownOpenCategory ? "transform rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-[#EFECE9] rounded-box w-52"
                    >
                      {categories.map((el) => (
                        <li key={el.id}>
                          <a onClick={(e) => handleCategoryClick(e, el.id)}>
                            {el.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </button>

                <button className="dropdown mx-8 z-10">
                  <details open={dropdownOpenStore}>
                    <summary
                      className={`m-1 bg-[#DDD9CE] flex items-center cursor-pointer ${
                        activeLabel === "store" ? "underline" : ""
                      }`}
                      onClick={handleDropdownToggleStore}
                    >
                      STORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 ml-1 ${
                          dropdownOpenStore ? "transform rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-100"
                    >
                      {stores?.map((el) => (
                        <li key={el.id}>
                          <a onClick={(e) => handleStoreClick(e, el.id)}>
                            {el.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </button>
                <NavLink to={"favorite"}>
                  <button className="mx-8 mt-1">MY FAVORITE</button>
                </NavLink>
              </div>
            </div>

            <div className="bg-[#DDD9CE] flex justify-end mr-8 ">
              {isCollapsed ? (
                <div className="relative mx-auto w-96">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border border-[#050505]  w-full py-2 pl-4 pr-10 text-[#050505] placeholder-[#DDD9CE]-50 focus:outline-none focus:ring-1"
                    placeholder="Search"
                    style={{ background: "#EFECE9" }}
                  />
                  <button
                    onClick={handleSearchSubmit}
                    className="flex absolute right-0 top-0 mt-2 my-2 mx-2 focus:outline-none bg-[#EFECE9]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
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
                    <button onClick={handleStartStopClick} className="mr-2">
                      {isListening ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={isListening ? "red" : "#050505"}
                          strokeWidth="1.5"
                          className="h-6 w-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          {isListening && (
                            <circle cx="12" cy="12" r="5" fill="red" />
                          )}
                          <path d="M12 16v-8M10 7h4" />
                        </svg>
                      ) : (
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
                            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                          />
                        </svg>
                      )}
                    </button>
                  </button>
                  <button
                    onClick={toggleCollapse}
                    className="absolute left-72 top-0 mt-2 mr-14 focus:outline-none"
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
                        strokeWidth="1.5"
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
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
