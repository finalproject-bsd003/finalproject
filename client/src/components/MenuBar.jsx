import React, { useState } from "react";

function MenuBar() {
  const [activeLabel, setActiveLabel] = useState(null);

  const handleFocus = (label) => {
    setActiveLabel(label);
  };

  const handleBlur = () => {
    setActiveLabel(null);
  };

  return (
    <>
      {/* Grade button */}
      <div className="flex justify-center border p-3 my-3">
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-white"
            style={{
              textDecoration: activeLabel === "grade" ? "underline" : "none",
              outline: "none",
            }}
            onFocus={() => handleFocus("grade")}
            onBlur={handleBlur}
          >
            GRADE
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* cats button */}
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-white"
            style={{
              textDecoration: activeLabel === "category" ? "underline" : "none",
              outline: "none",
            }}
            onFocus={() => handleFocus("category")}
            onBlur={handleBlur}
          >
            CATEGORY
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* PRICE */}
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-white"
            style={{
              textDecoration: activeLabel === "price" ? "underline" : "none",
              outline: "none",
            }}
            onFocus={() => handleFocus("price")}
            onBlur={handleBlur}
          >
            PRICE
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* STORE */}
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-white"
            style={{
              textDecoration: activeLabel === "store" ? "underline" : "none",
              outline: "none",
            }}
            onFocus={() => handleFocus("store")}
            onBlur={handleBlur}
          >
            STORE
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
