import { useNavigate } from "react-router-dom";
import categories from "../Data/categories";
import {useState} from "react";


function Category_HomeBar() {
let navigate=useNavigate()

let [selected,setSelect]=useState(null)


  return (
    <div className="max-w-7xl mx-auto px-4 my-6">
      
      {/* Wrapper with shadow */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">

        <div className="flex gap-6 overflow-x-auto scrollbar-hide justify-start sm:justify-center" id='category_homebar'>

          {categories.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
              onClick={()=>
                   {
                    navigate(`/products/${data.slug}`);
                    setSelect(data.slug);
                   }}
            >
              <div className={`w-20 h-20 rounded-full overflow-hidden border  ${selected===data.slug?"border-4 border-blue-400" :"border-gray-200"} shadow-sm group-hover:shadow-md transition`}>
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <p className="mt-2 text-sm font-medium text-gray-700 group-hover:text-black transition">
                {data.name}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Category_HomeBar;
