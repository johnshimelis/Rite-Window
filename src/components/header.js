import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logoImage from "../images/assets/rite-window.png";
import { PhoneIcon } from "@heroicons/react/solid";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "WINDOW" },
    { label: "DOORS" },
    { label: "BATHROOM" },
    { label: "ABOUT US" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-10 py-5">
        {/* Logo */}
        <div className="flex items-center">
          <img
            title="logo 4"
            alt="logo 4"
            src="https://cdn-jijcf.nitrocdn.com/XBJDJfCxYCPsGtNzapqaiXHhnvnkwOpu/assets/images/optimized/rev-f3cdeea/ritewindow.com/wp-content/uploads/elementor/thumbs/logo-4-qv0mtaer3n4az3oeiunellnlr72k13xrfykc3l9rdk.png"
          />
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.label.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-800 font-semibold hover:underline transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <a
            href="tel:7819269427"
            className="bg-orange-500 text-white px-5 py-4 rounded-md text-sm hover:bg-orange-600 transition duration-300 shadow-md flex items-center gap-2"
          >
            <PhoneIcon className="w-5 h-5 text-white" />
            781-926-9427
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMobileMenuOpen}
        as={React.Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 -translate-y-2"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 -translate-y-2"
      >
        <div className="lg:hidden absolute w-full bg-gray-200 shadow-lg z-50">
          <nav className="px-6 pt-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.label.toLowerCase().replace(/ /g, "-")}`}
                className="block py-4 text-gray-800 font-semibold hover:bg-orange-500 hover:text-white transition duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:7819269427"
              className="bg-orange-500 text-white px-5 py-4 rounded-md text-sm hover:bg-orange-600 transition duration-300 shadow-md flex items-center gap-2 mb-4"
            >
              <PhoneIcon className="w-5 h-5 text-white" />
              781-926-9427
            </a>
          </nav>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
