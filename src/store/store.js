// src/store/index.js
import { toast } from "react-toastify";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import fetchingMenDataReducer from "./slices/fetchingMenDataSlice";
import fetchingWomenDataReducer from "./slices/fetchingWomenDataSlice";
import generalFetchingDataReducer from "./slices/generalFetchingDataSlice";
import layoutsReducer from "./slices/layoutsSlice";
import wishListReducer from "./slices/wishListSlice";
import { thunk } from "redux-thunk";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("genderState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({ auth: state.auth });
    localStorage.setItem("genderState", serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
};
const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
    fetchingMenData: fetchingMenDataReducer,
    fetchingWomenData: fetchingWomenDataReducer,
    fecthingGeneralData: generalFetchingDataReducer,
    layouts: layoutsReducer,
    auth: authReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // A
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
