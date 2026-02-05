import { useEffect, useState } from "react";
import UserContext from "./Context";

const UserContextProvider = ({ children }) => {

  // CART STATE
  const [cart, setCart] = useState(() => {
    try {
      const savedItem = localStorage.getItem("cart");
      return savedItem ? JSON.parse(savedItem) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // USER STATE
  const [user, setUser] = useState(() => {
    try {
      const values = localStorage.getItem("user");
      return values ? JSON.parse(values) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);



  
  return (
    <UserContext.Provider value={{ cart, setCart, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
