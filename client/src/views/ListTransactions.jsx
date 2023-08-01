function ListTransactions() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          User Transaction
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

export default ListTransactions;
