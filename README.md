# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  function addNewItem(cartItem) {
  if (cartItems.length) {
  cartItems.map((currCartItem) => {
  if (cartItem.id !== currCartItem.id) {
  addNewItemSuccessfully(cartItem);
  } else {
  addNewItemError();
  }
  });
  } else {
  addNewItemSuccessfully(cartItem);
  }
  }

  function addNewItemSuccessfully(cartItem) {
  dispatch({
  type: "UPDATE_CART_PRODUCTS",
  payload: [...cartItems, cartItem],
  });
  toast.success(`product added to cart successfully`, {
  autoClose: 5000,
  className: "w-[20rem] ",
  draggable: true,
  });
  }

  function addNewItemError() {
  toast.error(`product is already in your cart`, {
  autoClose: 5000,
  className: "w-[20rem] ",
  draggable: true,
  });
  }

  function addNewItemToCart(cartItem) {
  // Check if the item is already in the cart
  const itemExists = cartItems.some(
  (currCartItem) => cartItem.id === currCartItem.id
  );
  if (itemExists) {
  toast.error(`Product is already in your cart`, {
  autoClose: 5000,
  className: "w-[20rem]",
  draggable: true,
  });
  } else {
  // Add the new item to the cart and show success notification
  dispatch({
  type: "UPDATE_CART_PRODUCTS",
  payload: [...cartItems, cartItem],
  });
  toast.success(`Product added to cart successfully`, {
  autoClose: 5000,
  className: "w-[20rem]",
  draggable: true,
  });
  }
  }
# merchen-store
