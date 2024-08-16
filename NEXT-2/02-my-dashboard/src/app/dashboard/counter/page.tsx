import CartCounter from "@/shopping-cart/components/CartCounter";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Counter Page',
  description: 'Contador',
}

export default function Page() {

  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter />
      
    </div>
  );
};