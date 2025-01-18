import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ title, price, imageUrl }) => (
  <div className="bg-white rounded-sm border mx-2 mt-0 lg:mt-52"> {/* Adjust width and margin */}
  <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
  <div className="p-4 flex flex-col justify-between min-h-[300px]">
    <div>
      <h3 className="text-md font-light mt-4 text-[#00365b] underline hover:cursor-pointer">
        {title}
      </h3>
      <p className="text-[#00365b] font-semibold text-xl mt-2">{price}</p>
    </div>
    <div>
      <p className="text-[#00365b] text-sm">
        18 months no interest no payments
      </p>
      <p className="text-[#00365b] text-sm font-semibold border border-orange-400 text-center w-fit p-2 my-1">
        Offer expires 1/31/25
      </p>
      <button className="mt-4 bg-[#00365b] text-white px-4 py-2 rounded-sm transition duration-300 w-full">
        GET OFFER
      </button>
    </div>
  </div>
</div>

);

const ProductGrid = () => {
  const products = useMemo(() => [
    {
      title: "WINDOWS",
      price: "$150 Off Windows",
      imageUrl:
        "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/09/windows-768x515.jpg",
    },
    {
      title: "Double-Hung Window",
      price: "Save $2,000 on Double-Hung Window Replacements",
      imageUrl:
        "/images/assets/window-2.png",
    },
    {
      title: "PATIO & ENTRY DOORS",
      price: "$550 off a new entry door or patio door",
      imageUrl:
        "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/09/Rectangle-328-3-768x449.png",
    },
    {
      title: "Bow Window",
      price: "$3,500 Off Any Bay or Bow Window Installation",
      imageUrl:
        "/images/assets/window-3.png",
    },
    {
      title: "ADDITIONAL PRODUCT",
      price: "$100 off any additional product",
      imageUrl: "https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Rectangle-337-1-768x602.png",
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
    <section className="container mx-auto mb-8 lg:mb-32">
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductGrid;
