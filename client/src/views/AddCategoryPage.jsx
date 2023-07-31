import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addCategorySuccess,
  categoryFetch,
} from "../stores/actions/actionCreator";

function AddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addCategory, setCategory] = useState({
    name: "",
  });

  const inputForm = (e) => {
    setCategory({
      ...addCategory,
      [e.target.name]: e.target.value,
    });
  };

  const submitCategories = async (e) => {
    e.preventDefault();
    const response = addCategory;
    await dispatch(addCategorySuccess(response));
    //reset
    setCategory({
      name: "",
    });
    await dispatch(categoryFetch());
    navigate("/categories");
  };
  return (
    <>
      <div className=" flex flex-col justify-center min-h-[80vh] overflow-hidden ">
        <div className="w-[50vw] p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black ">
            Add New Category
          </h1>
          <form className="mt-6" onSubmit={submitCategories}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter dress name here ..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={inputForm}
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
