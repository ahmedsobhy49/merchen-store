import React, { useEffect } from "react";

// components
import ProductItem from "../../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../../components/common/ProductsContainer";

// redux
import { useSelector, useDispatch } from "react-redux";

// firebase
import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";

// store
// import { fetchWomenData } from "../../../store/store";

import { fetchWomenData } from "../../../store/slices/fetchingWomenDataSlice";

export default function WomenBlazers() {
  const dispatch = useDispatch();

  // Selector to get women blazers data and loading state
  const womenBlazers = useSelector(
    (state) => state.fetchingWomenData.womenBlazers
  );

  const loading = useSelector(
    (state) => state.fetchingWomenData.fetchingWomenBlazersStates.loading
  );

  // Firebase collection reference
  const womenBlazersCollectionRef = collection(db, "womenBlazers");

  useEffect(() => {
    dispatch(fetchWomenData("womenBlazers", womenBlazersCollectionRef));
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Blazers and suits</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenBlazers.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenBlazers.map((product) => (
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
