import UserContext from "../Context/Context";
import { useContext, useState } from "react";

function AddToCart() {

  let { cart=[],setCart } = useContext(UserContext);

  // let[afterremove,setAfterRemove]=useState([])


function RemoveHandle(index_value){

let updated=cart.filter((data,index)=>index!==index_value)
setCart(updated)
}

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <h2 className="text-2xl font-semibold mb-6">
        My Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        cart.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-sm rounded-lg p-4 mb-4"
          >
            <img
              src={data.img}
              alt={data.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-medium">
                {data.name}
              </h3>
              <p className="text-gray-500">
                ₹{data.price}
              </p>
            </div>

            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={()=>RemoveHandle(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default AddToCart;
