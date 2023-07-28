function ListProduct() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <button className="btn mr-3">Add New Products</button>
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
                  <th>Title</th>
                  <th>Content</th>
                  <th>Category</th>
                  <th>Author</th>
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
