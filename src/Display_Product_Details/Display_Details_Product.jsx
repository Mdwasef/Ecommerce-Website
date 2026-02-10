import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import products from "../Data/Products_Array";
import UserContext from "../Context/Context";

function Display_Details_Product() {
  const { product_name } = useParams();
  let navigate = useNavigate();
  let { cart = [], setCart } = useContext(UserContext);

  const product = products.find((data) => data.product_id === product_name);

  function HandleAdd(product) {
    let updated = [...cart, product];
    setCart(updated);
    navigate('/cart');
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#02040a] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-black text-white">Product not found</h1>
        <Link to="/products" className="bg-cyan-600 text-[#02040a] px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    /* MAIN WRAPPER: Matches global deep theme */
    <div className="bg-[#02040a] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* BREADCRUMB: Silver/Slate text */}
        <nav className="flex mb-8 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
          <Link to="/home" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span className="mx-3 text-slate-700">/</span>
          <span className="text-slate-300">{product.category}</span>
        </nav>

        {/* PRODUCT CARD: Deep Navy Glass Container */}
        <div className="bg-[#0b1120] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row">
            
            {/* LEFT COLUMN: IMAGE AREA */}
            <div className="w-full md:w-1/2 bg-[#020617]/50 p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative">
              {/* Radial glow behind the image */}
              <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full"></div>
              
              <div className="relative group">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto max-h-[450px] object-contain transform group-hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-2xl"
                />
                <span className="absolute -top-4 -left-4 bg-cyan-600 text-[#02040a] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20">
                  New Arrival
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              
              <div className="mb-6">
                <span className="text-cyan-500 font-black text-xs uppercase tracking-[0.3em]">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight tracking-tighter">
                  {product.name}
                </h1>
              </div>

              {/* STAR RATING */}
              <div className="flex items-center mb-8">
                <div className="flex text-cyan-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-slate-500 text-xs font-bold ml-4 uppercase tracking-widest">(4.8 / 5 Reviews)</span>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                {product.description}
              </p>

              <div className="flex items-center mb-12">
                <span className="text-5xl font-black text-white">₹{product.price}</span>
                <span className="ml-6 text-slate-600 line-through text-2xl font-bold">₹{product.price + 200}</span>
              </div>

              {/* ACTION BUTTONS: Flat/High-Contrast */}
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="flex-1 bg-cyan-600 text-[#02040a] text-sm font-black py-5 rounded-2xl hover:bg-cyan-400 active:scale-95 transition-all uppercase tracking-widest">
                  Buy Now
                </button>
                <button 
                  className="flex-1 bg-white/5 text-white border border-white/10 text-sm font-black py-5 rounded-2xl hover:bg-white/10 active:scale-95 transition-all uppercase tracking-widest" 
                  onClick={() => HandleAdd(product)}
                >
                  Add to Cart
                </button>
              </div>

              {/* TRUST BADGE FOOTER */}
              <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[10px] text-slate-500 font-black uppercase tracking-[0.15em]">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-500 text-lg">⚡</span>
                  Express Delivery
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-500 text-lg">🛡️</span>
                  7 Days Returns
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display_Details_Product;