import { useContext, useEffect, useState } from "react";
import { CartContext } from "../provider";
const useCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalCart = () => {
    return cartItems.length;
  };

  //   const getCartItems = () => {
  //     //why are you not working?
  //     return cartItems;
  //   };
  const addProductToCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      product.qnt += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { id: productId, qnt: 1 }]);
    }
  };
  const removeProductFromCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      product.qnt -= 1;
      if (product.qnt === 0) {
        const newCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems([...newCartItems]);
      } else {
        setCartItems([...cartItems]);
      }
    }
  };
  const getSingleProductQnt = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      return product.qnt;
    } else {
      return 0;
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return {
    totalCart,
    // getCartItems,
    getSingleProductQnt,
    addProductToCart,
    removeProductFromCart,
    clearCart,
  };
};

export default useCart;
