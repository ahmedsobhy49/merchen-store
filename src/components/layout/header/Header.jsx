// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// // components
// import { IoBagOutline } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi2";
// import { CiSearch } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";
// import LogoPull from "../../../../public/assets/icons/LogoPull";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { RxHamburgerMenu } from "react-icons/rx";

// import {
//   showProductCategories,
//   showSearchComponent,
//   hideSearchComponent,
//   showClothingCategories,
// } from "../../../store/slices/layoutsSlice";

// const womenHeaderColor = "black";
// const menHeaderColor = "white";

// export default function Header() {
//   const location = useLocation();
//   const path = location.pathname;
//   const dispatch = useDispatch();

//   const isAuthenticated = useSelector(
//     (state) => state.auth.user.isAuthenticated
//   );
//   const searchButtonClicked = useSelector(
//     (state) => state.layouts.searchButtonClicked
//   );
//   const gender = useSelector((state) => state.auth.gender);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const wishListItems = useSelector((state) => state.wishList.wishListItems);

//   const [showHeader, setShowHeader] = useState(true);

//   function handleShowSearchComponent() {
//     dispatch(showSearchComponent(true));
//   }

//   function handleHideSearchComponent() {
//     dispatch(hideSearchComponent(false));
//   }

//   function showProductCategoriesFun() {
//     if (!searchButtonClicked) dispatch(showProductCategories(true));
//   }

//   // function to hide header on scroll
//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowHeader(false); // Hide header on scroll down
//       } else if (window.scrollY < 200) {
//         setShowHeader(true); // Show header on scroll up
//       }
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <header
//         className={`p-10 fixed top-0 left-0 right-0 z-50 transition-transform duration-300  ${
//           showHeader ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <nav className="flex items-center justify-between relative ">
//           {
//             // women and men sidebar
//             <div
//               className={`xl:flex hidden text-lg 2xl:text-[1.2rem] ${
//                 searchButtonClicked ? "opacity-0" : "opacity-100"
//               }`}
//             >
//               <a
//                 className={`${
//                   !searchButtonClicked ? "cursor-pointer" : "cursor-default"
//                 } text-${
//                   gender === "women" && path === "/women"
//                     ? womenHeaderColor
//                     : "black"
//                 }`}
//                 onMouseEnter={showProductCategoriesFun}
//                 style={{
//                   // fontFamily: "OM PLUS 1p",
//                   fontWeight: "100",
//                 }}
//               >
//                 Men
//               </a>
//               <div
//                 className={`w-[0.09rem] mx-2 h-5
//                  bg-${
//                    gender === "women" && path === "/women"
//                      ? womenHeaderColor
//                      : "black"
//                  } mt-1`}
//               ></div>
//               <a
//                 className={`${
//                   !searchButtonClicked ? "cursor-pointer" : "cursor-default"
//                 } text-${
//                   gender === "women" && path === "/women"
//                     ? womenHeaderColor
//                     : "black"
//                 }`}
//                 style={{
//                   fontFamily: "OM PLUS 1p",
//                   fontWeight: "100",
//                 }}
//                 onMouseEnter={showProductCategoriesFun}
//               >
//                 Women
//               </a>
//             </div>
//           }
//           <RxHamburgerMenu
//             className="xl:hidden"
//             size={"1.5rem"}
//             cursor={"pointer"}
//             onClick={showProductCategoriesFun}
//           />

//           {/* logo  */}
//           <div className="absolute left-1/2 -translate-x-1/2 w-32 xl:w-40">
//             <Link to={"/"} onClick={handleHideSearchComponent}>
//               <LogoPull
//                 color={
//                   gender === "women" && path === "/women"
//                     ? womenHeaderColor
//                     : "black"
//                 }
//               />
//             </Link>
//           </div>

