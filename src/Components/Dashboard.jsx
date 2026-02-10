import { useContext } from "react";
import UserContext from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  // Loading/No User State: Updated for dark theme
  if (!user || Object.keys(user).length === 0) return (
    <div className="flex flex-col min-h-screen bg-[#02040a] items-center justify-center">
      <div className="text-center py-20">
        <p className="text-slate-400 text-lg mb-6">User data not found...</p>
        <button 
          className="bg-cyan-600 text-[#02040a] rounded-xl px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all" 
          onClick={() => navigate('/')}
        >
          Sign Up
        </button>
      </div>
    </div>
  )

  function HandleLogOut() {
    setUser({});
    localStorage.removeItem('user');
    navigate('/')
  }

  function HandleDelete() {
    const confirmDelete = window.confirm('Are you sure you want to permanently delete your account?')
    if (!confirmDelete) return;
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setUser({});
    navigate('/');
  }

  return (
    /* MAIN WRAPPER: Matches global deep theme */
    <div className="bg-[#02040a] min-h-screen py-16 px-4">
      {/* MAIN CONTAINER: Deep Navy Glass Card */}
      <div className="max-w-4xl mx-auto bg-[#0b1120] rounded-[3rem] overflow-hidden border border-white/5">
        
        {/* TOP HEADER SECTION: Profile Avatar & Name */}
        <div className="bg-[#020617]/50 p-10 flex flex-col items-center border-b border-white/5 relative">
          {/* Cyan Glow background for avatar */}
          <div className="absolute top-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
          
          <div className="w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center text-[#02040a] text-4xl font-black mb-6 relative z-10">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-white text-4xl font-black tracking-tighter relative z-10">{user.name}</h2>
          <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3 relative z-10">Account Verified</p>
        </div>

        {/* DETAILS SECTION: Information Grid */}
        <div className="p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em]">Email Address</span>
              <p className="text-slate-100 font-bold text-xl">{user.email || "notset@example.com"}</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em]">Phone Number</span>
              <p className="text-slate-100 font-bold text-xl">{user.phone}</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em]">Age</span>
              <p className="text-slate-100 font-bold text-xl">{user.age || "24"} Years</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em]">Gender</span>
              <p className="text-slate-100 font-bold text-xl uppercase tracking-tighter">{user.gender || "Not Specified"}</p>
            </div>

          </div>

          {/* ACTION BUTTONS: No shadows, high contrast */}
          <div className="mt-16 flex flex-col sm:flex-row gap-5 pt-10 border-t border-white/5">
            
            <button 
              className="flex-1 bg-cyan-600 text-[#02040a] font-black py-5 rounded-2xl hover:bg-cyan-400 active:scale-95 transition-all uppercase tracking-widest text-xs"
              onClick={() => navigate('/cart')}
            >
              Go To Cart
            </button>

            <button className="flex-1 bg-white/5 text-white border border-white/10 font-black py-5 rounded-2xl hover:bg-white/10 active:scale-95 transition-all uppercase tracking-widest text-xs"
              onClick={HandleLogOut}
            >
              Log Out
            </button>
          </div>

          {/* DANGER ZONE */}
          <div className="mt-12 pt-10 border-t border-rose-500/10">
            <h4 className="text-rose-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-center">Danger Zone</h4>
            <button 
              className="w-full bg-rose-500/5 text-rose-500 border border-rose-500/20 font-black py-4 rounded-2xl hover:bg-rose-500 hover:text-white active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs"
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