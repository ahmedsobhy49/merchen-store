import React, { useEffect } from "react";

// components
import ProductItem from "../../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../../components/common/ProductsContainer";

// redux
import { useSelector, useDispatch } from "react-redux";

// store
import { collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";
import { fetchWomenData } from "../../../store/slices/fetchingWomenDataSlice";

export default function WomenBikinis() {
  const dispatch = useDispatch();
  const womenBikinis = useSelector(
    (state) => state.fetchingWomenData.womenBikinis
  );
  const loading = useSelector(
    (state) => state.fetchingWomenData.fetchingWomenBikinisStates.loading
  );
  const womenBikinisCollectionRef = collection(db, "womenBikinis");

  useEffect(() => {
    dispatch(fetchWomenData("womenBikinis", womenBikinisCollectionRef));
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Bikinis and bathing suits</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenBikinis.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenBikinis.map((product) => (
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
