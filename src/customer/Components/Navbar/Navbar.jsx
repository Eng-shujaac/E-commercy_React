import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavigation, setIsNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-white text-lg">
                Shop With Zosh
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link
                  to="/men"
                  className="font-medium text-white hover:text-black"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="font-medium text-white hover:text-black"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="font-medium text-white hover:text-black"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/home-living"
                  className="font-medium text-white hover:text-black"
                >
                  Home & Living
                </Link>
              </li>
              <li>
                <Link
                  to="/beauty"
                  className="font-medium text-white hover:text-black"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="font-medium text-white hover:text-black"
                >
                  Offers
                </Link>
              </li>
            </ul>

            {/* Search bar */}
            <form className="hidden md:block flex-grow max-w-sm">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:text-gray-900 sm:text-sm"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </form>

            <div className="flex">
              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

            {/* Mobile navigation menu */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            <li>
              <Link
                to="/men"
                className="font-medium text-white hover:text-black"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="font-medium text-white hover:text-black"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="font-medium text-white hover:text-black"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/home-living"
                className="font-medium text-white hover:text-black"
              >
                Home & Living
              </Link>
            </li>
            <li>
              <Link
                to="/beauty"
                className="font-medium text-white hover:text-black"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="font-medium text-white hover:text-black"
              >
                Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}
export default Navbar;
