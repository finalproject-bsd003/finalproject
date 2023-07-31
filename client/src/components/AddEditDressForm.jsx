import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addDress,
  categoryFetch,
  detailDressFetch,
  dressesFetch,
  editDress,
} from "../stores/actions/actionCreator";

function AddEditDressForm({ detailDressFromPage }) {
  console.log(detailDressFromPage, "dari form");

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "dari addedit form");

  useEffect(() => {
    dispatch(detailDressFetch(id));
    dispatch(categoryFetch());
  }, []);
  const { detailDress } = useSelector((state) => state?.dress);

  useEffect(() => {
    setFormValue(detailDress);
    // dispatch(detailDressFetch(id))
  }, [detailDress]);

  // useEffect(() => {
  //   dispatch(categoryFetch())
  //   dispatch(dressesFetch())
  // }, [])

  const { categories } = useSelector((state) => state?.category);
  console.log(detailDress.Images, "<<<<<<,");

  const [formValue, setFormValue] = useState(
    id
      ? {
          name: detailDress ? detailDress?.name : detailDressFromPage?.name,
          description: detailDress
            ? detailDress?.description
            : detailDressFromPage?.description,
          price: detailDress ? detailDress?.price : detailDressFromPage?.price,
          grade: detailDress ? detailDress?.grade : detailDressFromPage?.grade,
          size: detailDress ? detailDress?.size : detailDressFromPage?.size,
          mainImage: detailDress
            ? detailDress?.mainImage
            : detailDressFromPage?.mainImage,
          categoryId: detailDress
            ? detailDress?.categoryId
            : detailDressFromPage?.categoryId,
          // imgUrl1: detailDress ? detailDress?.Images[0]?.name : detailDressFromPage?.Images[0]?.name,
          // imgUrl2: detailDress ? detailDress?.Images[1]?.name : detailDressFromPage?.Images[1]?.name,
          // imgUrl3: detailDress ? detailDress?.Images[2]?.name : detailDressFromPage?.Images[2]?.name,
        }
      : {
          name: "",
          description: "",
          price: "",
          grade: "",
          size: "",
          mainImage: "",
          categoryId: "",
          imgUrl1: "",
          imgUrl2: "",
          imgUrl3: "",
        }
  );

  const { error } = useSelector((state) => state?.dress);

  const input = {
    name: useRef(),
    description: useRef(),
    categoryId: useRef(),
    grade: useRef(),
    mainImage: useRef(),
    price: useRef(),
    imgUrl1: useRef(),
    imgUrl2: useRef(),
    imgUrl3: useRef(),
  };

  const addDressSubmit = (event, id) => {
    event.preventDefault();
    const dressInput = {
      name: input.name.current.value,
      description: input.description.current.value,
      categoryId: input.current.value,
      grade: input.grade.current.value,
      mainImage: input.mainImage.current.value,
      price: input.price.current.value,
      imgUrl1: input.imgUrl1.current.value,
      imgUrl2: input.imgUrl2.current.value,
      imgUrl3: input.imgUrl3.current.value,
    };

    console.log(dressInput.grade);

    if (id) {
      dispatch(editDress(dressInput, id))
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error, "dariiii edit dress");
        });
    } else {
      dispatch(addDress(dressInput))
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error, "dariiii add dress");
        });
    }
  };

  return (
    <>
      <div className=" flex flex-col justify-center min-h-screen overflow-hidden ">
        <div
          className="w-[50vw] p-10 m-auto bg-base-100 rounded-md shadow-md lg:max-w-xl mt-8"
          style={{ background: "#EFECE9" }}
        >
          <h1
            className="text-3xl font-semibold text-center text-[#050505]"
            style={{ fontSize: "26px", fontFamily: "Volkhorn Semibold" }}
          >
            {id ? "Edit Detail Dress" : "Add New Dress"}
          </h1>
          {error && <div className="text-red-500">{error}</div>}
          <form
            onSubmit={(e) => (id ? addDressSubmit(e, id) : addDressSubmit(e))}
            className="mt-6"
          >
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#050505]"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={formValue.name}
                ref={input.name}
                placeholder="Enter dress name here ..."
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-[#050505]"
              >
                Description:
              </label>
              <textarea
                type="text"
                placeholder="Enter description here..."
                name="description"
                defaultValue={formValue.description}
                ref={input.description}
                style={{ height: "130px" }}
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="categoryId"
                id="categoryId"
              >
                Category:
              </label>
              <select
                defaultValue={formValue.categoryId}
                ref={input.categoryId}
                type="text"
                id="categoryId"
                name="categoryId"
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              >
                <option selected disabled value={""}>
                  Select Category
                </option>
                {categories?.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={
                      formValue.categoryId === category.id ? true : false
                    }
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="grade"
                id="grade"
              >
                Grade:
              </label>
              <select
                defaultValue={formValue.grade}
                ref={input.grade}
                name="grade"
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              >
                <option disabled selected value={""}>
                  Select Grade
                </option>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="mainImage"
              >
                Main Image Url:
              </label>
              <input
                defaultValue={formValue.mainImage}
                ref={input.mainImage}
                type="text"
                name="mainImage"
                placeholder="Enter tags here..."
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="Price"
              >
                Price:
              </label>
              <input
                defaultValue={formValue.price}
                type="text"
                name="Price"
                ref={input.price}
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="size"
              >
                Image Url 1:
              </label>
              <input
                type="text"
                name="imgUrl1"
                defaultValue={formValue.imgUrl1}
                ref={input.imgUrl1}
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="size"
              >
                Image Url 2:
              </label>
              <input
                type="text"
                name="imgUrl2"
                defaultValue={formValue.imgUrl2}
                ref={input.imgUrl2}
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-[#050505]"
                htmlFor="size"
              >
                Image Url 3:
              </label>
              <input
                type="text"
                name="imgUrl3"
                defaultValue={formValue.imgUrl3}
                ref={input.imgUrl3}
                placeholder="Enter image URL here..."
                className="block w-full px-4 py-2 mt-2 text-[#050505] bg-[#EFECE9] border border-[#050505] rounded-md focus:border-[#050505] focus:ring-[#050505] focus:outline-none focus:ring-opacity-10"
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-[#efece9] transition-colors duration-200 transform bg-[#610C27] rounded-md hover:bg-[#AC9C8D] focus:outline-none focus:bg-[#E3C1B4]">
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
