function AddProduct() {
  return (
    <>
      <div className=" flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-[50vw] p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black ">
            Add New Dress
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name:
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter dress name here ..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-800"
              >
                Description:
              </label>
              <textarea
                type="text"
                placeholder="Enter description here..."
                name="content"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="grade"
                id="grade"
              >
                Grade:
              </label>
              <select
                type="text"
                id="grade"
                name="grade"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                {/* <option value={""}>Select Category</option>
                {category.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="mainImage"
              >
                Image Url:
              </label>

              <input
                type="text"
                name="imageUrl"
                placeholder="Enter tags here..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="Price"
              >
                Price:
              </label>
              <input
                type="text"
                name="Price"
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="size"
              >
                Size:
              </label>
              <input
                type="text"
                name="size"
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

export default AddProduct;
