import { Routes, Route } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';

// Component Imports
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import Dashboard from './Components/Dashboard';
import AddToCart from './Components/AddToCart';
import Products from './Components/Products';
import Display_Details_Product from './Display_Product_Details/Display_Details_Product';

function App() {
  return (
    <UserContextProvider>
      {/* flex flex-col: Stacks Navbar, Main, and Footer vertically.
        min-h-screen: Ensures the entire app is at least as tall as the browser window.
      */}
      <div className="flex flex-col min-h-screen">
        
        <Navbar />

        {/* flex-grow: This forces this section to expand and take up all 
          available empty space, pushing the footer to the absolute bottom.
        */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/products" element={<Products />} />
            <Route path='/products/:category' element={<Products/>}/>
            <Route path='/product_details' element={<Display_Details_Product/>}/>
            <Route path='/product_details/:product_name' element={<Display_Details_Product/>}/>
          </Routes>
        </main>

        <Footer />
        
      </div>
    </UserContextProvider>
  );
}

export default App;