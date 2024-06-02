import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-2 fixed w-full z-50">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#">
              <img src="src/assets/ToDingOrg.png" className="w-10" alt="" />
            </a>
          </div>
          <ul className="flex p-0 m-0 nav-links">
            <li className="w-20">
              <a
                href="#"
                className="no-underline flex items-center justify-evenly hover:text-purple-org transition-all text-white"
              >
                <i className="fi fi-tr-house-blank flex items-center justify-center"></i>
                خانه من
              </a>
            </li>
            <li className="w-36">
              <a
                href="#"
                className="no-underline flex items-center justify-evenly hover:text-purple-org transition-all text-white"
              >
                <i className="fi fi-tr-to-do flex items-center justify-center"></i>
                برنامه ها
              </a>
            </li>
            <li className="w-36">
              <a
                href="#"
                className="no-underline flex items-center justify-evenly hover:text-purple-org transition-all text-white"
              >
                <i className="fi fi-tr-calendar-days flex items-center justify-center"></i>
                تقویم
              </a>
            </li>
            <li className="w-36">
              <a
                href="#"
                className="no-underline flex items-center justify-evenly hover:text-purple-org transition-all text-white"
              >
                <i className="fi fi-tr-customize flex items-center justify-center"></i>
                تنظیمات
              </a>
            </li>
          </ul>
          <ul className="flex p-0 m-0 items-center">
            <li>
              <button className="bg-header-dark font-bold text-purple-org border-1 transition-all duration-300 ease hover:bg-purple-org hover:text-header-dark border-purple-org p-2 w-10 h-10 rounded-3xl flex items-center justify-evenly">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-header-dark font-bold text-purple-org border-1 transition-all duration-300 ease hover:bg-purple-org hover:text-header-dark border-purple-org p-2 w-10 h-10 rounded-3xl flex items-center justify-evenly mr-2"
              >
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
