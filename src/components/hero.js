import React from "react";
import "../styles/style.css";
import superServiceImage from "../images/assets/super.png";
import BBBAccreditedImage from "../images/assets/BBB.webp";
import warrantyImage from "../images/assets/warranty.webp";

const Hero = () => {
  return (
    <section className="mb-8 lg:mb-16">
      <div className="relative flex flex-col items-center bg-cover bg-center lg:h-[500px] text-white bg-[url('./images/assets/window2.webp')]">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10">
          <div className="grid lg:flex justify-center items-start mt-10 gap-16">
            {/* Left Side Content - Moved to Top */}
            <div className="grid text-center lg:text-left gap-4 lg:mt-32 mt-28">
            <h1 className="text-3xl lg:text-5xl text-white mb-4 mx-auto lg:ml-16 text-center lg:text-left">
  Replacement Windows
</h1>

  <p className="text-lg lg:text-xl text-white mb-6">
    Upgrade Your Home's Efficiency with Premium Replacement Windows
  </p>
  <div className="hero-badges flex justify-center lg:justify-start gap-4">
    <img
      src={superServiceImage}
      alt="Super Service"
      className="w-24"
    />
    <img
      src={BBBAccreditedImage}
      alt="BBB Accredited"
      className="w-24"
    />
    <img
      src={warrantyImage}
      alt="Warranty Certified"
      className="w-24"
    />
  </div>
</div>

            {/* Right Side Content - Form with Blue Background */}
            <div className="bg-[#00365b] shadow-md shadow-orange-500 grid text-center p-8 mx-auto max-w-lg">
              <h2 className="text-2xl lg:text-3xl text-white mb-4 mx-auto">
                SAVE UP TO THOUSANDS OFF YOUR PROJECT
              </h2>
              <p className="text-lg lg:text-sm text-gray-100 mb-4">
                18 months no interest no payments
              </p>
              <p className="text-white text-md py-2 mx-auto border-2 w-fit px-10 border-orange-500 mb-4">
                Offer expires 1/31/25
              </p>
              <form className="space-y-3 mx-auto">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Project Description"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                  rows="3"
                ></textarea>
                <div className="flex items-start space-x-2 text-gray-100">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-xs text-left">
                    By clicking "Get Free Pricing," you are authorizing Rite
                    Window to deliver telemarketing promotions for home
                    improvement products or services by email or by using an
                    automatic telephone dialing system...
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
                >
                  Get Free Pricing
                </button>
              </form>
              <div className="footer-links mt-4 text-sm flex justify-center space-x-1">
                <a
                  href="#terms"
                  className="text-gray-600 hover:text-orange-500"
                >
                  Terms & Conditions
                </a>
                <span>|</span>
                <a
                  href="#privacy"
                  className="text-gray-600 hover:text-orange-500"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
