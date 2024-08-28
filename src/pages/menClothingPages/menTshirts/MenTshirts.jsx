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

export default function MenTshirts() {
  const dispatch = useDispatch();
  const menTshirts = useSelector((state) => state.menTshirts);
  const loading = useSelector(
    (state) => state.fetchingMenTshirtsStates.loading
  );
  const menTshirtsCollectionRef = collection(db, "menTshirts");

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_MEN_TSHIRTS_DATA_REQUEST",
        "FETCH_MEN_TSHIRTS_DATA_SUCCESS",
        "FETCH_MEN_TSHIRTS_DATA_FAILURE",
        menTshirtsCollectionRef
      )
    );
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">T-shirts</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {menTshirts.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {menTshirts.map((product) => (
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
