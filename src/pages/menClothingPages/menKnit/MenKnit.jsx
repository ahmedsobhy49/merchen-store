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

export default function MenKint() {
  const dispatch = useDispatch();
  const menKint = useSelector((state) => state.menKint);
  const loading = useSelector((state) => state.fetchingMenKintStates.loading);
  const menKintCollectionRef = collection(db, "menKint");

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_MEN_KINT_DATA_REQUEST",
        "FETCH_MEN_KINT_DATA_SUCCESS",
        "FETCH_MEN_KINT_DATA_FAILURE",
        menKintCollectionRef
      )
    );
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Kint</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {menKint.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {menKint.map((product) => (
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
