import { useState, useContext } from "react";
import UserContext from "../Context/Context";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    repassword: "",
    age: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  // Handle Input Change
  function HandleValue(e) {
    const { name, value } = e.target;
    setSignUp({ ...signup, [name]: value });
  }

  // Handle Submit
  function HandleForm(e) {
    e.preventDefault();

    if (signup.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (signup.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (signup.password !== signup.repassword) {
      alert("Passwords do not match");
      return;
    }

    setUser(signup);
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-3xl p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl 
                          text-white text-2xl font-bold flex items-center 
                          justify-center mb-3">
            M
          </div>

          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-gray-500">Join MyShop today</p>
        </div>

        <form className="space-y-5" onSubmit={HandleForm}>

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={signup.name}
              onChange={HandleValue}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={signup.email}
              onChange={HandleValue}
            />
          </div>

          {/* PHONE + AGE */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="tel"
                name="phone"
                maxLength="10"
                pattern="[0-9]{10}"
                required
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                value={signup.phone}
                onChange={HandleValue}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Age</label>
              <input
                type="number"
                name="age"
                required
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                value={signup.age}
                onChange={HandleValue}
              />
            </div>

          </div>

          {/* GENDER */}
          <div>
            <label className="text-sm text-gray-600">Gender</label>
            <select
              name="gender"
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={signup.gender}
              onChange={HandleValue}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full mt-1 px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={signup.password}
              onChange={HandleValue}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type={showRePassword ? "text" : "password"}
              name="repassword"
              required
              className="w-full mt-1 px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              value={signup.repassword}
              onChange={HandleValue}
            />

            <button
              type="button"
              onClick={() => setShowRePassword(!showRePassword)}
              className="absolute right-4 top-10"
            >
              {showRePassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl 
                       font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/home" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
