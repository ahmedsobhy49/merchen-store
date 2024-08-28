import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../store/authActions";
import { Link } from "react-router-dom";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";
import ErrorMessage from "../common/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { error, loading } = useSelector((state) => state.signup);
  const dispatch = useDispatch();

  const handleEmailBlur = () => {
    if (!emailValue) {
      setEmailError("Email is required");
    } else if (!validateEmail(emailValue)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(
      createAccount(
        emailValue,
        passwordValue,
        confirmPasswordValue,
        setEmailError,
        setPasswordError,
        navigate
      )
    );
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
      <EmailInput
        id="sign-up-email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        className={emailError ? "border-red-600" : ""}
        onBlur={handleEmailBlur}
      />
      <PasswordInput
        label="Password"
        id="sign-up-password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <PasswordInput
        label="Confirm Password"
        id="confirm-sign-up-password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
      {passwordError && <ErrorMessage errorMessage={passwordError} />}
      {emailError && <ErrorMessage errorMessage={emailError} />}
      {error && <ErrorMessage errorMessage={error} />}

      <button
        type="submit"
        className="w-full text-white bg-black hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {loading ? (
          <ReactLoading
            type="spin"
            color="white"
            width={"20px"}
            height={"20px"}
            className="mx-auto"
          />
        ) : (
          "Create an account"
        )}
      </button>
      <p className="text-sm font-light text-gray-500">
        Already have an account?
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:underline"
        >
          Login here
        </Link>
      </p>
    </form>
  );
}

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
