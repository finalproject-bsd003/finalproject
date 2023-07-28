import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/CarouselDetail";

function DetailPage() {

    const LoremIpsumFeatures = [
        {
            name: "Feature 1",
            description: "Lorem ipsum dolor sit zamet, consectetur adipiscing elit. Aenean in dui eu urna gravida tincidunt.",
        },
        {
            name: "Feature 2",
            description: "Sed euismod, diam a luctus condimentum, enim turpis tincidunt nulla, at fermentum risus mauris eu justo.",
        },
        {
            name: "Feature 3",
            description: "Ut vel tincidunt odio, nec iaculis neque. Pellentesque eget hendrerit lorem.",
        },
        {
            name: "Feature 4",
            description: "Aliquam ut mauris sit amet eros gravida tincidunt. Nam at elementum velit.",
        },
    ];

    return (
        <>
            <section className="flex flex-row mt-7  gap-5 mx-7" >
                <div className="w-7/12 ml-40 overflow-hidden">
                    <Carousel />
                </div>
                <div className=" w-5/12">
                    <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {LoremIpsumFeatures.map((feature, index) => (
                            <div key={index} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailPage;