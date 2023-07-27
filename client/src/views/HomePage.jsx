import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/Carousel";
import NavFilter from "../components/Filter";
import Card from "../components/Card";

function HomePage() {
  return (
    <>
      <Carousel />
      <NavFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-20 py-10">
        <Card />
      </div>
      <div className="pagination-container">
        <div className="flex items-center justify-center">
          <div className="join">
            <button className="join-item btn btn-xs">&laquo;</button>
            <button className="join-item btn btn-xs">Page 22</button>
            <button className="join-item btn btn-xs">&raquo;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
