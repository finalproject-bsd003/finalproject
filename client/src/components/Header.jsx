function Header() {
  return (
    <>
      <div className="flex justify-between bg-black ">
        <a className="btn btn-sm btn-ghost normal-case text-xl text-white">
          LOGO
        </a>
        <div className="flex justify-end">
          <button className="btn btn-sm btn-ghost mr-2 text-sm text-white">
            Login
          </button>
          <button className="btn btn-sm btn-ghost text-sm text-white">
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
