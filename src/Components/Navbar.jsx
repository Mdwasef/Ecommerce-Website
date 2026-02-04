import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-lg font-semibold text-gray-800">
          MyShop
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-600">

          <Link
            to="/home"
            className="text-gray-700 no-underline hover:text-black hover:no-underline transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 no-underline hover:text-black hover:no-underline transition"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 no-underline hover:text-black hover:no-underline transition"
          >
            Contact
          </Link>

          <Link
            to="/cart"
            className="text-gray-700 no-underline hover:text-black hover:no-underline transition"
          >
            Cart
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 no-underline border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100 hover:text-black hover:no-underline transition"
          >
            Dashboard
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
