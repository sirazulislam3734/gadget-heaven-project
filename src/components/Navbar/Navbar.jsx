import { NavLink, useLocation } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { getAll } from "../Utils";
import { useEffect, useState } from "react";
import { getAllWish } from "../utils/index2";


const Navbar = () => {
  const location = useLocation()
  const [cardsLength, setCardsLength] = useState([]);
  const [wishsLength, setWishsLength] = useState([]);
  console.log(location.pathname);
  useEffect(() => {
    const wishList = getAllWish();
    const cardLength = getAll();
    setCardsLength(cardLength)
    setWishsLength(wishList)
  },[cardsLength,wishsLength])
    return (
        <div>
            <div className={location.pathname === "/statistics" || location.pathname === '/dashboard'?"navbar container mx-auto text-purple-600 px-24 bg-white": "navbar container mx-auto bg-purple-600 px-24 text-white"}>
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
          </div>
          <a className="font-bold text-2xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl gap-8 px-2 ">
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/statistics">
              <a>Statistics</a>
            </NavLink>
            <NavLink to="/dashboard">
              <a>Dashboard</a>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-3">
        <NavLink to='/dashboard'>
        <button className="bg-white text-xl relative text-black p-3 rounded-full"><MdOutlineShoppingCart></MdOutlineShoppingCart><span className="absolute top-0 rounded-full right-2 font-bold text-red-700 text-sm bg-">{cardsLength.length}</span></button>
        </NavLink>
        <NavLink to='/dashboard'>
        <button className="bg-white text-xl relative text-black p-3 rounded-full"><IoMdHeartEmpty />
        <span className="absolute top-0 rounded-full right-2 font-bold text-red-700 text-sm bg-">{wishsLength.length}</span>
        </button>
        </NavLink>
        </div>
      </div>
        </div>
    );
};

export default Navbar;