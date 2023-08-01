import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/Carousel";
import NavFilter from "../components/Filter";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { dressesFetch } from "../stores/actions/actionCreator";
import TalkButton from "../components/Talk";
import { useLocation } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const { dresses } = useSelector((state) => state?.dress);
  const { isLoading } = useSelector((state) => state?.dress);
  console.log(isLoading, "<<<<<<<<<<<<<<<");

  const location = useLocation();
  console.log(location, "<<<<<<<<<<");

  useEffect(() => {
    dispatch(dressesFetch());
  }, []);

  const { data } = dresses;
  console.log(dresses, "<<<<<<<<");
  const { pagination } = dresses;

  // search
  const [isCollapsed, setCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    dispatch(dressesFetch({ name: searchQuery }));
    setSearchQuery("");
  };

  return (
    <>
      <TalkButton />
      <Carousel />
      <NavFilter />
      {/* search bar */}
      <div className="flex justify-end mt-5 mx-5"></div>
      {isLoading && <Loading />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-20 py-10 ">
        {data?.map((dress) => (
          <Card dress={dress} key={dress?.id} />
        ))}
      </div>
      <div className="pagination-container">
        <div className="flex items-center justify-center">
          <div className="join" style={{ background: "#EFECE9" }}>
            <button
              className="join-item btn btn-xs"
              style={{ background: "#EFECE9" }}
            >
              &laquo;
            </button>
            <button
              className="join-item btn btn-xs"
              style={{ background: "#EFECE9" }}
            >
              {pagination?.currentPage}
            </button>
            <button
              className="join-item btn btn-xs"
              style={{ background: "#EFECE9" }}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
