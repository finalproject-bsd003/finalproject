function Header() {
  return (
    <>
      {/* <div className="flex justify-end bg-black ">
        <div className="flex justify-end">
          <button className="btn btn-sm btn-ghost mr-2 text-sm text-white text">
            Login
          </button>
          <button className="btn btn-sm btn-ghost text-sm text-white">
            Register
          </button>
        </div>
      </div> */}
      <div className="flex justify-end bg-black">
        <div className="flex justify-end">
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
        </div>
      </div>
    </>
  );
}

export default Header;
