'use client'
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggle]);

  const handleClick = (id) => {
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

      <ul ref={menuRef} className={`list-none sm:flex hidden justify-end items-center flex-1 ${toggle ? '' : 'hidden'}`}>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-semibold cursor-pointer text-[16px] text-white mr-8 px-4 py-1 hover:text-violet-400 hover:underline underline-offset-8 decoration-4"
            onClick={() => handleClick(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <FaTimes
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FaBars
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
