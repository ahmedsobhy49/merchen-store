import React, { useState } from "react";

export default function ShippingMethodForm() {
  const [shippingMethod, setShippingMethod] = useState("fedex");
  return (
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input
          className="peer hidden"
          id="radio_1"
          type="radio"
          name="shipping-method"
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          checked
        />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label
          className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
          htmlFor="radio_1"
        >
          <img
            className="w-14 object-contain"
            src="/images/naorrAeygcJzX0SyNI4Y0.png"
            alt=""
          />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">
              Delivery: 2-4 Days
            </p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input
          className="peer hidden"
          id="radio_2"
          type="radio"
          name="shipping-method"
          value={shippingMethod}
          checked
          onChange={(e) => setShippingMethod(e.target.value)}
        />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label
          className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
          htmlFor="radio_2"
        >
          <img
            className="w-14 object-contain"
            src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
            alt=""
          />
          <div className="ml-5">
            <span className="mt-2 font-semibold">DHL Delivery</span>
            <p className="text-slate-500 text-sm leading-6">
              Delivery: 1-3 Days
            </p>
          </div>
        </label>
      </div>
    </form>
  );
}
