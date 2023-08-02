import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../stores/actions/actionCreator";

function ListTransactions() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state?.payment?.history);
  const userRole = localStorage.getItem("role"); // Placeholder for user role
  const loggedInUsername = localStorage.getItem("username"); // Placeholder for logged-in username

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchHistory());
  }, []);

  useEffect(() => {
    if (userRole === "admin") {
      setData(history?.Data?.Transaction);
    } else if (userRole === "user") {
      const filteredData = history?.Data?.Transaction?.filter(
        (el) => el.BuyerName === loggedInUsername
      );
      setData(filteredData);
    }
  }, [history, userRole, loggedInUsername]);

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
                  <th>Transaction Id</th>
                  <th>Amount</th>
                  <th>Buyer Name</th>
                  <th>Buyer Email</th>
                  <th>Paid Status</th>
                  <th>Success Date</th>
                </tr>
              </thead>
              <tbody>
                {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
                {/* <span>{data}</span> */}
                {data?.map((el, index) => (
                  <tr key={el?.TransactionId}>
                    <td>{index + 1}</td>
                    <td>{el?.TransactionId}</td>
                    <td>{el?.Amount}</td>
                    <td>{el?.BuyerName}</td>
                    <td>{el?.BuyerEmail}</td>
                    <td>{el?.StatusDesc}</td>
                    <td>{el?.SuccessDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListTransactions;
