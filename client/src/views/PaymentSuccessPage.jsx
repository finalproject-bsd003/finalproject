<<<<<<< HEAD
const PaymentSuccess = () => {
    return (
        <h1>PERMBAYARAN BERHASIL</h1>
    )
}

export default PaymentSuccess
=======
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PaymentSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="flex justify-center card w-[40vw] h-[80vh] bg-base-100 border border-black ">
          <figure className="px-10 pt-2">
            <img
              src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
              alt="success"
              className="rounded-xl"
              style={{ width: "800px", height: "400px" }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h1 className="card-title mb-5" style={{ fontSize: "48px" }}>
              Payment Successful
            </h1>
            <h2 className="card-title mt-5" style={{ fontSize: "22px" }}>
              Thank you, your purchase has been processed!
            </h2>

            <div className="card-actions mt-12">
              <button className="btn ">Back To HomePage</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
>>>>>>> b2940cc8765a4185797da89878cb9e69a99d80f3
