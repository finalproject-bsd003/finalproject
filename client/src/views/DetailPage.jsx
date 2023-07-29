import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/CarouselDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailDressFetch } from "../stores/actions/actionCreator";

function DetailPage() {
    const [selectedSize, setSelectedSize] = useState("XS");

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailDressFetch(id))
    }, [])

    const { detailDress } = useSelector((state) => state?.dress)

    console.log(detailDress)
    const { result } = detailDress
    const { resultImages } = detailDress

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }


    return (
        <>
            <section className="flex flex-row my-20  gap-5 mx-10">
                <div className="w-7/12 ml-10 overflow-hidden">
                    <Carousel />
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

                        {/* size */}
                        <div className="mt-12">
                            <h4 style={{ fontWeight: "inherit", fontSize: "18px" }}>
                                Size : {selectedSize}
                            </h4>
                            <div className="mt-8 mx-5">
                                <button
                                    className={`btn bg-white ${selectedSize === "XS" ? "selected" : ""
                                        }`}
                                    onClick={() => handleSizeChange("XS")}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "40px",
                                        height: "40px",
                                        padding: 0,
                                        border: "1px solid black",
                                        borderRadius: 0,
                                    }}
                                >
                                    <span className="usf-label usf-btn">{result?.size}</span>
                                </button>

                                <button
                                    className={`btn bg-white mx-3 ${selectedSize === "S" ? "selected" : ""
                                        }`}
                                    onClick={() => handleSizeChange("S")}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "40px",
                                        height: "40px",
                                        padding: 0,
                                        border: "1px solid black",
                                        borderRadius: 0,
                                    }}
                                >
                                    <span className="usf-label usf-btn">S</span>
                                </button>

                                <button
                                    className={`btn bg-white ${selectedSize === "M" ? "selected" : ""
                                        }`}
                                    onClick={() => handleSizeChange("M")}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "40px",
                                        height: "40px",
                                        padding: 0,
                                        border: "1px solid black",
                                        borderRadius: 0,
                                    }}
                                >
                                    <span className="usf-label usf-btn">M</span>
                                </button>
                            </div>
                        </div>
                        {/* size */}

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
                            >
                                Add to cart
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
