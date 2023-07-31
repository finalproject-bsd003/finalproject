import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../stores/actions/actionCreator";
import logo from "../assets/Screenshot_2023-07-27_at_17.11.04-removebg-preview.png";

const LoginForm = () => {
  const inputLogin = {
    email: useRef(),
    password: useRef(),
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errorLogin } = useSelector((state) => state?.user);

  const loginSubmit = (event) => {
    event.preventDefault();
    const loginSubmit = {
      email: inputLogin.email.current.value,
      password: inputLogin.password.current.value,
    };
    dispatch(login(loginSubmit))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "dariiii login");
      });
  };

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-80 p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-xl">
          <div className="flex justify-center">
            <img
              src={logo}
              style={{ alignItems: "center", width: "90px", height: "70px" }}
            />
          </div>
          <h1 className="text-3xl font-semibold text-center text-black mt-5">
            Sign in
          </h1>
          {errorLogin && <div className="text-red-500">{errorLogin}</div>}
          <form onSubmit={loginSubmit} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                ref={inputLogin.email}
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                ref={inputLogin.password}
                name="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Don't have an account yet?
              <NavLink
                to="/register"
                className="font-medium ml-2 text-blue-700 hover:underline dark:text-primary-500"
              >
                {" "}
                Sign Up{" "}
              </NavLink>
            </p>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </div>
            <NavLink to={"/"}>
              <p className="flex justify-center font-medium text-blue-500 ml-2 hover:underline dark:text-primary-500 mt-2">
                Back to HomePage
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
