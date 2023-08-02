import Card from "../components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

  console.log(detailStore);

  // --- GMAPS ----//
  const apiKey = "AIzaSyC9IYssL81GPbX2DA0U1wP9qKAiFrKbUUs";
  const initialLat = +detailStore?.lat; // Replace with your desired latitude
  const initialLng = +detailStore?.long; // Replace with your desired longitude


  return (
    <>

      {/* GOOGLE MAPS */}
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "500px" }}
          center={{ lat: initialLat, lng: initialLng }}
          zoom={20}
        >
          {/* Add a marker */}
          <Marker position={{ lat: initialLat, lng: initialLng }} />
        </GoogleMap>
      </LoadScript>
      {/* GOOGLE MAPS */}
      <div className="flex flex-col items-center justify-center border p-3 my-4">
        <h1>{detailStore?.name}</h1>
        <h1>{detailStore?.address}</h1>
      </div>
      <div className="flex justify-end px-4 py-2">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-20 py-6">
        {detailStore?.Dresses?.map((dress) => (
          <Card dress={dress} key={dress?.id} />
        ))}
      </div>
    </>
  );
}

export default StoreDetail;
