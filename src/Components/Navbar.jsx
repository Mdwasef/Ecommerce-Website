import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Added 'sticky' and 'backdrop-blur' for a premium modern feel
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo - Increased size and added branding color */}
        <Link to="/home" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-black text-gray-900 tracking-tight">
            MY<span className="text-blue-600">SHOP</span>
          </h1>
        </Link>

        {/* Links - Improved spacing and interaction states */}
        <div className="flex items-center gap-8 text-sm font-semibold text-gray-600">

          <Link
            to="/home"
            className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/cart"
            className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:text-blue-600"
          >
            Cart
          </Link>

          {/* Dashboard - Styled as a primary action button */}
          <Link
            to="/dashboard"
            className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-black hover:shadow-lg active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Dashboard
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;