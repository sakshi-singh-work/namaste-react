import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import useUserStatus from "../utils/useUserStatus";
import LoggedInUser from "../utils/LoggedinUserContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const userStatus = useUserStatus();
  const name = useContext(LoggedInUser);
// name.username name.age

  return (
    <div className="flex justify-between shadow-md bg-white  ">
      <img
        className="w-16 pr-2 rounded-lg"
        src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239825.png"
      />

      <div className="flex items-start gap-4 text-black pr-4 pt-2 ">
        <div>{userStatus ? "🟢" : "🔴"}</div>
        <Link to="/" className=" text-black ">
          Home
        </Link>
        <Link to="/about" className=" text-black">
          About
        </Link>
        <Link to="/contact" className=" text-black">
          Contact
        </Link>
        <Link to="/cart" className=" text-black">
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
        <div> {name}</div>
      </div>
    </div>
  );
};

export default Header;
