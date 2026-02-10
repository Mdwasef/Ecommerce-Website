import { useNavigate } from "react-router-dom";
import categories from "../Data/categories";
import { useState } from "react";

function Category_HomeBar() {
  let navigate = useNavigate();
  let [selected, setSelect] = useState(null);

  return (
    /* Changed 'my-6' to 'pt-6 pb-2' to remove the white gap */
    /* Changed bg to the 'bluish' Navy color (#0f172a) */
    <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 bg-[#0f172a]">
      
      {/* Wrapper with a slightly lighter navy for depth */}
      <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl p-6">

        <div className="flex gap-8 overflow-x-auto scrollbar-hide justify-start sm:justify-center" id='category_homebar'>

          {categories.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group min-w-[90px]"
              onClick={() => {
                navigate(`/products/${data.slug}`);
                setSelect(data.slug);
              }}
            >
              <div className={`
                w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300
                ${selected === data.slug 
                  ? "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] scale-105" 
                  : "border-slate-700 group-hover:border-slate-500"}
              `}>
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <p className={`
                mt-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300
                ${selected === data.slug ? "text-blue-400" : "text-slate-400 group-hover:text-white"}
              `}>
                {data.name}
              </p>
              
              {selected === data.slug && (
                <div className="w-1 h-1 bg-blue-400 rounded-full mt-1 animate-pulse"></div>
              )}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Category_HomeBar;