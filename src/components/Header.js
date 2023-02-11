import logo from "../img/hamburger.png";
import img from "../img/selection-of-chinese-food-that-may-cause-chinese-restaurant-syndrome.jpg";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const Title = () => {
  return (
    <div className="">
      <a href="/">
        <img className="header-img  w-11 m-1" src={logo} />
      </a>
    </div>
  );
};

const Header = () => {
  const isOnline = useOnline();
  return (
    <>
      <div className="flex justify-around w-full text-sm shadow-bottom-md p-1">
        <Title />

        <div className="">
          <ul className="flex justify-between items-center text-stone-800 ">
            <Link to="/">
              <li className="m-3 hover:text-orange-500 ease-in duration-200">Home</li>
            </Link>
            <Link to="/about">
              <li className="m-3 hover:text-orange-500 ease-in duration-200">About</li>
            </Link>
            <Link to="/contact">
              <li className="m-3 hover:text-orange-500 ease-in duration-200">Contact</li>
            </Link>
            <Link to="/instamart">
              <li className="m-3 hover:text-orange-500 ease-in duration-200">Instamart</li>
            </Link>
            <li className="m-3 hover:text-orange-500 ease-in duration-200">
              User<span>{isOnline ? "🟢" : "🔴"}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
