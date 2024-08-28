// import React from "react";
// import { useState } from "react";

// // components
// import EmailInput from "../common/EmailInput";
// import PasswordInput from "../common/PasswordInput";

// import { MdError } from "react-icons/md";

// // redux
// import { useDispatch } from "react-redux";

// // firebase
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../../services/firebaseConfig";

// // router
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function SigninForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [emailValue, setEmailValue] = useState("");
//   const [passwordValue, setPasswordValue] = useState("");
//   const [error, setError] = useState("");
//   const [userName, setUserName] = useState("");

//   // const handleSignIn = async (e) => {
//   //   e.preventDefault();
//   //   setError(""); // Reset error

//   //   if (!emailValue) {
//   //     setError("please provide your email address");
//   //     return;
//   //   } else {
//   //     setError(""); // Reset error
//   //   }
//   //   console.log(userName);
//   //   try {
//   //     await signInWithEmailAndPassword(auth, emailValue, passwordValue);
//   //     setUserName(emailValue);
//   //     navigate("/cart");
//   //     dispatch({ type: "logIn", payload: true });
//   //   } catch (error) {
//   //     if (emailValue && !passwordValue) {
//   //       setError("please provide your password");
//   //     } else if (
//   //       (error.code === "auth/invalid-credential" ||
//   //         error.code === "auth/user-not-found" ||
//   //         error.code === "auth/invalid-email" ||
//   //         error.code === "auth/wrong-password") &&
//   //       emailValue &&
//   //       passwordValue
//   //     ) {
//   //       setError("Incorrect email or password");
//   //     } else {
//   //       setError("Failed to sign in. Please try again.");
//   //     }
//   //   }
//   // };

//   return (
//     <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
//       <EmailInput
//         id="sign-in-email"
//         value={emailValue}
//         onChange={(e) => setEmailValue(e.target.value)}
//       />
//       <PasswordInput
//         id="log-in-password"
//         label="Password"
//         value={passwordValue}
//         onChange={(e) => setPasswordValue(e.target.value)}
//       />
//       {error && (
//         <div className="flex justify-center text-center items-center text-red-600 gap-1">
//           <MdError />
//           <p>{error}</p>
//         </div>
//       )}
//       <div className="flex items-center justify-between">
//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <input
//               id="remember"
//               aria-describedby="remember"
//               type="checkbox"
//               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
//             />
//           </div>
//           <div className="ml-3 text-sm">
//             <label htmlFor="remember" className="text-gray-500">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <a
//           href="#"
//           className="text-sm font-medium text-primary-600 hover:underline"
//         >
//           Forgot password?
//         </a>
//       </div>
//       <button
//         type="submit"
//         className="w-full text-white bg-black hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//       >
//         Sign in
//       </button>
//       <p className="text-sm font-light text-gray-500">
//         Don’t have an account yet?
//         <Link
//           to={"/signup"}
//           className="font-medium text-primary-600 hover:underline"
//         >
//           Sign up
//         </Link>
//       </p>
//     </form>
//   );
// }

import React, { useEffect, useState } from "react";
import { login } from "../../store/authActions"; // Import the login action

// components
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";

import ReactLoading from "react-loading";

import { MdError } from "react-icons/md";

// redux
import { useDispatch, useSelector } from "react-redux";

// router
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function SigninForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(login(emailValue, passwordValue, navigate, location)); // Pass navigate and location
  };

  useEffect(() => {
    if (isAuthenticated) {
      // This will handle the navigation inside the login action
    }
  }, [isAuthenticated]);

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="signup-email"
          className="text-gray-700 text-sm tracking-wide font-bold"
        >
          Email
        </label>
        <input
          className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
          id="signup-email"
          type="email"
          name="signin-email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="signin-password"
          className="text-gray-700 text-sm tracking-wide font-bold"
        >
          Password
        </label>
        <input
          className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
          autoComplete="off"
          id="password"
          type="password"
          name="signin-password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>

      {error && (
        <div className="flex justify-center text-center items-center text-red-600 gap-1">
          <MdError />
          <p>{error}</p>
        </div>
      )}
      <button
        type="submit"
        className="w-full text-white bg-black hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled={loading}
      >
        {loading ? (
          <ReactLoading
            type="spin"
            color="white"
            width={"20px"}
            height={"20px"}
            className="mx-auto"
          />
        ) : (
          "Sign in"
        )}
      </button>
      <p className="text-sm font-light text-gray-500">
        Don’t have an account yet?
        <Link
          to={"/signup"}
          className="font-medium text-primary-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
