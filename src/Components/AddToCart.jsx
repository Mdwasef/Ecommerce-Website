import UserContext from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function AddToCart() {
  const { cart = [], setCart } = useContext(UserContext);

  // Calculate Total Price using reduce for better performance
  const totalPrice=cart.reduce((total,item)=>{
    return total+Number(item.price)
  },0)

  // Remove Item Function
  function RemoveHandle(index_value) {
    const updated = cart.filter((_, index) => index !== index_value);
    setCart(updated);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg mb-6">Your cart feels a bit light...</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
          >
            Go Shopping
          </Link>
        </div>
      ) : 
      
      
    
      (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT SIDE: CART ITEMS LIST */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((data, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white shadow-sm border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{data.name}</h3>
                  <p className="text-blue-600 font-bold text-lg mt-1">₹{data.price}</p>
                  <p className="text-xs text-green-600 font-medium mt-1 uppercase tracking-tighter">In Stock</p>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="bg-gray-900 text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-black transition">
                    Buy Now
                  </button>
                  <button 
                    className="text-red-500 text-sm font-semibold hover:bg-red-50 px-5 py-2 rounded-lg transition"
                    onClick={() => RemoveHandle(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Items ({cart.length})</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charge</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="flex justify-between border-t pt-4 text-xl font-black text-gray-900">
                <span>Total Amount</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-100">
              Proceed to Checkout
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Secure SSL Encrypted Payment
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default AddToCart;