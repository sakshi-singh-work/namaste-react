import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import useUserStatus from "../utils/useUserStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const userStatus = useUserStatus();

  return (
    <div className="flex justify-between  shadow-md ">
      <img
        className="w-16 pr-2 rounded-lg"
        src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239825.png"
      />
      <div className="flex items-start gap-4 text-white pr-4 pt-2 ">
        {userStatus ? "🟢" : "🔴"}
        <Link to="/" className=" text-white ">
          Home
        </Link>
        <Link to="/about" className=" text-white">
          About
        </Link>
        <Link to="/contact" className=" text-white">
          Contact
        </Link>
        <Link to="/cart" className=" text-white">
          {" "}
          Cart
        </Link>
        <button
          className="w-8"
          onClick={() =>
            btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
          }
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;
