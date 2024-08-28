import React, { useEffect } from "react";

// components
import ProductItem from "../../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../../components/common/ProductsContainer";

// redux
import { useSelector, useDispatch } from "react-redux";

// store
import { fetchData } from "../../../store";
import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";

export default function WomenHoodies() {
  const dispatch = useDispatch();
  const womenHoodies = useSelector((state) => state.womenHoodies);
  const loading = useSelector(
    (state) => state.fetchingWomenHoodiesStates.loading
  );
  const womenHoodiesCollectionRef = collection(db, "womenHoodies");

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_WOMEN_HOODIES_DATA_REQUEST",
        "FETCH_WOMEN_HOODIES_DATA_SUCCESS",
        "FETCH_WOMEN_HOODIES_DATA_FAILURE",
        womenHoodiesCollectionRef
      )
    );
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Sweatshirts & Hoodies</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenHoodies.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenHoodies.map((product) => (
              <ProductItem
                product={{
                  ...product,
                  count: 1,
                }}
                key={product.id}
              />
            ))}
          </div>
        </>
      ) : (
        <ReactLoading type="bubbles" color="black" className="mx-auto mt-24" />
      )}
    </ProductsContainer>
  );
}
