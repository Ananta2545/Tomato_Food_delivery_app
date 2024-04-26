import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems]= useState({});
    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            // Create a copy of the previous cartItems state
            const updatedCartItems = { ...prevCartItems };
    
            // Check if the item already exists in the cart
            if (updatedCartItems[itemId]) {
                // If item exists, increase its quantity by 1
                updatedCartItems[itemId] += 1;
            } else {
                // If item doesn't exist, add it to the cart with quantity 1
                updatedCartItems[itemId] = 1;
            }
    
            // Return the updated cartItems object
            return updatedCartItems;
        });
    };
    


    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            // Create a copy of the previous cartItems state
            const updatedCartItems = { ...prevCartItems };
    
            // Check if the item exists in the cart
            if (updatedCartItems[itemId]) {
                // Decrease the quantity of the item by 1
                updatedCartItems[itemId] -= 1;
    
                // If quantity becomes 0 or less, remove the item from the cart
                if (updatedCartItems[itemId] <= 0) {
                    delete updatedCartItems[itemId]; // Remove the item from cartItems
                }
            }
    
            // Return the updated cartItems object
            return updatedCartItems;
        });
    };
    
    
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;