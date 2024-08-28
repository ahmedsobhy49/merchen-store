import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckOutForm from "../../components/forms/CheckOutForm";
import ShippingMethodForm from "../../components/forms/ShippingMethodForm";
import CheckoutProductItem from "../../components/product/CheckoutProductItem";
export default function CheckOut() {
  const cartItems = useSelector((state) => state.cartItems);
  const orderSummary = useSelector((state) => state.orderSummary);

  return (
    <div className="mt-[150px] mb-20">
      {/* <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          sneekpeeks
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>

          {/* products  */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item) => {
              return (
                <CheckoutProductItem
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  count={item.count}
                />
              );
            })}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <ShippingMethodForm />
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <CheckOutForm />
          {/* <!-- order summery --> */}
          <div className="space-y-4 mt-10">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${orderSummary.originalPrice}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  Savings
                </dt>
                <dd className="text-base font-medium text-green-600">
                  -${orderSummary.savings}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  Store Pickup
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${orderSummary.storePickup}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${orderSummary.tax}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  shipping
                </dt>
                <dd className="text-base font-medium text-gray-900">$8</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900 ">Total</dt>
              <dd className="text-base font-bold text-gray-900 ">
                ${orderSummary.total}
              </dd>
            </dl>
          </div>

          <Link to={"/summery"}>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
