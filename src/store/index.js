// src/store/index.js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  signup: {
    loading: false,
    error: null,
    success: false,
  },

  user: {
    isAuthenticated: false,
    loading: false,
    error: null,
    userInfo: null,
  },

  suggestedProducts: [],
  fetchingSuggestedProductsStates: {
    error: null,
    loading: false,
  },
  newArrivalData: [],
  fetchingNewArrivalStates: {
    error: null,
    loading: false,
  },

  // men
  menJeans: [],
  fetchingMenJeansStates: {
    error: null,
    loading: false,
  },

  menPants: [],
  fetchingMenPantsStates: {
    error: null,
    loading: false,
  },

  menTshirts: [],
  fetchingMenTshirtsStates: {
    error: null,
    loading: false,
  },

  menShorts: [],
  fetchingMenShortsStates: {
    error: null,
    loading: false,
  },

  menHoodies: [],
  fetchingMenHoodiesStates: {
    error: null,
    loading: false,
  },

  menShirts: [],
  fetchingMenShirtsStates: {
    error: null,
    loading: false,
  },

  menJackets: [],
  fetchingMenJacketsStates: {
    error: null,
    loading: false,
  },

  menSwimwear: [],
  fetchingMenSwimwearStates: {
    error: null,
    loading: false,
  },

  menKint: [],
  fetchingMenKintStates: {
    error: null,
    loading: false,
  },

  menUnderwear: [],
  fetchingMenUnderwearStates: {
    error: null,
    loading: false,
  },

  menPacks: [],
  fetchingMenPacksStates: {
    error: null,
    loading: false,
  },

  // women //
  womenTops: [],
  fetchingWomenTopsStates: {
    error: null,
    loading: false,
  },

  womenTshirts: [],
  fetchingWomenTshirtsStates: {
    error: null,
    loading: false,
  },

  womenDresses: [],
  fetchingWomenDressesStates: {
    error: null,
    loading: false,
  },

  womenJeans: [],
  fetchingWomenJeansStates: {
    error: null,
    loading: false,
  },

  womenPants: [],
  fetchingWomenPantsStates: {
    error: null,
    loading: false,
  },

  womenSkirts: [],
  fetchingWomenSkirtsStates: {
    error: null,
    loading: false,
  },

  womenShorts: [],
  fetchingWomenShortsStates: {
    error: null,
    loading: false,
  },

  womenBlouses: [],
  fetchingWomenBlousesStates: {
    error: null,
    loading: false,
  },

  womenBikinis: [],
  fetchingWomenBikinisStates: {
    error: null,
    loading: false,
  },

  womenJumpsuits: [],
  fetchingWomenJumpsuitsStates: {
    error: null,
    loading: false,
  },

  womenHoodies: [],
  fetchingWomenHoodiesStates: {
    error: null,
    loading: false,
  },

  womenJackets: [],
  fetchingWomenJacketsStates: {
    error: null,
    loading: false,
  },

  womenTotalLook: [],
  fetchingWomenTotalLookStates: {
    error: null,
    loading: false,
  },

  womenKintwear: [],
  fetchingWomenKintwearStates: {
    error: null,
    loading: false,
  },

  womenVests: [],
  fetchingWomenVestsStates: {
    error: null,
    loading: false,
  },

  womenBlazers: [],
  fetchingWomenBlazersStates: {
    error: null,
    loading: false,
  },

  womenLingerie: [],
  fetchingWomenLingerieStates: {
    error: null,
    loading: false,
  },

  cartItems: [],
  wishListItems: [],
  orderSummary: {
    originalPrice: 0,
    savings: 0,
    storePickup: 0,
    tax: 0,
    total: 0,
  },
  gender: "men",
  searchButtonClicked: false,
  showProductCategories: false,
  showClothingCategories: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // signup cases
    case "SIGNUP_REQUEST":
      return {
        ...state,
        signup: { loading: true, error: null, success: false },
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signup: { loading: false, error: null, success: true },
      };

    case "SIGNUP_FAILURE":
      return {
        ...state,
        signup: { loading: false, error: action.payload, success: false },
      };

    // login cases
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: { ...state.user, loading: true, error: null },
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: {
          isAuthenticated: true,
          userInfo: action.payload,
          loading: false,
          error: null,
        },
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        user: { ...state.user, loading: false, error: action.payload },
      };

    case "LOGOUT":
      return {
        ...state,
        user: {
          isAuthenticated: false,
          userInfo: null,
          error: null,
          loading: false,
        },
      };

    // fetching men clothing data
    case "FETCH_SUGGESTED_DATA_REQUEST":
      return {
        ...state,
        fetchingSuggestedProductsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_SUGGESTED_DATA_SUCCESS":
      return {
        ...state,
        suggestedProducts: action.payload,
        fetchingSuggestedProductsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_SUGGESTED_DATA_FAILURE":
      return {
        ...state,
        fetchingSuggestedProductsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_NEW_ARRIVAL_DATA_REQUEST":
      return {
        ...state,
        fetchingNewArrivalStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_NEW_ARRIVAL_DATA_SUCCESS":
      return {
        ...state,
        newArrivalData: action.payload,
        fetchingNewArrivalStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_NEW_ARRIVAL_DATA_FAILURE":
      return {
        ...state,
        fetchingNewArrivalStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_JEANS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenJeansStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_JEANS_DATA_SUCCESS":
      return {
        ...state,
        menJeans: action.payload,
        fetchingMenJeansStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_JEANS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenJeansStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_PANTS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenPantsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_PANTS_DATA_SUCCESS":
      return {
        ...state,
        menPants: action.payload,
        fetchingMenPantsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_PANTS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenPantsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_TSHIRTS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenTshirtsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_TSHIRTS_DATA_SUCCESS":
      return {
        ...state,
        menTshirts: action.payload,
        fetchingMenTshirtsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_TSHIRTS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenTshirtsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_SHORTS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenShortsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_SHORTS_DATA_SUCCESS":
      return {
        ...state,
        menShorts: action.payload,
        fetchingMenShortsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_SHORTS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenShortsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_HOODIES_DATA_REQUEST":
      return {
        ...state,
        fetchingMenHoodiesStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_HOODIES_DATA_SUCCESS":
      return {
        ...state,
        menHoodies: action.payload,
        fetchingMenHoodiesStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_HOODIES_DATA_FAILURE":
      return {
        ...state,
        fetchingMenHoodiesStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_SHIRTS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenShirtsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_SHIRTS_DATA_SUCCESS":
      return {
        ...state,
        menShirts: action.payload,
        fetchingMenShirtsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_SHIRTS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenShirtsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_JACKETS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenJacketsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_JACKETS_DATA_SUCCESS":
      return {
        ...state,
        menJackets: action.payload,
        fetchingMenJacketsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_JACKETS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenJacketsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_SWIMWEAR_DATA_REQUEST":
      return {
        ...state,
        fetchingMenSwimwearStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_SWIMWEAR_DATA_SUCCESS":
      return {
        ...state,
        menSwimwear: action.payload,
        fetchingMenSwimwearStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_SWIMWEAR_DATA_FAILURE":
      return {
        ...state,
        fetchingMenSwimwearStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_KINT_DATA_REQUEST":
      return {
        ...state,
        fetchingMenKintStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_KINT_DATA_SUCCESS":
      return {
        ...state,
        menKint: action.payload,
        fetchingMenKintStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_KINT_DATA_FAILURE":
      return {
        ...state,
        fetchingMenKintStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_UNDERWEAR_DATA_REQUEST":
      return {
        ...state,
        fetchingMenUnderwearStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_UNDERWEAR_DATA_SUCCESS":
      return {
        ...state,
        menUnderwear: action.payload,
        fetchingMenUnderwearStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_UNDERWEAR_DATA_FAILURE":
      return {
        ...state,
        fetchingMenUnderwearStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_MEN_PACKS_DATA_REQUEST":
      return {
        ...state,
        fetchingMenPacksStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_MEN_PACKS_DATA_SUCCESS":
      return {
        ...state,
        menPacks: action.payload,
        fetchingMenPacksStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_MEN_PACKS_DATA_FAILURE":
      return {
        ...state,
        fetchingMenPacksStates: {
          loading: false,
          error: action.error,
        },
      };

    // fetch women clothing data
    // ... other cases

    // Women's clothing cases
    case "FETCH_WOMEN_BIKINIS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenBikinisStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_BIKINIS_DATA_SUCCESS":
      return {
        ...state,
        womenBikinis: action.payload,
        fetchingWomenBikinisStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_BIKINIS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenBikinisStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_BLAZERS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenBlazersStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_BLAZERS_DATA_SUCCESS":
      return {
        ...state,
        womenBlazers: action.payload,
        fetchingWomenBlazersStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_BLAZERS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenBlazersStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_BLOUSES_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenBlousesStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_BLOUSES_DATA_SUCCESS":
      return {
        ...state,
        womenBlouses: action.payload,
        fetchingWomenBlousesStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_BLOUSES_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenBlousesStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_DRESSES_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenDressesStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_DRESSES_DATA_SUCCESS":
      return {
        ...state,
        womenDresses: action.payload,
        fetchingWomenDressesStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_DRESSES_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenDressesStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_HOODIES_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenHoodiesStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_HOODIES_DATA_SUCCESS":
      return {
        ...state,
        womenHoodies: action.payload,
        fetchingWomenHoodiesStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_HOODIES_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenHoodiesStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_JACKETS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenJacketsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_JACKETS_DATA_SUCCESS":
      return {
        ...state,
        womenJackets: action.payload,
        fetchingWomenJacketsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_JACKETS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenJacketsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_JEANS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenJeansStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_JEANS_DATA_SUCCESS":
      return {
        ...state,
        womenJeans: action.payload,
        fetchingWomenJeansStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_JEANS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenJeansStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_JUMPSUITS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenJumpsuitsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_JUMPSUITS_DATA_SUCCESS":
      return {
        ...state,
        womenJumpsuits: action.payload,
        fetchingWomenJumpsuitsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_JUMPSUITS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenJumpsuitsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_KINTWEAR_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenKintwearStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_KINTWEAR_DATA_SUCCESS":
      return {
        ...state,
        womenKintwear: action.payload,
        fetchingWomenKintwearStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_KINTWEAR_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenKintwearStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_LINGERIE_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenLingerieStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_LINGERIE_DATA_SUCCESS":
      return {
        ...state,
        womenLingerie: action.payload,
        fetchingWomenLingerieStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_LINGERIE_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenLingerieStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_PANTS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenPantsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_PANTS_DATA_SUCCESS":
      return {
        ...state,
        womenPants: action.payload,
        fetchingWomenPantsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_PANTS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenPantsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_SHORTS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenShortsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_SHORTS_DATA_SUCCESS":
      return {
        ...state,
        womenShorts: action.payload,
        fetchingWomenShortsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_SHORTS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenShortsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_SKIRTS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenSkirtsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_SKIRTS_DATA_SUCCESS":
      return {
        ...state,
        womenSkirts: action.payload,
        fetchingWomenSkirtsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_SKIRTS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenSkirtsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_TOPS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenTopsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_TOPS_DATA_SUCCESS":
      return {
        ...state,
        womenTops: action.payload,
        fetchingWomenTopsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_TOPS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenTopsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_TOTALLOOK_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenTotalLookStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_TOTALLOOK_DATA_SUCCESS":
      return {
        ...state,
        womenTotalLook: action.payload,
        fetchingWomenTotalLookStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_TOTALLOOK_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenTotalLookStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_TSHIRTS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenTshirtsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_TSHIRTS_DATA_SUCCESS":
      return {
        ...state,
        womenTshirts: action.payload,
        fetchingWomenTshirtsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_TSHIRTS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenTshirtsStates: {
          loading: false,
          error: action.error,
        },
      };

    case "FETCH_WOMEN_VESTS_DATA_REQUEST":
      return {
        ...state,
        fetchingWomenVestsStates: {
          loading: true,
          error: null,
        },
      };

    case "FETCH_WOMEN_VESTS_DATA_SUCCESS":
      return {
        ...state,
        womenVests: action.payload,
        fetchingWomenVestsStates: {
          loading: false,
          error: null,
        },
      };

    case "FETCH_WOMEN_VESTS_DATA_FAILURE":
      return {
        ...state,
        fetchingWomenVestsStates: {
          loading: false,
          error: action.error,
        },
      };

    // ... other cases

    case "UPDATE_CART_PRODUCTS":
      return { ...state, cartItems: action.payload };

    case "TOGGLE_WISH_LIST_ITEM":
      return {
        ...state,
        wishListItems: action.payload,
      };

    case "SHOW_SEARCH_COMPONENT":
      return { ...state, searchButtonClicked: action.payload };

    case "HIDE_SEARCH_COMPONENT":
      return { ...state, searchButtonClicked: action.payload };

    case "SHOW_PRODUCT_CATEGORIES":
      return {
        ...state,
        showProductCategories: action.payload,
        showClothingCategories: false,
      };

    case "SHOW_CLOTHING_CATEGORIES":
      return { ...state, showClothingCategories: action.payload };

    case "CALC_ORDER_SUMMARY":
      return { ...state, orderSummary: action.payload };

    case "CHANGE_GENDER":
      return { ...state, gender: action.payload };

    default:
      return state;
  }
};

// Utility functions to handle localStorage for gender state
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("genderState");
    if (serializedState === null) {
      return undefined; // No state to load
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({ gender: state.gender });
    localStorage.setItem("genderState", serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
};

export const fetchData =
  (
    requestType,
    successType,
    failureType,
    menCollection = null,
    womenCollection = null
  ) =>
  async (dispatch, getState) => {
    let collectionRef;
    dispatch({ type: requestType });
    try {
      const gender = getState().gender; // Access the current state
      if (womenCollection) {
        collectionRef = gender === "men" ? menCollection : womenCollection;
      } else {
        collectionRef = menCollection;
      }

      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Add document ID here
        ...doc.data(), // Spread the document data
      }));
      dispatch({ type: successType, payload: data });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: failureType, error: error.message });
    }
  };

export function toggleWishListItem(cartItem) {
  return (dispatch, getState) => {
    const wishListItems = getState().wishListItems;
    const isProductInWishList = wishListItems.some(
      (wishItem) => wishItem.id === cartItem.id
    );

    if (isProductInWishList) {
      const newWishListItems = wishListItems.filter(
        (wishListItem) => wishListItem.id !== cartItem.id
      );
      dispatch({
        type: "TOGGLE_WISH_LIST_ITEM",
        payload: newWishListItems,
      });
    } else {
      dispatch({
        type: "TOGGLE_WISH_LIST_ITEM",
        payload: [...wishListItems, cartItem],
      });
    }
  };
}

export const addNewItemToCart = (cartItem) => (dispatch, getState) => {
  const state = getState();
  const cartItems = state.cartItems;

  const itemExists = cartItems.some(
    (currCartItem) => cartItem.id === currCartItem.id
  );

  if (itemExists) {
    // Show an error toast if the item already exists
    toast.error("Product is already in your cart", {
      autoClose: 5000,
      className: "w-[20rem]",
      draggable: true,
    });
  } else {
    // Dispatch the action to add the item to the cart
    dispatch({
      type: "UPDATE_CART_PRODUCTS",
      payload: [...cartItems, cartItem],
    });
    // Show a success toast
    toast.success("Item added to cart!", {
      autoClose: 5000,
      className: "w-[20rem]",
      draggable: true,
    });
  }
};

const persistedState = loadState(); // Load persisted gender state

const store = createStore(
  rootReducer,
  { ...initialState, ...persistedState }, // Merge persisted gender state with initial state
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState()); // Save only the gender state whenever the state changes
});

export default store;
