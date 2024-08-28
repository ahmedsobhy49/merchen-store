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

export default function WomenBlouses() {
  const dispatch = useDispatch();
  const womenBlouses = useSelector((state) => state.womenBlouses);
  const loading = useSelector(
    (state) => state.fetchingWomenBlousesStates.loading
  );
  const womenBlousesCollectionRef = collection(db, "womenBlouses");

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_WOMEN_BLOUSES_DATA_REQUEST",
        "FETCH_WOMEN_BLOUSES_DATA_SUCCESS",
        "FETCH_WOMEN_BLOUSES_DATA_FAILURE",
        womenBlousesCollectionRef
      )
    );
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Shirts and blouses</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenBlouses.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenBlouses.map((product) => (
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
