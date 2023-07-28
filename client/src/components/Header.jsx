import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div
        className="bg-black"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <NavLink to={"/listdress"}>
            <button
              className="btn btn-sm btn-ghost text-sm text-white"
              style={{
                fontFamily: "CustomFont",
                fontSize: "16px",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Products
            </button>
          </NavLink>
          <NavLink to={"/liststore"}>
            <button
              className="btn btn-sm btn-ghost text-sm text-white"
              style={{
                fontFamily: "CustomFont",
                fontSize: "16px",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Stores
            </button>
          </NavLink>
          <NavLink to={"/transaction"}>
            <button
              className="btn btn-sm btn-ghost text-sm text-white"
              style={{
                fontFamily: "CustomFont",
                fontSize: "16px",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Transactions
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/login"}>
            <button
              className="btn btn-sm btn-ghost mr-2 text-sm text-white"
              style={{
                fontFamily: "CustomFont",
                fontSize: "16px",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Login
            </button>
          </NavLink>
          <NavLink to={"/register"}>
            <button
              className="btn btn-sm btn-ghost text-sm text-white"
              style={{
                fontFamily: "CustomFont",
                fontSize: "16px",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
