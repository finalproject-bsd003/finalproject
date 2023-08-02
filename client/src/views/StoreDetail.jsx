import Card from "../components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { detailStoreFetch } from "../stores/actions/actionCreator";
import { useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function StoreDetail() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailStoreFetch(id));
  }, [id]);

  const { detailStore } = useSelector((state) => state?.store);

  console.log(detailStore, "ini detail store");

  // --- GMAPS ----//
  const apiKey = "AIzaSyC9IYssL81GPbX2DA0U1wP9qKAiFrKbUUs";
  const initialLat = +detailStore?.lat; // Replace with your desired latitude
  const initialLng = +detailStore?.long; // Replace with your desired longitude

  const addDressHandler = () => {
    navigate(`/add-dress/${detailStore?.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* GOOGLE MAPS */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={{ lat: +detailStore?.lat, lng: +detailStore?.long }}
              zoom={20}
            >
              {/* Add a marker */}
              <Marker
                position={{
                  lat: +detailStore?.lat,
                  lng: +detailStore?.long,
                }}
              />
            </GoogleMap>
          </LoadScript>
        </div>
        {/* Store Information */}
        <div className="md:w-1/2 md:ml-6">
          <h1 className="text-3xl font-bold mb-4">{detailStore?.name}</h1>
          <p className="text-lg text-gray-600">{detailStore?.address}</p>
        </div>
      </div>
      {/* Add Dress Button */}
      {/* <NavLink to={"/add-dress"}> */}
      <div className="flex justify-end mb-4">
        <button onClick={addDressHandler} className="btn flex items-center">
          Add Dress
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      {/* </NavLink> */}
      {/* Dress Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {detailStore?.Dresses?.map((dress) => (
          <Card dress={dress} key={dress?.id} />
        ))}
      </div>
    </div>
  );
}

export default StoreDetail;
