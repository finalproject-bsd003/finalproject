import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../stores";
import { categoryFetch, storesFetch } from "../stores/actions/actionCreator";

function MenuBar() {
  const [activeLabel, setActiveLabel] = useState(null);

  const handleFocus = (label) => {
    setActiveLabel(label);
  };

  const handleBlur = () => {
    setActiveLabel(null);
  };

  // GRADE, CATEGORY, NAMA STORE

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(categoryFetch())
    dispatch(storesFetch())
  }, [])

  const { categories } = useSelector((state) => state?.category)
  const { stores } = useSelector((state) => state?.store)
  // console.log(categories, stores)

  return (
    <>
      {/* Grade button */}
      <div className="flex justify-center border p-4 my-5 border-[#050505]">
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-[#EFECE9]"
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
              <a>S</a>
            </li>
            <li>
              <a>A</a>
            </li>
            <li>
              <a>B</a>
            </li>
            <li>
              <a>C</a>
            </li>
          </ul>
        </div>

        {/* cats button */}
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-[#EFECE9]"
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
            {categories.map((el) => <li key={el.id}>
              <a>{el.name}</a>
            </li>)}
          </ul>
        </div>

        {/* STORE */}
        <div className="dropdown mx-8 z-10">
          <label
            tabIndex={0}
            className="m-1 bg-[#EFECE9]"
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
            {stores.map((el) => <li key={el.id}>
              <a>{el.name}</a>
            </li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuBar;