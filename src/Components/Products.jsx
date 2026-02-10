import { useContext, useState } from "react";
import Category_HomeBar from "../Category_Handling/Category_HomeBar";
import products from "../Data/Products_Array";
import { Link, useParams, useNavigate } from "react-router-dom";
import UserContext from "../Context/Context";

function Products() {
  let navigate = useNavigate();
  let { category } = useParams();
  let { cart = [], setCart } = useContext(UserContext);

  // Filter logic remains unchanged
  let filterProducts = category 
    ? products.filter((data) => data.slug === category) 
    : products;

  function HandleAddToCart(data) {
    const updatedList = [...cart, data];
    setCart(updatedList);
  }

  return (
    /* MAIN WRAPPER: Deep bluish-black to match the global theme */
    <div className="w-full bg-[#020617] min-h-screen">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Category Bar: Integrated without external margins */}
        <Category_HomeBar />

        {/* PRODUCTS SECTION WRAPPER */}
        <div className="px-6 pb-20">
          
          {/* Header Area */}
          <div className="mt-10 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight">
                Premium <span className="text-cyan-500">Collection</span>
              </h2>
              <p className="text-slate-400 mt-2 font-medium">
                Showing {filterProducts.length} high-quality items
              </p>
            </div>
            
            {/* Optional: Simple divider line for style */}
            <div className="hidden md:block h-px flex-grow mx-10 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filterProducts.map((data, index) => (
              <div
                key={index}
                className="group bg-[#0f172a] rounded-[2rem] border border-white/5 p-5 transition-all duration-500 hover:bg-[#161e31] hover:border-cyan-500/30 hover:-translate-y-2 shadow-2xl"
              >
                {/* Image Container with subtle glow on hover */}
                <div className="w-full h-56 overflow-hidden rounded-2xl bg-[#1e293b] relative">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                  />
                  {/* Glass overlay on image hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="mt-5 space-y-2">
                  <h3 className="font-bold text-slate-100 text-lg leading-tight group-hover:text-cyan-400 transition-colors">
                    {data.name}
                  </h3>

                  <p className="text-sm text-slate-400 line-clamp-2 h-10 leading-relaxed">
                    {data.description}
                  </p>

                  <div className="pt-2 flex items-end justify-between">
                    <p className="text-2xl font-black text-white">
                      ₹{data.price}
                    </p>
                    <span className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest mb-1">
                      In Stock
                    </span>
                  </div>
                </div>

                {/* Buttons: High contrast with NO shadows as requested */}
                <div className="flex items-center gap-3 mt-6">
                  <button 
                    className="flex-grow bg-cyan-600 text-[#020617] py-3 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-cyan-400 active:scale-95 transition-all"
                    onClick={() => navigate(`/product_details/${data.product_id}`)}
                  >
                    Buy Now  
                  </button>

                  <button 
                    className="px-4 bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold text-xs hover:bg-white/10 active:scale-95 transition-all" 
                    onClick={() => HandleAddToCart(data)}
                  >
                    + Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;