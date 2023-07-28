import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/CarouselDetail";
import React, { useState } from "react";

function DetailPage() {
    const [selectedSize, setSelectedSize] = useState("XS");

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

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
                                Dylan & David Draped Corset Cowl Long Prom Dress
                            </p>
                        </div>
                        {/* grade */}

                        <div className="mt-10">
                            <h4>Grade: S</h4>
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
                                    <span className="usf-label usf-btn">XS</span>
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
                                Rp 5.000.000
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
                            This Dylan & Davids prom dress is the perfect fit and style for
                            your upcoming event. The Dress Outlet offers this dress in black
                            and mauve, but more colors may come. No matter what your size, we
                            have it available from 2 to 14. Features a spaghetti strap cowl
                            neckline. Fitted wrap style with a side high slit. Standout from
                            the crowd in a more unique style that you are sure to love. No
                            matter if this is a wedding, dance, prom or more, you will look
                            fabulous in this style.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailPage;

