import React from "react";
import ProductItem from "../../components/product/ProductItem";
import { useSelector } from "react-redux";
import WishListsEmpty from "./WishListsEmpty";

export default function WishList() {
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  return (
    <section className="min-h-screen bg-white py-40 antialiased">
      {wishListItems.length ? (
        <div className={`mt-14 grid grid-cols-4 gap-12 w-full p-20`}>
          {wishListItems.map((wishListItem) => {
            return <ProductItem product={wishListItem} key={wishListItem.id} />;
          })}
        </div>
      ) : (
        <WishListsEmpty />
      )}
    </section>
  );
}
