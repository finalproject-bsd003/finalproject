import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../stores/actions/actionCreator";

function ListTransactions() {
  const dispatch = useDispatch()
 
  const data = useSelector((state) => state?.payment?.history?.Data?.Transaction)
  // const {history} = useSelector((state) => state?.payment)
  // console.log(history?.Data?.Transaction)

  // const dataTransaction = history?.Data?.Transaction
  
  // const [data, setData] = useState()
  console.log(data);

  useEffect(() => {
    dispatch(fetchHistory())
    // const transaction = [...history?.Data?.Transaction]
    // const newObj = {...history}
    // newObj.Transaction = transaction
    // setData(newObj)
  }, [])





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
                  <th>Buyer Phone Number</th>
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
      <td>{el?.BuyerPhone}</td>
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
