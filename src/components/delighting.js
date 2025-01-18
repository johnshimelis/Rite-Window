import React from "react";

const Delighting = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#00365b] text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 text-center md:text-left container mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Rite Window - Delighting our Customers with Exceptional Products,
          Professionally Installed, for the Right Price
        </h2>
        <div className=" flex w-full justify-center md:justify-normal  mb-8 mt-6">
          <img
            width="253"
            height="15"
            alt=""
            nitro-lazy-src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-349.svg"
            decoding="async"
            nitro-lazy-empty=""
            id="MTgxNToyMDA=-1"
            src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-349.svg"
          />
        </div>
        <p className="mb-6 text-sm">
          Rite Window makes it easy and affordable for you to upgrade your
          windows, doors, Kohler showers or baths. In addition to installing
          home improvement products that make your home more attractive and
          energy efficient, we focus on quality! We complete our work quickly
          and stay within your budget, no matter what type of project you have
          in mind!
        </p>
        <a href="/" className=" text-orange-500 font-bold  rounded-md transition text-md underline cursor-pointer">
        KNOW MORE
        </a>
      </div>
      {/* Right Section */}
      <div className="w-full hidden md:block md:w-1/2">
        <img
          src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/09/Copy-of-rendiv5965_Hero_image_of_new_window_ina_new_england_home_for_a__43cfe225-d10e-43b0-bfd0-ac2fbba92591-2.png"
          alt="Window with flowers"
          className="object-cover w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default Delighting;
