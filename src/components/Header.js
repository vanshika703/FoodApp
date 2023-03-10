import logo from "../img/hamburger.png";
import userImg from "../img/user.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useonline";
/* import { useContext } from "react";
import UserContext from "../utils/UserContext"; */
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div className="">
      <a href="/">
        <img className="header-img  w-14 m-1" src={logo} />
      </a>
    </div>
  );
};

const Header = () => {
  const isOnline = useOnline();
  /* const { user } = useContext(UserContext); */

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const calculateQty = () => {
    return cartItems?.map((items) => items.quantity).reduce((a, b) => a + b, 0);
  };

  console.log("cart", cartItems);
  return (
    <>
      <div className="flex justify-around w-full text-xs sm:text-base shadow-md p-1 font-medium sticky top-0 bg-slate-50 z-10">
        <Title />

        <div className="">
          <ul className="flex justify-between items-center text-stone-800 ">
            <Link to="/">
              <li className="m-5 hover:text-orange-500 ease-in duration-200">Home</li>
            </Link>
            <Link to="/about">
              <li className="m-5 hover:text-orange-500 ease-in duration-200">About</li>
            </Link>
            {/* <Link to="/contact">
              <li className="m-5 hover:text-orange-500 ease-in duration-200">Contact</li>
            </Link>
            <Link to="/instamart">
              <li className="m-5 hover:text-orange-500 ease-in duration-200">Instamart</li>
            </Link> */}
            <Link to="/cart">
              <li className="m-5 hover:text-orange-500 ease-in duration-200">
                Cart - {calculateQty()} items
              </li>
            </Link>
            <li className="m-5 hover:text-orange-500 ease-in duration-200">
              <p>
                <span>🧑‍🦰{isOnline ? "🟢" : "🔴"}</span>
              </p>
            </li>
          </ul>
        </div>
        {/*  <p>{user.name} - {user.email}</p> */}
      </div>
      <div className="text-center">{isOnline ? "" : "🔴 Connection Error"}</div>
    </>
  );
};

export default Header;
