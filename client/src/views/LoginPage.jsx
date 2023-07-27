const LoginForm = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-80 p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black ">
            Sign in
          </h1>
          <form className="mt-6">
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
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
