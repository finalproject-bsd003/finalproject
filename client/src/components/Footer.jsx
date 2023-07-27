function Footer() {
  return (
    <>
      {/* <div className="flex flex-col min-h-screen pt-12"> */}
      <main className="flex-grow pt-12">
        {/* Your main content goes here */}
        <footer className="footer footer-center p-28 bg-black text-base-content">
          <div className="flex flex-col flex-grow text-white">
            <h3 className="mb-4">
              HACK Community - A constructive and inclusive social network for
              software developers. With you every step of your journey.
            </h3>
            <div className="grid grid-flow-col gap-4">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
          </div>
          <div className="mt-auto text-white">
            <p className="text-center">
              Copyright © 2023 - All right reserved by ACME Industries Ltd
            </p>
          </div>
        </footer>
      </main>
      {/* </div> */}
    </>
  );
}

export default Footer;
