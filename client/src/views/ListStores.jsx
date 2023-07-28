import Header from "../components/Header";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

function ListStores() {
  return (
    <>
      <div className="flex justify-end mt-5">
        <button className="btn mr-3">Add New Store</button>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          List Stores
        </h2>
        <div className=" w-[90vw] ">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ borderCollapse: "collapse" }}>
                <tr style={{ padding: "20px" }}>
                  <td>a</td>
                  <td>b</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListStores;
