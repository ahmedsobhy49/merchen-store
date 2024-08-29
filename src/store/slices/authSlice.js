import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

// Define initial state
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
  gender: "men",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.signup = { loading: true, error: null, success: false };
    },
    signupSuccess: (state) => {
      state.signup = { loading: false, error: null, success: true };
    },
    signupFailure: (state, action) => {
      state.signup = { loading: false, error: action.payload, success: false };
    },
    loginRequest: (state) => {
      state.user = { ...state.user, loading: true, error: null };
    },
    loginSuccess: (state, action) => {
      state.user = {
        isAuthenticated: true,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    },
    loginFailure: (state, action) => {
      state.user = { ...state.user, loading: false, error: action.payload };
    },
    logout: (state) => {
      state.user = {
        isAuthenticated: false,
        userInfo: null,
        error: null,
        loading: false,
      };
    },
    changeGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const handleLogin =
  (email, password, navigate, location) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userInfo = userCredential.user;
      dispatch(loginSuccess(userInfo));

      // Determine where to navigate based on the previous route
      const { from } = location.state || { from: { pathname: "/" } };
      if (from.pathname === "/cart") {
        navigate("/cart", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/invalid-email":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          errorMessage = "Incorrect email or password";
          break;

        case "auth/missing-password":
          errorMessage = "Password is missing";
          break;
        default:
          errorMessage = "Failed to sign in. Please try again.";
      }
      dispatch(loginFailure(errorMessage));
    }
  };

export const handleLogout = () => (dispatch) => {
  auth.signOut();
  dispatch(logout());
};

export const handleCreateAccount =
  (
    email,
    password,
    confirmPassword,
    setEmailError,
    setPasswordError,
    navigate
  ) =>
  async (dispatch) => {
    // Validate input

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      setPasswordError("");
      return;
    } else {
      setEmailError("");
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }
    if (!password) {
      setPasswordError("Please provide a password");
      return;
    } else {
      setPasswordError("");
    }
    dispatch(signupRequest());
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userInfo = userCredential.user;
      dispatch(signupSuccess(userInfo));
      navigate("/login");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/weak-password":
          errorMessage = "Weak password";
          break;
        default:
          errorMessage = "Failed to sign up. Please try again.";
      }
      dispatch(signupFailure(errorMessage));
    }
  };

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Export the action creators and reducer
export const {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  changeGender,
} = authSlice.actions;

export default authSlice.reducer;
