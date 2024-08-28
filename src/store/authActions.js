import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export const login =
  (email, password, navigate, location) => async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userInfo = userCredential.user;
      dispatch({ type: "LOGIN_SUCCESS", payload: userInfo });

      // Determine where to navigate based on the previous route
      const { from } = location.state || { from: { pathname: "/" } };
      if (from.pathname === "/cart") {
        navigate("/cart", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
      console.log(from);
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
      dispatch({ type: "LOGIN_FAILURE", payload: errorMessage });
    }
  };

export const logout = () => (dispatch) => {
  auth.signOut();
  dispatch({ type: "LOGOUT" });
};

export const createAccount =
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
    dispatch({ type: " SIGNUP_REQUEST" });

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

    dispatch({ type: " SIGNUP_REQUEST" });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userInfo = userCredential.user;
      dispatch({ type: "SIGNUP_SUCCESS", payload: userInfo });
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
      dispatch({ type: "SIGNUP_FAILURE", payload: errorMessage });
    }
  };

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
