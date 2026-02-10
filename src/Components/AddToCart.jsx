import UserContext from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function AddToCart() {
  const { cart = [], setCart } = useContext(UserContext);

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  // Remove Item Function
  function RemoveHandle(index_value) {
    const updated = cart.filter((_, index) => index !== index_value);
    setCart(updated);
  }

  return (
    /* MAIN WRAPPER: Matches global deep theme */
    <div className="w-full bg-[#020617] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-10 text-white tracking-tight">
          Your <span className="text-cyan-500">Cart</span>
        </h2>

        {cart.length === 0 ? (
          /* EMPTY STATE: Deep navy glass styling */
          <div className="text-center py-24 bg-[#0b1120] rounded-[2.5rem] border border-dashed border-white/10">
            <p className="text-slate-400 text-xl mb-8 font-medium">Your cart feels a bit light...</p>
            <Link 
              to="/products" 
              className="bg-cyan-600 text-[#02040a] px-10 py-4 rounded-2xl font-black hover:bg-cyan-400 transition-all uppercase tracking-wider text-sm shadow-xl shadow-cyan-500/10"
            >
              Go Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* LEFT SIDE: CART ITEMS LIST */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-[#0b1120] border border-white/5 rounded-[2rem] p-6 hover:border-cyan-500/20 transition-all shadow-2xl"
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-28 h-28 object-cover rounded-2xl bg-[#1e293b]"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100">{data.name}</h3>
                    <p className="text-cyan-400 font-black text-2xl mt-1">₹{data.price}</p>
                    <p className="text-[10px] text-emerald-400 font-black mt-2 uppercase tracking-[0.2em]">In Stock</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="bg-white/5 text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                      Buy Now
                    </button>
                    <button 
                      className="text-rose-500 text-xs font-bold hover:bg-rose-500/10 px-6 py-3 rounded-xl transition-all"
                      onClick={() => RemoveHandle(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE: ORDER SUMMARY */}
            <div className="bg-[#0b1120] rounded-[2.5rem] border border-white/5 p-8 sticky top-28 shadow-2xl">
              <h3 className="text-2xl font-black mb-8 text-white border-b border-white/5 pb-6">Summary</h3>
              
              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Items ({cart.length})</span>
                  <span className="text-slate-200">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Delivery</span>
                  <span className="text-emerald-400 font-black">FREE</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-6 text-2xl font-black text-white">
                  <span>Total</span>
                  <span className="text-cyan-500">₹{totalPrice}</span>
                </div>
              </div>

              {/* Action Button: High contrast Cyan with NO shadow as requested */}
              <button className="w-full bg-cyan-600 text-[#02040a] font-black py-5 rounded-2xl hover:bg-cyan-400 transition-all uppercase tracking-widest text-sm">
                Proceed to Checkout
              </button>
              
              <p className="text-center text-[10px] text-slate-500 mt-6 uppercase tracking-[0.2em] font-bold">
                🔒 Secure SSL Encrypted
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default AddToCart;