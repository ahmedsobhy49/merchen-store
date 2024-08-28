import { useSelector } from "react-redux";
import React from "react";
import CartItem from "./components/CartItem";
import CartSummery from "./components/CartSummery";
import PeopleAlsoBought from "./components/PeopleAlsoBought";
import CartIsEmpty from "./components/CartIsEmpty";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <section className="bg-white py-40 antialiased min-h-screen">
      {cartItems.length ? (
        <div className="mx-auto  w-9/12 px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8  ">
            <div className="mx-auto  flex-none lg:max-w-2xl xl:max-w-4xl  w-2/3">
              <div className="space-y-6">
                {cartItems.map((cartItem) => {
                  return <CartItem product={cartItem} key={cartItem.id} />;
                })}
              </div>
              <PeopleAlsoBought />
            </div>
            <CartSummery />
          </div>
        </div>
      ) : (
        <CartIsEmpty />
      )}
    </section>
  );
}
