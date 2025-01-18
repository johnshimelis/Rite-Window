import React from "react";
import "../styles/style.css";
import logoImage from "../images/assets/rite-window.png";
import { PhoneIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-28">
      <div className="footer-container container mx-auto">
        {/* Logo Section */}
        <div className="footer-logo-section">
        <img width="650" height="261" alt="" sizes="(max-width: 650px) 100vw, 650px" nitro-lazy-srcset="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo.png 650w, https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo-300x120.png 300w, https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo-149x60.png 149w" nitro-lazy-src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo.png" class="attachment-full size-full wp-image-394 lazyloaded" decoding="async" nitro-lazy-empty="" id="MjUzNjo0MjQ=-1" src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo.png" srcset="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo.png 650w, https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo-300x120.png 300w, https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/2024/08/logo-149x60.png 149w"/>
          <div className="">
            <p className="">
              <a
                href="tel:7819269427"
                className=" py-4 text-3xl  transition duration-300  flex items-center gap-2" // Added flex and gap-2 for proper icon alignment
              >
                <PhoneIcon className="w-16 h-16 text-orange-400 " />{" "}
                {/* Phone icon with white color */}
                <div>
                  <div>781-926-9427</div>
                  <div>
                    <a href="/get-quote" className="text-base">
                      GET QUOTE
                    </a>
                  </div>
                </div>
              </a>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-column-title">HELP</h4>
            <ul>
              <li>
                <a href="/warranty">Warranty</a>
              </li>
              <li>
                <a href="/customer-service">Customer Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">CONTACT US</h4>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/offers">Offers</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
