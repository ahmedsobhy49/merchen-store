import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishListItems);

  function incrementProduct() {
    const newCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });

    dispatch({ type: "UPDATE_CART_PRODUCTS", payload: newCartItems });
  }

  function decrementProduct() {
    const newCartItems = cartItems
      .map((item) => {
        if (item.id === product.id) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            // Remove the item from the cart if count is 1 or less
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null); // Filter out any null items

    dispatch({ type: "UPDATE_CART_PRODUCTS", payload: newCartItems });
  }

  function removeProduct(id) {
    dispatch({
      type: "UPDATE_CART_PRODUCTS",
      payload: cartItems.filter((item) => item.id !== id),
    });
  }

  function moveToWishList(cartItem) {
    const itemExists = wishListItems.some(
      (currWishItem) => currWishItem.id === cartItem.id
    );
    if (!itemExists) {
      dispatch({
        type: "TOGGLE_WISH_LIST_ITEM",
        payload: [...wishListItems, cartItem],
      });
      removeProduct(cartItem.id);
      toast.success(`product moved to wishlist successfully`, {
        autoClose: 5000,
        className: "w-[20rem] ",
        draggable: true,
      });
    } else {
      toast.error(`product is in your wishlist already `, {
        autoClose: 5000,
        className: "w-[20rem] ",
        draggable: true,
      });
    }
  }

  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6"
      key={product.id}
    >
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link
          to={`/product-details/${product.title}`}
          state={product}
          className="shrink-0 md:order-1"
        >
          <img className="h-24 w-18" src={product.image} alt="imac image" />
        </Link>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center gap-4">
            <button
              type="button"
              id="decrement-button"
              onClick={decrementProduct}
              data-input-counter-decrement="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>

            <span>{product.count}</span>
            <button
              onClick={incrementProduct}
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 ">
              {Number((product.price * product.count).toFixed(2))} $
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            to={`/product-details/${product.title}`}
            state={product}
            className="text-base font-medium text-gray-900 hover:underline "
          >
            {product.title}
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => moveToWishList(product)}
              type="button"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline "
            >
              <svg
                className="me-1.5 h-5 w-5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Move to Favorites
            </button>

            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
              onClick={() => removeProduct(product.id)}
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