//           <div className="flex gap-3 items-center ">
//             {/* search start */}
//             {!searchButtonClicked ? (
//               <button
//                 className={`rounded-3xl focus:outline-none px-3 py-1 bg-transparent border hidden  ${
//                   gender === "women" && path === "/women"
//                     ? `border-${womenHeaderColor}`
//                     : "border-gray-700"
//                 } xl:flex justify-start gap-3 items-center w-60 cursor-pointer`}
//                 onClick={handleShowSearchComponent}
//               >
//                 <CiSearch
//                   className="text-lg font-bold"
//                   color={
//                     gender === "women" && path === "/women"
//                       ? womenHeaderColor
//                       : "black"
//                   }
//                 />
//                 <span
//                   className={`${
//                     gender === "women" && path === "/women"
//                       ? `text-${womenHeaderColor}`
//                       : "text-gray-700"
//                   }`}
//                 >
//                   Search
//                 </span>
//               </button>
//             ) : (
//               <IoMdClose size="1.5rem" onClick={handleHideSearchComponent} />
//             )}

//             {/* cart icon  */}
//             <Link to={"/cart"} onClick={handleHideSearchComponent}>
//               <div
//                 className={`flex flex-col items-center justify-center ${
//                   cartItems.length
//                     ? "border border-[#90EE90] rounded-3xl p-2 py-[0.47rem]"
//                     : "border-0"
//                 } duration-200`}
//                 style={{
//                   minWidth: "20px",
//                   minHeight: "30px",
//                 }}
//               >
//                 <IoBagOutline
//                   className="cursor-pointer"
//                   color={`${
//                     cartItems.length
//                       ? "#90EE90"
//                       : `${
//                           gender === "women" && path === "/women"
//                             ? womenHeaderColor
//                             : "black"
//                         }`
//                   }`}
//                   size="1.18rem"
//                 />
//                 <p
//                   className={`text-center ${
//                     cartItems.length ? "text-[#90EE90] block" : "black hidden"
//                   } duration-200`}
//                 >
//                   {cartItems.length}
//                 </p>
//               </div>
//             </Link>

//             {/* wishlist icon */}
//             <Link to={"/wishlist"} onClick={handleHideSearchComponent}>
//               <div
//                 className={`flex flex-col items-center justify-center ${
//                   wishListItems.length
//                     ? "border border-[#f25050] rounded-3xl p-2"
//                     : "border-0"
//                 } duration-200`}
//                 style={{
//                   minWidth: "20px",
//                   minHeight: "30px",
//                 }}
//               >
//                 <FontAwesomeIcon
//                   icon={faHeart}
//                   className="cursor-pointer"
//                   color={`${
//                     wishListItems.length
//                       ? "#f25050"
//                       : `${
//                           gender === "women" && path === "/women"
//                             ? womenHeaderColor
//                             : "black"
//                         }`
//                   }`}
//                 />
//                 <p
//                   className={`text-center ${
//                     wishListItems.length
//                       ? "text-[#f25050] block"
//                       : "black hidden"
//                   } duration-200`}
//                 >
//                   {wishListItems.length}
//                 </p>
//               </div>
//             </Link>

//             {/* user icon  */}
//             <Link
//               to={isAuthenticated ? "/userProfile" : "/login"}
//               onClick={handleHideSearchComponent}
//             >
//               <HiOutlineUser
//                 className="cursor-pointer"
//                 color={
//                   gender === "women" && path === "/women"
//                     ? womenHeaderColor
//                     : "black"
//                 }
//                 size="1.2rem"
//               />
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// components
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import LogoPull from "../../../../public/assets/icons/LogoPull";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  showProductCategories,
  showSearchComponent,
  hideSearchComponent,
  showClothingCategories,
} from "../../../store/slices/layoutsSlice";

