import { useEffect, useState } from "react";
import UserContext from "./Context";


let UserContextProvider=({children})=>{

// let [cart,setCart]=useState(()=>{
//     let savedItem=localStorage.getItem('cart');
//     return savedItem?JSON.parse(savedItem):[]; // paser is used to convert string into form of array or object
// });

// useEffect(()=>{
//     localStorage.setItem('cart',JSON.stringify(cart))
// },[cart]) // stringify stores in localstorage asa form of string bcz localstorage only takes value as a form of string

let [cart,setCart]=useState(()=>{
    let savedItem=localStorage.getItem('cart');
    return savedItem?JSON.parse(savedItem):[];
});

useEffect(()=>{
localStorage.setItem('cart',JSON.stringify(cart))
},[cart])


// remve from cart




    return(
        <UserContext.Provider value={{cart,setCart}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider