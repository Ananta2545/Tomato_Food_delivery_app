import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // const [cartItems, setCartItems] = useState({});

    // const addToCart = (itemId) => {
    //     setCartItems((prevCartItems) => {
    //         const updatedCartItems = { ...prevCartItems };

    //         if (updatedCartItems[itemId]) {
    //             updatedCartItems[itemId] += 1;
    //         } else {
    //             updatedCartItems[itemId] = 1;
    //         }

    //         return updatedCartItems;
    //     });
    // };

    // const removeFromCart = (itemId) => {
    //     setCartItems((prevCartItems) => {
    //         const updatedCartItems = { ...prevCartItems };

    //         if (updatedCartItems[itemId]) {
    //             updatedCartItems[itemId] -= 1;

    //             if (updatedCartItems[itemId] <= 0) {
    //                 delete updatedCartItems[itemId];
    //             }
    //         }

    //         return updatedCartItems;
    //     });
    // };

    const contextValue = {
        food_list
        // cartItems,
        // setCartItems,
        // addToCart,
        // removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
