/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";
import { toast } from "sonner";

export interface cartsType {
  id: number;
  image: string;
  productName: string;
  price: number;
  currency: string;
  shortDescription: string;
  sizes: string;
  colors: string;
  quantity: number;
}

interface cartContextType {
  carts: cartsType[];
  setCarts: Dispatch<SetStateAction<cartsType[]>>;
  handleCarts: (productData: any) => void;
  handleQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
  handleRemove: (id: number) => void;
}

const defaultCartContext: cartContextType = {
  carts: [],
  setCarts: () => {},
  handleCarts: () => {},
  handleQuantity: () => {},
  totalPrice: 0,
  handleRemove: () => {},
};

const cartContext = createContext<cartContextType>(defaultCartContext);
export const CartContextProvider = () => useContext(cartContext);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [carts, setCarts] = useState<cartsType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  const handleCarts = (productData: cartsType) => {
    const {
      id,
      image,
      productName,
      price,
      currency,
      shortDescription,
      sizes,
      colors,
    } = productData;

    const isCartExist = carts.find((cart) => cart.id === id);
    if (isCartExist) {
      toast("Already added to cart");
      return;
    }

    const newCartItem = {
      id,
      image,
      productName,
      price,
      currency,
      shortDescription,
      sizes,
      colors,
      quantity: 1,
    };

    setCarts((prev) => [...prev, newCartItem]);
    toast.success(`Product added`);
    router.push("/cart");
    if (typeof window !== "undefined") {
      new Audio("/notify.wav").play();
    }
  };

  const handleQuantity = (id: number, quantity: number) => {
    setCarts((prevCarts) => {
      if (quantity === 0) {
        toast.warning("Removed from cart");

        return prevCarts.filter((cart) => cart.id !== id);
      }
      return prevCarts.map((cart) =>
        cart.id === id ? { ...cart, quantity } : cart
      );
    });
  };

  const handleRemove = (id: number) => {
    setCarts(carts.filter((cart) => cart.id !== id));
    toast.warning("Removed from cart");
  };

  useEffect(() => {
    const storedCarts = localStorage.getItem("furniroCarts");
    if (storedCarts) setCarts(JSON.parse(storedCarts));
  }, []);

  useEffect(() => {
    localStorage.setItem("furniroCarts", JSON.stringify(carts));
  }, [carts]);

  useEffect(() => {
    const totalPrice = carts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [carts]);

  return (
    <cartContext.Provider
      value={{
        carts,
        setCarts,
        totalPrice,
        handleCarts,
        handleQuantity,
        handleRemove,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
