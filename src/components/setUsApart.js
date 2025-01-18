const SetUsApart = () => {
    return (
      <section className="py-12 bg-[#00365b]">
        <div className="container mx-auto">
          <h1 className="text-center font-thin text-4xl sm:text-3xl text-white">
            WHAT SETS US APART?
          </h1>
          <div className="flex w-full justify-center mx-auto mb-16 mt-8">
            <img
              width="253"
              height="15"
              alt=""
              src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-349.svg"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {/* Card 1 */}
            <div className="grid justify-center mx-auto">
              <div className="flex mx-auto">
                <img
                  className="w-16 h-16"
                  title="projects"
                  alt="projects"
                  src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/elementor/thumbs/projects-qv28hj6w0ri6d3o8xbhddaf3az4rrq7hzch5x0q1gm.png"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div className="text-center text-white">
                  <h3 className="text-5xl sm:text-4xl font-light mb-5">50,000+</h3>
                  <p className="mt-2 font-thin text-md sm:text-sm">
                    PROJECTS COMPLETED
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="grid justify-center mx-auto">
              <div className="flex mx-auto">
                <img
                  className="w-16 h-16"
                  title="20yrs"
                  alt="20yrs"
                  src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/elementor/thumbs/20yrs-qv28gsvepei5c0qh703tfh26o6qhs7b0jq7kh9t2au.png"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div className="text-center text-white">
                  <h3 className="text-5xl sm:text-4xl font-light mb-5">20</h3>
                  <p className="mt-2 font-thin text-md sm:text-sm">
                    YEARS IN BUSINESS
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="grid justify-center mx-auto">
              <div className="flex mx-auto">
                <img
                  className="w-16 h-16"
                  title="customers"
                  alt="customers"
                  src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/elementor/thumbs/customers-qv28hdjuvragffwfu91lybubqnwkhjl3ykk91cyehy.png"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div className="text-center text-white">
                  <h3 className="text-5xl sm:text-4xl font-light mb-5">
                    40,000+
                  </h3>
                  <p className="mt-2 font-thin text-md sm:text-sm">
                    HAPPY CUSTOMERS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SetUsApart;
  