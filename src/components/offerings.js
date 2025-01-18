import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OfferingsCard = ({ title, description, imageUrl }) => (
  <div className=" rounded-sm  mx-2"> {/* Adjusted width and margin */}
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col justify-between ">
      <div className="text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Offerings = () => {
  const products = useMemo(() => [
    {
      title: "SHOWER & BATH",
      description:
        "At Kohler by Rite Window & Bath, we offer bath remodeling services that can transform your bathroom and your life.",
      imageUrl:
        "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/09/windows-768x515.jpg",
    },
    {
      title: "ENTRY DOORS",
      description:
        "Entry Doors for Rite Window & Door are engineered for maximum durability and are able to withstand the harsh winters of New England.",
      imageUrl:
        "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Rectangle-337-1-768x602.png",
    },
    {
      title: "WINDOWS",
      description:
        "Replacing your windows is an efficient way to refresh your home. When you choose Rite Window, you can upgrade your residence in no time at the right price.",
      imageUrl:
        "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/09/Rectangle-328-3-768x449.png",
    },
    {
      title: "PATIO DOORS",
      description:
        "Replace your old slider with a beautiful new patio door from Rite Window & Door.",
      imageUrl:
        "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/09/wib-768x501.jpg",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enable centering
    centerPadding: "20px", // Adjust for spacing between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-[#eaf7fe]">
      <div className="container mx-auto">
        <h1 className="text-center font-light text-4xl text-[#005db8]">
          Our Offerings
        </h1>
        <div className="flex w-full justify-center mx-auto mb-6 mt-8">
          <img
            width="253"
            height="15"
            alt=""
            src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-348.svg"
          />
        </div>
        <Slider {...settings}>
          {products.map((product, index) => (
            <OfferingsCard key={index} {...product} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Offerings;
