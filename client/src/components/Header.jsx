function Header() {
  return (
    <>
      <div className="flex justify-between bg-base-300 ">
        <a className="btn btn-sm btn-ghost normal-case text-xl">LOGO</a>
        <div className="flex justify-end">
          <button className="btn btn-sm btn-ghost mr-2 text-sm">Login</button>
          <button className="btn btn-sm btn-ghost text-sm">Register</button>
        </div>
      </div>
    </>
  );
}

export default Header;
