import React from "react";

const FreeQuoteSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#00365b] text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 text-center md:text-left container mx-auto">
        <h2 className="text-2xl font-bold mb-4">LET'S GET YOU A FREE QUOTE</h2>
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
          Ready to start your next home remodeling project? Schedule a
          no-obligation consultation with our experts today. We'll work with you
          to design a solution that fits your needs, style, and budget.
        </p>
        <button className="bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition text-sm">
          SCHEDULE A FREE CONSULTATION
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full hidden md:block md:w-1/2">
        <img
          src="https://ritewindow.com/wp-content/uploads/2024/09/image-20240913-183355-1.png"
          alt="Window with flowers"
          className="object-cover w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default FreeQuoteSection;
