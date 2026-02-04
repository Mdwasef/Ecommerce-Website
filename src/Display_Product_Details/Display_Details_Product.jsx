import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import products from "../Data/Products_Array";

import UserContext from "../Context/Context";

function Display_Details_Product() {

  const { product_name } = useParams();

  let navigate=useNavigate();

  let {cart=[],setCart}=useContext(UserContext);
  
  // Note: Using find on product_id as per your logic
  const product = products.find((data) => data.product_id === product_name);

function HandleAdd(product){
let updated=[...cart,product];
setCart(updated);
navigate('/cart');
}

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* BREADCRUMB - Helpful for UX */}
        <nav className="flex mb-8 text-sm text-gray-500 uppercase tracking-wider">
          <Link to="/home" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-semibold">{product.category}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            
            {/* LEFT COLUMN: IMAGE */}
            <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="relative group">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto max-h-112.5 object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Sale Tag Badge */}
                <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  New Arrival
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              
              <div className="mb-4">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                  {product.category}
                </span>
                <h1 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* STAR RATING (Static for UI look) */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm ml-2">(4.8 / 5 Customer Reviews)</span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex items-center mb-10">
                <span className="text-4xl font-black text-gray-900">₹{product.price}</span>
                <span className="ml-4 text-gray-400 line-through text-xl">₹{product.price + 200}</span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200">
                  Buy Now
                </button>
                <button className="flex-1 bg-white text-gray-900 border-2 border-gray-900 text-lg font-bold py-4 rounded-xl hover:bg-gray-900 hover:text-white active:scale-95 transition-all" 
                onClick={()=>HandleAdd(product)}
                >
                  Add to Cart
                </button>
              </div>

              {/* TRUST BADGE FOOTER */}
              <div className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  ✅ Fast Delivery in West Bengal
                </div>
                <div className="flex items-center gap-2">
                  🛡️ 7 Days Return Policy
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