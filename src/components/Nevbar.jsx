import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nevbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
     <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdClose/>: <FaBars/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2 text-gray-700 font-medium">
            <a href="#home" className="block hover:text-blue-500">Home</a>
            <a href="#about" className="block hover:text-blue-500">About</a>
            <a href="#services" className="block hover:text-blue-500">Services</a>
            <a href="#contact" className="block hover:text-blue-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nevbar