import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../stores/actions/actionCreator";
import Navbar from "./Navbar";

function Header() {

  let { isLogin, username } = useSelector((state) => state?.user);
  const access_token = localStorage.getItem("access_token")
  if (access_token && access_token !== "undefined") {
    isLogin = true
  }
  console.log(access_token)
  console.log(isLogin)
  console.log(username)

  const dispatch = useDispatch()

  const logoutHandler = (event) => {
    event.preventDefault()
    dispatch(logout())
  }

  const { role } = useSelector((state) => state?.user);

  return (
    <>
      <div
        className="bg-black"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {role === "Admin" &&
          < div >
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
        }
        {isLogin &&
          <div>
            <h1 className=" text-white ">{username}</h1>
            <h1 onClick={logoutHandler} className=" text-white ">logout</h1>
          </div>}
        {!isLogin &&
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
        }
      </div>
    </>
  );
}

export default Header;
