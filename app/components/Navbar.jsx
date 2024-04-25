'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClickLink = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setToggle(false); // Close the mobile menu after clicking a navlink
    }
  };

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: 'Scrims',
      title: "About",
    },
    {
      id: "Team",
      title: "Teams",
    },
    {
      id: "live",
      title: "Scrims",
    },
    {
      id: "social",
      title: "Social",
    },
  ];

  return (
    <nav className="w-full flex px-2 py-1 justify-between items-center fixed top-0 z-10 bg-black shadow-sm shadow-gray-900">
      <img src="../logo.png" alt="MOONLIT" className="w-[80px] h-[80px]" />

      {/* Desktop view */}
      <ul className="hidden sm:flex justify-end items-center">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-semibold cursor-pointer text-[16px] text-white mr-8 px-4 py-1 hover:text-violet-400 hover:underline underline-offset-8 decoration-4"
            onClick={() => handleClickLink(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Mobile view */}
      <div className="sm:hidden relative">
        {toggle && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center" onClick={handleClick}>
            <FaTimes
              className="w-[28px] h-[28px] text-white cursor-pointer absolute top-2 right-2"
            />
            <ul className="text-white text-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`py-4 cursor-pointer ${index !== navLinks.length - 1 ? 'border-b border-gray-500' : ''} hover:text-violet-400 hover:underline underline-offset-8`}
                  onClick={() => handleClickLink(nav.id)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        {!toggle && (
          <FaBars
            className="w-[28px] h-[28px] text-white cursor-pointer absolute top-2 right-2"
            onClick={handleClick}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
