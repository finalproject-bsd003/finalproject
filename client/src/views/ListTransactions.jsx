import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../stores/actions/actionCreator";

function ListTransactions() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHistory())
  })
  const {history} = useSelector((state) => state?.payment)
  console.log(history)
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
