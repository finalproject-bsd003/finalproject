import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { dressesFetch } from "../stores/actions/actionCreator";

function ListProduct() {

  const dispatch = useDispatch();

  const { dresses } = useSelector((state) => state?.dress);
  const { isLoading } = useSelector((state) => state?.dress);

  useEffect(() => {
    dispatch(dressesFetch());
  }, []);

  const { data } = dresses
  console.log(data)

  return (
    <>
      <div className="flex justify-end mt-5">
      </div>
      {isLoading && <Loading />}
      <div className="flex flex-col justify-center items-center mt-5">
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          List Products
        </h2>
        <div className=" w-[90vw] ">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Store</th>
                  <th>Size</th>
                  <th>Grade</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((dress, index) =>
                  <tr key={dress?.id}>
                    <td>{index + 1}</td>
                    <td>{dress.name} </td>
                    <td className="w-32 p-4">  <img src={dress.mainImage} /></td>
                    <td>{dress.description} </td>
                    <td>{dress.Store.name} </td>
                    <td>{dress.size} </td>
                    <td>{dress.grade} </td>
                    <td>CATEGORY </td>
                    <td>{dress.price} </td>
                    <td><NavLink to={`/detail/${dress.id}`}>See Detail </NavLink></td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
