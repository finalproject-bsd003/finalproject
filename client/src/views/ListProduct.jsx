import Header from "../components/Header";
import Navbar from "../components/Navbar";

function ListProduct() {
  return (
    <>
      <div className="flex justify-end mt-5">
        <button className="btn mr-3">Add New Products</button>
      </div>
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
                  <th>Description</th>
                  <th>Grade</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {data.map((post, index) => {
                  return (
                    <TableData
                      key={post.id}
                      title={post.title}
                      content={post.content}
                      category={post.Category.name}
                      author={post.User.username}
                      id={post.id}
                    />
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
