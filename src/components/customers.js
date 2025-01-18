import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferingsCard = ({ name, date, platformIcon, rating, review }) => (
  <div className="mx-2 shadow-lg bg-black rounded-md p-6">
    <div className="flex justify-between mb-4">
      <div>
        <p className="text-white">{name}</p>
        <p className="text-gray-400 text-xs">{date}</p>
      </div>
      <img src={platformIcon} alt="Platform Icon" width="20" height="20" />
    </div>
    <div className="flex mb-2">
      {Array.from({ length: rating }).map((_, i) => (
        <img
          key={i}
          src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
          alt="Star"
          width="17"
          height="17"
        />
      ))}
    </div>
    <p className="text-white text-md">{review}</p>
    <div className="text-gray-500 mt-2 hover:underline hover:cursor-pointer hover:text-white text-xs">
      Read more
    </div>
  </div>
);

const Customers = () => {
  const products = useMemo(() => [
    {
      name: "Kevin Moore",
      date: "6 months ago",
      platformIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
      rating: 5,
      review:
        "Rite Window just finished putting in 5 windows. Phil, Rich and the team were punctual, professional, efficient, and showed great attention to detail. Hats off to them!",
    },
    {
      name: "Susan Davis",
      date: "4 months ago",
      platformIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
      rating: 5,
      review:
        "We had an amazing experience with Rite Window! They installed a beautiful new patio door, and the process was seamless. Highly recommend their services.",
    },
    {
      name: "Michael Johnson",
      date: "2 months ago",
      platformIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
      rating: 4,
      review:
        "Great service overall. The team installed entry doors for us, and they look fantastic. A small delay in the schedule, but otherwise excellent work.",
    },
    {
      name: "Emma Wilson",
      date: "1 month ago",
      platformIcon: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
      rating: 5,
      review:
        "Had my bathroom remodeled, and the results are incredible! The team was professional and efficient. Couldn't be happier with the outcome.",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-[#eaf7fe]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
          <div className="md:max-w-xs text-center md:text-left">
            <h1 className="font-light text-3xl md:text-4xl text-[#005db8]">
              What Our Customers Say
            </h1>
            <div className="flex justify-center md:justify-start mb-8 mt-3">
              <img
                width="140"
                height="70"
                alt=""
                src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/Frame-4.png"
                className="attachment-large size-large wp-image-124"
                decoding="async"
              />
            </div>
            <p className="text-[#005db8] text-sm md:text-base">
              Read more reviews:
            </p>
          </div>
          <div className="md:w-2/3 w-full">
            <Slider {...settings}>
              {products.map((product, index) => (
                <OfferingsCard key={index} {...product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
