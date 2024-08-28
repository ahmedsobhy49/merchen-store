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

export default function WomenLingerie() {
  const dispatch = useDispatch();
  const womenLingerie = useSelector((state) => state.womenLingerie);
  const loading = useSelector(
    (state) => state.fetchingWomenLingerieStates.loading
  );
  const womenLingerieCollectionRef = collection(db, "womenLingerie");

  useEffect(() => {
    dispatch(
      fetchData(
        "FETCH_WOMEN_LINGERIE_DATA_REQUEST",
        "FETCH_WOMEN_LINGERIE_DATA_SUCCESS",
        "FETCH_WOMEN_LINGERIE_DATA_FAILURE",
        womenLingerieCollectionRef
      )
    );
  }, [dispatch]);

  return (
    <ProductsContainer>
      {!loading ? (
        <>
          <div className="w-fit mx-auto  flex items-center gap-3">
            <span className="text-xl font-bold">Lingerie</span>
            <span className="text-md font-bold"> / </span>
            <span className="text-xl font-bold text-gray-300">
              {womenLingerie.length} items
            </span>
          </div>
          <div className={`mt-14 grid grid-cols-4 gap-12 w-full px-10 `}>
            {womenLingerie.map((product) => (
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
