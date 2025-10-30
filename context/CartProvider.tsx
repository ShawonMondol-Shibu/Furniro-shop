import { createContext, ReactNode, useState } from "react";
import React from 'react'

interface cartsType{
    
}

const cartContext = createContext()

export default function CartProvider({children}:{children:ReactNode}) {
    const [carts, setCarts]=useState();
  return (
    <cartContext.Provider value={{}}>{children}</cartContext.Provider>
  )
}
