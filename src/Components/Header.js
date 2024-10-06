import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loginUserId } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between shadow-md bg-blue-100">
      <div className="w-28">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex m-5">
          <li className="px-4 hover:text-gray-400">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4  hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-gray-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:text-gray-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:text-gray-400 font-bold">
          <Link to="/cart">Cart - ({cartItems.length})Items </Link>
          </li>
          <button
            className="px-4  hover:text-gray-400"
            onClick={() => {
              loginBtn == "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="font-bold">{loginUserId}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
