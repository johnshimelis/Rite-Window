import React from "react";

const OurTeam = () => {
  return (
    <section className=" ">
      <div className="relative py-12  flex-col bg-cover bg-center lg:h-[600px] text-white bg-[url('https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/10/join-our-team-bg.jpg')] justify-center items-center flex">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 ">
          <div className="w-full md:w-1/2 p-8 text-center items-center justify-center container mx-auto">
            <h2 className="text-3xl  mb-4">
              Join One Of The Fastest-Growing Home Improvement Companies In our
              Country
            </h2>
            <div className=" flex w-full justify-center mx-auto md:justify-normal  mb-8 mt-6">
              <img
                width="253"
                height="15"
                className="mx-auto"
                alt=""
                nitro-lazy-src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-349.svg"
                decoding="async"
                nitro-lazy-empty=""
                id="MTgxNToyMDA=-1"
                src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-349.svg"
              />
            </div>
            <p className="mb-6 text-md">
              Looking for a career with a home improvement company that values
              integrity, teamwork, and excellence? Rite Window is hiring!
              Explore opportunities to join our skilled team of installers,
              designers, and customer support specialists.
            </p>
            <button className="bg-orange-700 text-white font-bold py-3 px-16 rounded-md transition text-sm">
              JOIN OUR TEAM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
