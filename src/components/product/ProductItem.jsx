import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { handleToggleWishListItem } from "../../store/slices/wishListSlice";
import { handleUpdateCartProducts } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import { hideSearchComponent } from "../../store/slices/layoutsSlice";

export default function ProductCard({
  product = {
    title: "Contrast STWD sweatpants",
    price: 45.9,
    image:
      "https://static.pullandbear.net/assets/public/8133/a7be/fa2f44b793e4/d3776f537a26/0767950740001-E/0767950740001-E.jpg?ts=1722334078654&w=850",
    id: 1,
    galleryImages: [
      "https://static.pullandbear.net/assets/public/8133/a7be/fa2f44b793e4/d3776f537a26/0767950740001-E/0767950740001-E.jpg?ts=1722334078654&w=850",
    ],
  },
}) {
  const { title, price, image, id, count, galleryImages } = product;
  const [isMouseIn, setIsMouseIn] = useState(false);
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );

  const isProductInWishList = wishListItems.some(
    (wishItem) => wishItem.id === id
  );

  function handleAddNewItemToCart() {
    dispatch(
      handleUpdateCartProducts({
        title,
        price,
        image,
        id,
        count,
        galleryImages,
      })
    );
  }

  function toggleWishListItem() {
    dispatch(
      handleToggleWishListItem({
        title,
        price,
        image,
        id,
        count,
        galleryImages,
      })
    );
  }

  function showAddButton() {
    setIsMouseIn(true);
  }

  function hideAddButton() {
    setIsMouseIn(false);
  }

  function hideSearchComponentAfterClickOnProduct() {
    if (searchButtonClicked) {
      dispatch(hideSearchComponent(false));
    }
  }

  return (
    <article
      className="w-[364px] text-center relative"
      onMouseEnter={showAddButton}
      onMouseLeave={hideAddButton}
    >
      <Link
        to={`/product-details/${title}`}
        state={product}
        onClick={hideSearchComponentAfterClickOnProduct}
      >
        <div className="w-full">
          <img src={image} alt={title} className="h-[572px] w-full" />
        </div>
      </Link>
      <div
        className={`w-4/5 absolute bottom-20 left-1/2 -translate-x-1/2 text-xs duration-150 flex transition-all ${
          isMouseIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <select className="bg-white w-1/2 border border-black focus:outline-none">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button
          className="w-1/2 bg-black text-white text-xs px-1 py-1"
          onClick={handleAddNewItemToCart}
        >
          Add
        </button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/product-details/${title}`}
          state={product}
          className="flex-1 text-center"
          onClick={hideSearchComponentAfterClickOnProduct}
        >
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-sm font-bold">{price}$</p>
          </div>
        </Link>
        <div
          className="bg-white shadow-lg rounded-full p-2 ml-4"
          onClick={toggleWishListItem}
        >
          {isProductInWishList ? (
            <FaHeart size="1.5rem" className="cursor-pointer" />
          ) : (
            <CiHeart className="cursor-pointer" size="1.5rem" />
          )}
        </div>
      </div>
    </article>
  );
}
