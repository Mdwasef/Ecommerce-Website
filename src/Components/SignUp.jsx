import { useState, useContext } from "react"
import UserContext from "../Context/Context";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [signup, setSignUp] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    repassword: '',
    age: ''
  });

  function HandleValue(e) {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value
    });
  }

  function HandleForm(e) {
    e.preventDefault();
    if (signup.password !== signup.repassword) {
      alert('Passwords do not match');
      return;
    }
    setUser(signup);
    navigate('/home');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* FORM CARD */}
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl text-white text-2xl font-black mb-4 shadow-lg shadow-blue-100">
            M
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Join MyShop for the best snacks & electronics</p>
        </div>

        <form className="space-y-5" onSubmit={HandleForm}>
          
          {/* NAME */}
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
            <input 
              type="text" required name="name" placeholder=" "
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              value={signup.name} onChange={HandleValue}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              type="email" required name="email" placeholder="example@gmail.com"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              value={signup.email} onChange={HandleValue}
            />
          </div>

          {/* TWO COLUMN ROW: PHONE & AGE */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone</label>
              <input 
                type="number" required name="phone" placeholder=""
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                value={signup.phone} onChange={HandleValue}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Age</label>
              <input 
                type="number" required name="age" placeholder=""
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                value={signup.age} onChange={HandleValue}
              />
            </div>
          </div>

          {/* GENDER SELECT (Better than text input) */}
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Gender</label>
            <select 
              name="gender" required
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              value={signup.gender} onChange={HandleValue}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* PASSWORDS */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <input 
                type="password" required name="password" placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                value={signup.password} onChange={HandleValue}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Confirm Password</label>
              <input 
                type="password" required name="repassword" placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                value={signup.repassword} onChange={HandleValue}
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 mt-4"
          >
            Create My Account
          </button>

          <p className="text-center text-sm text-gray-500 font-medium">
            Already have an account? <Link to="/home" className="text-blue-600 font-bold hover:underline">Log In</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default SignUp;