const womenHeaderColor = "black";
const menHeaderColor = "white";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.auth.user.isAuthenticated
  );
  const searchButtonClicked = useSelector(
    (state) => state.layouts.searchButtonClicked
  );
  const gender = useSelector((state) => state.auth.gender);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishListItems = useSelector((state) => state.wishList.wishListItems);

  const [showHeader, setShowHeader] = useState(true);

  function handleShowSearchComponent() {
    dispatch(showSearchComponent(true));
  }

  function handleHideSearchComponent() {
    dispatch(hideSearchComponent(false));
  }

  function showProductCategoriesFun() {
    if (!searchButtonClicked) dispatch(showProductCategories(true));
  }

  // function to hide header on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHeader(false); // Hide header on scroll down
      } else if (window.scrollY < 200) {
        setShowHeader(true); // Show header on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerColor =
    gender === "women" && path === "/women"
      ? womenHeaderColor
      : gender === "men" && path === "/men"
      ? menHeaderColor
      : "black";

  return (
    <div>
      <header
        className={`p-10 fixed top-0 left-0 right-0 z-50 transition-transform duration-300  ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex items-center justify-between relative ">
          {/* women and men sidebar */}
          <div
            className={`xl:flex hidden text-lg 2xl:text-[1.2rem] ${
              searchButtonClicked ? "opacity-0" : "opacity-100"
            }`}
          >
            <a
              className={`${
                !searchButtonClicked ? "cursor-pointer" : "cursor-default"
              } text-${headerColor}`}
              onMouseEnter={showProductCategoriesFun}
              style={{
                fontWeight: "100",
              }}
            >
              Men
            </a>
            <div
              className={`w-[0.09rem] mx-2 h-5 bg-${headerColor} mt-1`}
            ></div>
            <a
              className={`${
                !searchButtonClicked ? "cursor-pointer" : "cursor-default"
              } text-${headerColor}`}
              style={{
                fontFamily: "OM PLUS 1p",
                fontWeight: "100",
              }}
              onMouseEnter={showProductCategoriesFun}
            >
              Women
            </a>
          </div>
          <RxHamburgerMenu
            className="xl:hidden"
            size={"1.5rem"}
            cursor={"pointer"}
            onClick={showProductCategoriesFun}
            color={headerColor} // Set the color of the RxHamburgerMenu icon
          />

          {/* logo */}
          <div className="absolute left-1/2 -translate-x-1/2 w-32 xl:w-40">
            <Link to={"/"} onClick={handleHideSearchComponent}>
              <LogoPull color={headerColor} />
            </Link>
          </div>

          <div className="flex gap-3 items-center ">
            {/* search start */}
            {!searchButtonClicked ? (
              <button
                className={`rounded-3xl focus:outline-none px-3 py-1 bg-transparent border hidden border-${headerColor} xl:flex justify-start gap-3 items-center w-60 cursor-pointer`}
                onClick={handleShowSearchComponent}
              >
                <CiSearch className="text-lg font-bold" color={headerColor} />
                <span className={`text-${headerColor}`}>Search</span>
              </button>
            ) : (
              <IoMdClose size="1.5rem" onClick={handleHideSearchComponent} />
            )}

            {/* cart icon */}
            <Link to={"/cart"} onClick={handleHideSearchComponent}>
              <div
                className={`flex flex-col items-center justify-center ${
                  cartItems.length
                    ? "border border-[#90EE90] rounded-3xl p-2 py-[0.47rem]"
                    : "border-0"
                } duration-200`}
                style={{
                  minWidth: "20px",
                  minHeight: "30px",
                }}
              >
                <IoBagOutline
                  className="cursor-pointer"
                  color={`${cartItems.length ? "#90EE90" : headerColor}`}
                  size="1.18rem"
                />
                <p
                  className={`text-center ${
                    cartItems.length ? "text-[#90EE90] block" : "hidden"
                  } duration-200`}
                >
                  {cartItems.length}
                </p>
              </div>
            </Link>

            {/* wishlist icon */}
            <Link to={"/wishlist"} onClick={handleHideSearchComponent}>
              <div
                className={`flex flex-col items-center justify-center ${
                  wishListItems.length
                    ? "border border-[#f25050] rounded-3xl p-2"
                    : "border-0"
                } duration-200`}
                style={{
                  minWidth: "20px",
                  minHeight: "30px",
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="cursor-pointer"
                  color={`${wishListItems.length ? "#f25050" : headerColor}`}
                />
                <p
                  className={`text-center ${
                    wishListItems.length ? "text-[#f25050] block" : "hidden"
                  } duration-200`}
                >
                  {wishListItems.length}
                </p>
              </div>
            </Link>

            {/* user icon */}
            <Link
              to={isAuthenticated ? "/userProfile" : "/login"}
              onClick={handleHideSearchComponent}
            >
              <HiOutlineUser
                className="cursor-pointer"
                color={headerColor}
                size="1.2rem"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
