function Header() {
  return (
    <>
      <div
        className="bg-black"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <button
            className="btn btn-sm btn-ghost text-sm text-white"
            style={{
              fontFamily: "CustomFont",
              fontSize: "16px",
              color: "white",
              fontWeight: "normal",
            }}
          >
            List Products
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
            List Store
          </button>
        </div>
        <div>
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