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

export default function WomenTotalLook() {
  const dispatch = useDispatch();
  const womenTotalLook = useSelector((state) => state.womenTotalLook);
  const loading = useSelector(
    (state) => state.fetchingWomenTotalLookStates.loading
  );
  const womenTotalLookCollectionRef = collection(db, "womenTotalLook");

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_WOMEN_TOTALLOOk_DATA_REQUEST",
        "FETCH_WOMEN_TOTALLOOk_DATA_SUCCESS",
        "FETCH_WOMEN_TOTALLOOk_DATA_FAILURE",
        womenTotalLookCollectionRef
      )
    );
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold"> New</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenTotalLook.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenTotalLook.map((product) => (
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
