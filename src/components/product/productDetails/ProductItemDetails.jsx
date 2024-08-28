import React from "react";

// components
import { Select, Option } from "@material-tailwind/react";
import Gallery from "../../common/Gallery";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Accordion from "../../common/Accordion";
import Ref from "./components/Ref";
import CompositionAndCare from "./components/CompositionAndCare";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// store
import { toggleWishListItem } from "../../../store/index";
import { addNewItemToCart } from "../../../store/index";

// router
import { useLocation } from "react-router-dom";

export default function ProductItemDetails() {
  const CompositionAndCareContent = `
  

`;

  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state;
  const { title, price, image, id, count, galleryImages } = product;

  const wishListItems = useSelector((state) => state.wishListItems);
  // Determine if the product is in the wishlist
  const isProductInWishList = wishListItems.some(
    (wishItem) => wishItem.id === id
  );

  function handleAddNewItemToCart() {
    dispatch(
      addNewItemToCart({ title, price, image, id, count, galleryImages })
    );
  }

  function handleToggleWishListItem() {
    dispatch(
      toggleWishListItem({ title, price, image, id, count, galleryImages })
    );
  }
  return (
    <section className="flex gap-12 w-9/12 mx-auto mt-[110px] mb-10">
      <div className="w-1/2">
        <Gallery images={[image, ...galleryImages]} />
      </div>
      <div className="w-1/2 flex flex-col gap-3">
        <h2 className="block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-inherit">
          {title}
        </h2>
        <h2 className="block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-inherit">
          {price}$
        </h2>
        <div className="w-full">
          <Select label="Select Size">
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </div>
        <div className="flex w-full items-center">
          <button
            className="tracking-wider w-11/12 bg-green-500 px-4 py-2 text-center text-white rounded-2xl "
            onClick={() =>
              handleAddNewItemToCart({
                title,
                price,
                image,
                id,
                count,
                galleryImages,
              })
            }
          >
            Add to my basket
          </button>

          <div
            className="bg-white shadow-lg rounded-full p-2 ml-4 w-fit"
            onClick={() =>
              handleToggleWishListItem({
                title,
                price,
                image,
                id,
                count,
                galleryImages,
              })
            }
          >
            {isProductInWishList ? (
              <FaHeart size="1.5rem" className="cursor-pointer" />
            ) : (
              <CiHeart className="cursor-pointer" size="1.5rem" />
            )}
          </div>
        </div>
        <div className="mt-20">
          <Accordion title={"Ref 7590518"}>
            <Ref />
          </Accordion>

          <Accordion title={"Composition and care"} lastOne={true}>
            <CompositionAndCare
              careDesc={`We'd love to join you and help you extend the useful life of your
            clothes while reducing the environmental impact of the washing
            process.`}
              composition={["OUTER SHELL", "100% cotton"]}
              careObj={{
                wash: "Machine wash up to 30ºC/86ºF gentle cycle",
                bleach: "Do not bleach",
                iron: "Iron up to 110ºC/230ºF",
                dryClean: "Do not dry clean",
                tumble: "Do not tumble dry",
              }}
              traceabilityDesc={` To cover our demand, we work with suppliers from different parts of
            the world that must meet the same social and environmental
            standards.We conduct social and environmental audits on each of the
            suppliers and manufacturers we work with.`}
              traceabilityObj={{
                weaving: "TURKEY Production: TURKEY",
                production: "TURKEY",
              }}
              packaging={` We redesign our packaging to reduce raw materials consumption,
            increase recycled content and unify materials so that later reusing
            and recycling is easier. All our bags, envelopes and boxes are 100%
            recyclable.Packaging guide`}
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
}
