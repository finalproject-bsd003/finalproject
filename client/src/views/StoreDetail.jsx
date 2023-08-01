import Card from "../components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/Carousel";
import { NavLink } from "react-router-dom";
function StoreDetail() {
  return (
    <>
      <Carousel />
      <div className="flex justify-center border p-3 my-3">
        <h1>g</h1>
      </div>
      <div className="flex justify-end px-4 py-3">
        <NavLink to={"/add-dress"}>
          <button className="btn">
            Add Dress
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-20 py-10">
        <h1>data card nya</h1>
      </div>
    </>
  );
}

export default StoreDetail;
