import { MdOutlineArrowOutward } from "react-icons/md";
import icon from "../assets/Group 1.svg";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mb-0 px-0 mt-[20px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className=" py-0 text-xl">
            <img src={icon} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex py-0 ">
          <ul className="menu text-[#020043] py-0 font-normal text-base menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            style={{ borderRadius: "12px", border: "1px solid #343268" }}
            className=" text-[#020043] flex gap-1 items-center text-base font-medium  px-[28px] py-2"
          >
            <p>Appointment</p>{" "}
            <div>
              <MdOutlineArrowOutward className="text-xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
