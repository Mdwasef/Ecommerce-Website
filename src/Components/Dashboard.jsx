import { useContext } from "react";
import UserContext from "../Context/Context";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const { user,setUser } = useContext(UserContext);

  let navigate = useNavigate();
  // If user data isn't available yet, show a clean loading state

 if (!user || Object.keys(user).length === 0) return (
  <div className="flex flex-col">

 <div className="text-center py-20 text-gray-500">
  Go to Sign Up...

 <button className="bg-blue-400 rounded-lg p-2 text-white" onClick={()=>navigate('/')}>Sign Up</button>

 </div>


   </div>
 )


function HandleLogOut(){
  setUser({});
  localStorage.removeItem('user');
  navigate('/')
}

function HandleDelete(){

const confirmDelete=window.confirm('Are you sure you want to permanently delete your account?')

if(!confirmDelete)return;

  localStorage.removeItem('user');
  localStorage.removeItem('cart');
  setUser({});
  navigate('/');
}


  return (
    <div className="bg-gray-50 min-h-full py-12 px-4">
      {/* MAIN CONTAINER */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* TOP HEADER SECTION: Profile Avatar & Name */}
        <div className="bg-gray-900 p-8 flex flex-col items-center border-b border-gray-800">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-black mb-4 shadow-lg border-4 border-gray-800">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-white text-3xl font-black tracking-tight">{user.name}</h2>
          <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mt-1">Customer Dashboard</p>
        </div>

        {/* DETAILS SECTION: Information Grid */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
            
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Email Address</span>
              <p className="text-gray-900 font-semibold text-lg">{user.email || "notset@example.com"}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Phone Number</span>
              <p className="text-gray-900 font-semibold text-lg">{user.phone}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Age</span>
              <p className="text-gray-900 font-semibold text-lg">{user.age || "24"} Years</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Gender</span>
              <p className="text-gray-900 font-semibold text-lg uppercase tracking-tighter">{user.gender || "Not Specified"}</p>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
            
            <button 
              className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100"
              onClick={() => navigate('/cart')}
            >
              Go To Add To Cart
            </button>

            <button className="flex-1 bg-white text-gray-700 border-2 border-gray-300 font-bold py-4 rounded-2xl hover:bg-gray-100 active:scale-95 transition-all"
            onClick={HandleLogOut}
            >
              Log Out Account
            </button>
          </div>

          {/* DANGER ZONE: Delete Account */}
          <div className="mt-8 pt-8 border-t border-red-100">
            <h4 className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-center">Danger Zone</h4>
            <button 
              className="w-full bg-red-50 text-red-600 border border-red-200 font-bold py-3 rounded-2xl hover:bg-red-600 hover:text-white active:scale-95 transition-all duration-300"
              onClick={HandleDelete}
            >
              Delete My Account
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;