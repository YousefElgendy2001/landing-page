import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoNavBar from "../../assets/Images/logoNavBar.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-slate-950 text-white shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
           {/* Auth Links (Always Visible) */}
        <div className="md:flex hidden items-center gap-4">
            <ul className="flex items-center gap-4 border rounded-full px-4 py-2">
              <li>
                <span className="cursor-pointer rounded-full bg-red-600 hover:bg-red-500 text-white px-2 py-1 transition">
                  تواصل التسجيل
                </span>
              </li>
              <li>
                <NavLink to="/request-quote" className="btn-primary">
                  طلب عرض السعر
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Menu Button for Small Screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
          </button>

          {/* Navigation Links */}
          <div className={`md:flex hidden items-center gap-4`}>
            <ul className="flex space-x-8 items-center">
              <li className="nav-item">
                <NavLink className="navLink rounded-full px-2" aria-current="page" to="/about">
                  اتصل بنا
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navLink rounded-full px-2" aria-current="page" to="/contact">
                  المدونه
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navLink rounded-full px-2" aria-current="page" to="/portfolio">
                  الشركاء
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navLink rounded-full px-2" aria-current="page" to="/about-us">
                  من نحن
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navLink rounded-full px-2" aria-current="page" to="/">
                  الرئيسية
                </NavLink>
              </li>
            </ul>
          </div>

         
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
            <img src={logoNavBar} width={200} alt="Logo" className="cursor-pointer" />
          </Link>

        </div>
      </nav>

      {/* Dropdown for Mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl">
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col items-center gap-4 p-4 bg-slate-950 text-white">
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="navLink rounded-full px-2" aria-current="page" to="/about">
                اتصل بنا
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="navLink rounded-full px-2" aria-current="page" to="/contact">
                المدونه
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="navLink rounded-full px-2" aria-current="page" to="/portfolio">
                الشركاء
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="navLink rounded-full px-2" aria-current="page" to="/about-us">
                من نحن
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="navLink rounded-full px-2" aria-current="page" to="/">
                الرئيسية
              </NavLink>
            </li>
            <li>
              <span className="cursor-pointer rounded-full bg-red-600 hover:bg-red-500 text-white px-2 py-1 transition">
                تواصل التسجيل
              </span>
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/request-quote" className="btn-primary">
                طلب عرض السعر
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Spacer under navbar */}
      <div className="pt-20"></div>
    </>
  );
}
