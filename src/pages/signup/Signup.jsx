import React from "react";
// import SignupForm from "../../components/forms/SignupForm";
import Register from "../../components/forms/Register";

export default function Signup() {
  return (
    <section>
      <div className="flex flex-col w-1/2  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow px-10 py-5">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight mb-10 tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <Register />
          </div>
        </div>
      </div>
    </section>
  );
}
