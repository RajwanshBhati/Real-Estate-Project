import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from "react-icons/md";
//import { RiCheckboxMultipleBlankFill} from "react-icons/md";

const Navbar= ({containerStyles }) => {
  return (
    
      <nav className={`${containerStyles}`}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "active-link flex justify-center gap-x-1 rounded-full px-2 py-1 "
              : "flex justify-center gap-x-1 rounded-full px-2 py-1"
          }
        >
          <MdHomeWork />
          <div>Home</div>
        </NavLink>


        <NavLink
          to={"/listing"}
          className={({ isActive }) =>
            isActive
              ? "active-link flex justify-center gap-x-1 rounded-full px-2 py-1 "
              : "flex justify-center gap-x-1 rounded-full px-2 py-1"
          }
        >
          <MdAddHome />
          <div>listing</div>
        </NavLink>


        <NavLink
          to={"mailto:inquiries.rajwanshbhati@gmail.com"}
          className={ "flex justify-center gap-x-1 rounded-full px-2 py-1 cursor-pointer"
          }
        >
          <MdPermContactCalendar />
          <div>Contact</div>
        </NavLink>



        <NavLink
          to={"/addproperty"}
          className={ "flex justify-center gap-x-1 rounded-full px-2 py-1 cursor-pointer"
          }
        >
          <MdAddHome />
          <div>add Property</div>
        </NavLink>
      </nav>
    
  );
}

export default Navbar;
