import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND INFO */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-2xl font-black tracking-tighter mb-4">
              MY<span className="text-blue-500">SHOP</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Bringing premium snacks and the latest electronics right to your doorstep in West Bengal. Quality you can trust.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/snacks" className="hover:text-blue-400 transition">Snacks & Chips</Link></li>
              <li><Link to="/category/ice-cream" className="hover:text-blue-400 transition">Ice Cream</Link></li>
              <li><Link to="/category/electronics" className="hover:text-blue-400 transition">Electronics</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-blue-400 transition">New Arrivals</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-blue-400 cursor-pointer transition">Contact Us</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer transition">Shipping Policy</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer transition">Returns & Refunds</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer transition">FAQs</span></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Stay Updated</h3>
            <p className="text-xs mb-4">Subscribe to get special offers and first look at new flavors.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition">
                →
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT & TRUST */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs">
            © {new Date().getFullYear()} MyShop Inc. All rights reserved. 
            <span className="block mt-1 text-gray-600">Built with React & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-tighter">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Cookies</span>
          </div>

          {/* SIMPLE PAYMENT ICONS (Placeholders) */}
          <div className="flex gap-3 grayscale opacity-50">
            <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
            <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
            <div className="w-8 h-5 bg-gray-700 rounded-sm"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;