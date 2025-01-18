import React from "react";
import "../styles/style.css";

const Location = () => {
  const locations = [
    {
      title: "WOBURN",
      address: "7 Roessler Rd.",
      city: "Woburn, MA, 01801",
    },
    {
      title: "PLAINVILLE",
      address: "109 Washington St.",
      city: "Plainville, MA, 02762",
    },
    {
      title: "EXETER",
      address: "41 Industrial Dr. #9",
      city: "Exeter, NH, 03833",
    },
    {
      title: "CONNECTICUT",
      address: "800 Marshall Phelps Rd Building 4",
      city: "Windsor, CT",
    },
  ];

  const socialIcons = [
    { name: "facebook", url: "#" },
    { name: "instagram", url: "#" },
    { name: "youtube", url: "#" },
  ];

  return (
    <div className="location-container container mx-auto">
      <h2 className="location-heading">OUR LOCATIONS</h2>
      <div className=" flex w-full justify-center mx-auto mb-5 mt-8">
          <img
            width="253"
            height="15"
            alt=""
            nitro-lazy-src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-348.svg"
            class=""
            decoding="async"
            nitro-lazy-empty=""
            id="MTU3MToyMDA=-1"
            src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-6001b0a/ritewindow.com/wp-content/uploads/2024/08/Group-348.svg"
          />
        </div>
      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <h3>{location.title}</h3>
            <p className="address">{location.address}</p>
            <p className="city">{location.city}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            className={`social-icon ${icon.name}`}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Location;
