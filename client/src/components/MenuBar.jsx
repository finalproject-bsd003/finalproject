import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryFetch,
  dressesFetch,
  storesFetch,
} from "../stores/actions/actionCreator";

function MenuBar() {
  const [activeLabel, setActiveLabel] = useState(null);
  const [dropdownOpenGrade, setDropdownOpenGrade] = useState(false);
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [dropdownOpenStore, setDropdownOpenStore] = useState(false);

  const handleFocus = (label) => {
    setActiveLabel(label);
  };

  const handleBlur = () => {
    setActiveLabel(null);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryFetch());
    dispatch(storesFetch());
  }, []);

  const { categories } = useSelector((state) => state?.category);
  const { stores } = useSelector((state) => state?.store);
  console.log(stores)
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
      <div className="flex justify-center border-b p-4 bg-[#DDD9CE]">
        {/* GRADE */}
        <button className="dropdown mx-8 z-10">
          <details open={dropdownOpenGrade}>
            <summary
              className={`m-1 bg-[#DDD9CE] flex items-center cursor-pointer ${activeLabel === "grade" ? "underline" : ""
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
                className={`w-4 h-4 ml-1 ${dropdownOpenGrade ? "transform rotate-180" : ""
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

        {/* CATEGORY */}
        <button className="dropdown mx-8 z-10">
          <details open={dropdownOpenCategory}>
            <summary
              className={`m-1 bg-[#DDD9CE] flex items-center cursor-pointer ${activeLabel === "category" ? "underline" : ""
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
                className={`w-4 h-4 ml-1 ${dropdownOpenCategory ? "transform rotate-180" : ""
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

        {/* STORE */}
        <button className="dropdown mx-8 z-10">
          <details open={dropdownOpenStore}>
            <summary
              className={`m-1 bg-[#DDD9CE] flex items-center cursor-pointer ${activeLabel === "store" ? "underline" : ""
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
                className={`w-4 h-4 ml-1 ${dropdownOpenStore ? "transform rotate-180" : ""
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
              {stores?.map((el) => (
                <li key={el.id}>
                  <a>{el.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </button>
      </div>
    </>
  );
}

export default MenuBar;
