import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailDressFetch } from "../stores/actions/actionCreator";

function AddEditDressForm({ detailDressFromPage }) {

  // console.log(detailDressFromPage, "<<<<<<<<<<<<,")

  const dispatch = useDispatch()

  const { id } = useParams()
  console.log(id, "dari addedit form")

  useEffect(() => {
    dispatch(detailDressFetch(id))
  }, [id])

  const { detailDress } = useSelector((state) => state?.dress)

  const [formValue, setFormValue] = useState(detailDressFromPage ? {
    name: detailDress ? detailDress?.result?.name : detailDressFromPage?.result?.name,
    description: detailDress ? detailDress?.result?.description : detailDressFromPage?.result?.description,
    price: detailDress ? detailDress?.result?.price : detailDressFromPage?.result?.price,
    grade: detailDress ? detailDress?.result?.grade : detailDressFromPage?.result?.grade,
    size: detailDress ? detailDress?.result?.size : detailDressFromPage?.result?.size,
    mainImage: detailDress ? detailDress?.result?.mainImage : detailDressFromPage?.result?.mainImage,
    categoryId: detailDress ? detailDress?.result?.categoryId : detailDressFromPage?.result?.categoryId,
    imgUrl1: detailDress ? detailDress?.resultImage[0]?.name : detailDressFromPage?.resultImage[0]?.name,
    imgUrl2: detailDress ? detailDress?.resultImage[1]?.name : detailDressFromPage?.resultImage[1]?.name,
    imgUrl3: detailDress ? detailDress?.resultImage[2]?.name : detailDressFromPage?.resultImage[2]?.name,
  } : {
    name: "",
    description: "",
    price: "",
    grade: "",
    size: "",
    mainImage: "",
    categoryId: 1,
    imgUrl1: "",
    imgUrl2: "",
    imgUrl3: "",
  });


  // const { result } = detailDressFromPage
  // const { resultImage } = detailDressFromPage
  // console.log(result, resultImage)

  // const [editFormValue, setEditFormValue] = useState({
  //   name: "",
  //   description: "",
  //   price: "",
  //   grade: "",
  //   size: "",
  //   mainImage: "",
  //   categoryId: 1,
  //   imgUrl1: "",
  //   imgUrl2: "",
  //   imgUrl3: "",
  // });

  // const dispatch = useDispatch()

  // const { id } = useParams()
  // console.log(id, "dari addedit form")

  // useEffect(() => {
  //   dispatch(detailDressFetch(id))
  // }, [id])

  // const { detailDress } = useSelector((state) => state?.dress)
  // console.log(detailDress)

  // const {
  //   name,
  //   description,
  //   price,
  //   grade,
  //   size,
  //   mainImage,
  //   categoryId,
  // } = detailDressFromPage?.result || detailDress?.result || {};

  // console.log(detailDressFromPage, "dari parameter")
  // console.log(detailDress, "dari state dress")
  // const detailData = detailDressFromPage ?? detailDress; // Choose either detailDressFromPage or detailDress
  // console.log(detailData, "ni detail data")
  // console.log(detailData.resultImage[0].name, "ni detail data")



  // const imgUrl1 = detailData?.resultImage[0].name
  // const imgUrl2 = detailData?.resultImage[1].name
  // const imgUrl3 = detailData?.resultImage[2].name

  // console.log(imgUrl1, imgUrl2, imgUrl3);


  // const [formAddProduct, setformAddProduct] = useState({
  //   name: name ?? "",
  //   description: description ?? "",
  //   price: price ?? "",
  //   grade: grade ?? "",
  //   size: size ?? "",
  //   mainImage: mainImage ?? "",
  //   categoryId: categoryId ?? 1,
  //   imgUrl1: imgUrl1 ?? "",
  //   imgUrl2: imgUrl2 ?? "",
  //   imgUrl3: imgUrl3 ?? "",
  // })

  // console.log(formAddProduct, "<<<<<<<<<<<")


  const { error } = useSelector((state) => state?.dress);

  const input = {
    name: useRef(),
    description: useRef(),
    grade: useRef(),
    mainImg: useRef(),
    categoryId: useRef()
  }

  return (
    <>
      <div className=" flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-[50vw] p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black ">
            {id ? "Edit Detail Dress" : "Add New Dress"}
          </h1>
          {error && <div className="text-red-500">{error}</div>}
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
                name="name"
                defaultValue={formValue.name}
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
                name="description"
                defaultValue={formValue.description}
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
                defaultValue={formValue.grade}
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
                Main Image Url:
              </label>
              <input
                defaultValue={formValue.mainImage}
                type="text"
                name="mainImage"
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
                defaultValue={formValue.price}
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
                defaultValue={formValue.size}
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="size"
              >
                Image Url 1:
              </label>
              <input
                type="text"
                name="imgUrl1"
                defaultValue={formValue.imgUrl1}
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="size"
              >
                Image Url 2:
              </label>
              <input
                defaultValue={formValue.imgUrl2}
                type="text"
                name="imgUrl2"
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-500 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
                htmlFor="size"
              >
                Image Url 3:
              </label>
              <input
                type="text"
                name="imgUrl3"
                defaultValue={formValue.imgUrl3}
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

export default AddEditDressForm;
