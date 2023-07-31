import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/CarouselDetail";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailDressFetch, paymentQris } from "../stores/actions/actionCreator";

function DetailPage() {
    const [selectedSize, setSelectedSize] = useState("XS");

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(detailDressFetch(id))
    }, [id])

    const { detailDress: result } = useSelector((state) => state?.dress)

    console.log(result)
    // const { result } = detailDress
    // const { resultImages } = detailDress

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }


    // -------- payment ----------//



    const handleCreateInvoice = async (event) => {
        event.preventDefault();
        const { name } = result;

        const data = {
            name: "mawar",
            phone: "08123456789",
            amount: 1000,
            email: "sharonrose9926@gmail.com",
            comments: `${name} - ${selectedSize}`,
        };

        try {
            const response = await dispatch(paymentQris(data));
            console.log(response, "<<<<<<<<<<<< detail page");
            window.location.href = response
            // If you want to redirect after getting the response, you can do it here:
            // window.location.href = response; // Assuming the response is a URL
        } catch (error) {
            console.log(error);
        }


    }

    // console.log(result?.Images)

    return (
        <>
            <section className="flex flex-row my-20  gap-5 mx-10">
                <div className="w-7/12 ml-10 overflow-hidden">
                    <Carousel images={{ arrResult: result.Images, mainImage: result.mainImage }} />
                </div>
                <div className=" w-5/12">
                    <div className="mt-28">
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: "22px" }}>
                                {result?.name}
                            </p>
                        </div>
                        {/* grade */}

                        <div className="mt-10">
                            <h4>Grade: {result?.grade}</h4>
                        </div>

                        {/* price */}
                        <div className="mt-20">
                            <h4
                                className="text-m"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "36px",
                                    display: "flex",
                                }}
                            >
                                {rupiah(result?.price)}
                            </h4>
                        </div>

                        {/* Add to cart button */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "36px",
                            }}
                        >
                            <button
                                className="btn bg-black text-white"
                                style={{ width: "500px", borderRadius: "0" }}
                                onClick={handleCreateInvoice}
                            >
                                Payment
                            </button>
                        </div>

                        {/* description */}
                        <div className="mt-20 border-b">
                            <h4
                                className="text-m mb-2"
                                style={{ fontWeight: "normal", fontSize: "20px" }}
                            >
                                Description
                            </h4>
                            {/* inser here */}
                        </div>
                        <p className="mt-8">
                            {result?.description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailPage;

