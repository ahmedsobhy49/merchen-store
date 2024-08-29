import React, { useEffect } from "react";

// components
import ProductItem from "../../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../../components/common/ProductsContainer";

// redux
import { useSelector, useDispatch } from "react-redux";

// store
import { fetchWomenData } from "../../../store/slices/fetchingWomenDataSlice";

import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";

export default function WomenJeans() {
  const dispatch = useDispatch();
  const womenJeans = useSelector((state) => state.fetchingWomenData.womenJeans);
  const loading = useSelector(
    (state) => state.fetchingWomenData.fetchingWomenJeansStates.loading
  );
  const womenJeansCollectionRef = collection(db, "womenJeans");

  useEffect(() => {
    dispatch(fetchWomenData("womenJeans", womenJeansCollectionRef));
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Jeans</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenJeans.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenJeans.map((product) => (
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
