import React, { useEffect } from "react";
// components
import ProductItem from "../../components/product/ProductItem";
import ReactLoading from "react-loading";
import ProductsContainer from "../../components/common/ProductsContainer";

// redux
import { useSelector, useDispatch } from "react-redux";

// store
import { fetchData } from "../../store/index";
import { collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function NewArrival() {
  const dispatch = useDispatch();
  const newArrivalData = useSelector((state) => state.newArrivalData);

  const menNewArrivalProductsCollectionRef = collection(db, "menNewArrival");
  const womenNewArrivalProductsCollectionRef = collection(
    db,
    "womenNewArrival"
  );
  const loading = useSelector(
    (state) => state.fetchingNewArrivalStates.loading
  );

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_NEW_ARRIVAL_DATA_REQUEST",
        "FETCH_NEW_ARRIVAL_DATA_SUCCESS",
        "FETCH_NEW_ARRIVAL_DATA_FAILURE",
        menNewArrivalProductsCollectionRef,
        womenNewArrivalProductsCollectionRef
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
              {newArrivalData.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4  gap-12 w-full px-10 `}>
            {newArrivalData.map((product) => (
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
