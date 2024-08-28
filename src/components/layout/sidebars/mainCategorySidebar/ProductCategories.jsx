import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MenClothingCategories from "../clothingCategorySidebar/MenClothingCategories";
import WomenClothingCategories from "../clothingCategorySidebar/WomenClothingCategories";

export default function ProductCategories() {
  const dispatch = useDispatch();
  const showClothingCategories = useSelector(
    (state) => state.showClothingCategories
  );

  const gender = useSelector((state) => state.gender);
  useEffect(() => {
    const handleScroll = () => {
      hideProductCategoriesFun();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showProductCategories = useSelector(
    (state) => state.showProductCategories
  );

  function hideProductCategoriesFun() {
    dispatch({ type: "SHOW_PRODUCT_CATEGORIES", payload: false });
  }

  function changeGender(gender) {
    dispatch({
      type: "CHANGE_GENDER",
      payload: gender,
    });
  }

  function handleShowClothingCategories() {
    dispatch({ type: "SHOW_CLOTHING_CATEGORIES", payload: true });
  }

  return (
    <>
      <div
        className={`duration-500  bg-white fixed top-0 bottom-0  w-5/12 z-50  shadow-xl ${
          showProductCategories ? "translate-x-0" : "translate-x-[-800px]"
        }`}
        onMouseLeave={hideProductCategoriesFun}
      >
        <div className="flex px-5 py-10">
          <Link
            to={"/men"}
            className="font-bold cursor-pointer"
            onClick={() => changeGender("men")}
          >
            Men
          </Link>
          <div className="w-[0.09rem] mx-2 h-5 bg-black mt-1"></div>
          <Link
            to={"/women"}
            className="font-bold cursor-pointer"
            onClick={() => changeGender("women")}
          >
            Women
          </Link>
        </div>
        <div className="flex gap-28 items-start">
          <div className="flex flex-col gap-14 px-6 py-14 text-lg font-extrabold">
            <ul className="flex flex-col gap-2">
              <li className="hover:translate-x-2 duration-300">
                <Link to={"/newArrival"}>NEW</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="" className="text-red-500 text-3xl">
                  SALE
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li
                className="hover:translate-x-2 duration-300"
                onClick={handleShowClothingCategories}
              >
                <Link href="">CLOTHING</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">STWD</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">SHOES</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">ACCESSORIES</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">BAGS | BACKPACKS</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">COLLABORATIONS</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">ONLINE EXCLUSIVE</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:translate-x-2 duration-300">
                <Link href="">Join life</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">FAQs</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">How to make a return</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">GiftCard</Link>
              </li>
              <li className="hover:translate-x-2 duration-300">
                <Link href="">Newsletter</Link>
              </li>
            </ul>
          </div>
          <div>
            {showClothingCategories && gender === "men" ? (
              <MenClothingCategories />
            ) : null}

            {showClothingCategories && gender === "women" ? (
              <WomenClothingCategories />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
