import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function Navbar() {
  return (
    // We use the SAME color as your HomePage to make the gap invisible
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0f172a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/home">
          <h1 className="text-xl font-black text-white tracking-tight">
            MY<span className="text-blue-400">SHOP</span>
          </h1>
        </Link>

        <div className="flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link to="/home" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          <Link to="/cart" className="hover:text-blue-400 transition-colors">Cart</Link>

          <Link
            to="/dashboard"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-400 transition-all font-bold"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;