import { useContext, useState } from "react";
import Category_HomeBar from "../Category_Handling/Category_HomeBar";
import products from "../Data/Products_Array";

import { useParams } from "react-router-dom";
import UserContext from "../Context/Context";


function Products() {
    
    let {category}=useParams()

    let filterProducts= category?products.filter((data,index)=>data.slug===category):products;


  // let [addToCart,setAddToCart]=useState([])
  // let [new_list,setAddToCart_List]=useState(null)

  let {cart=[],setCart}=useContext(UserContext)


  function HandleAddToCart(data){
   const updatedList=[...cart,data];
   setCart(updatedList);
  }

  // console.log(new_list);
  

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* Category Bar */}
      <Category_HomeBar />

      {/* PREMIUM WRAPPER */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((data,index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=No+Image";
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="mt-3 font-medium text-gray-900">
                {data.name}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-2">
                {data.description}
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                ₹{data.price}
              </p>

                  <div className="flex justify-left px-3 gap-3">

                  <button className="bg-gray-700 w-[40%] mt-3 py-2 rounded-lg hover:bg-red-300 text-white transition">Buy Now</button>

                      <button className="mt-3 w-[40%] bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition" onClick={()=>HandleAddToCart(data)}>
                Add to Cart
              </button>

                  </div>

            
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;
