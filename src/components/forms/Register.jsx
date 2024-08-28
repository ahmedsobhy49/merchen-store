import React from "react";
import { useFormik } from "formik";
import ErrorMessage from "../common/ErrorMessage";
import * as Yup from "yup";
import { Link } from "react-router-dom";
export default function Register() {
  const validateScheme = Yup.object({
    firstName: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "This value cannot contain numbers or special characters"
      )
      .min(3, "This value should be at least 3 characters")
      .max(20, "This value should be a maximum of 20 characters")
      .required("This value is required"),
    lastName: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "This value cannot contain numbers or special characters"
      )
      .min(3, "This value should be at least 3 characters")
      .max(20, "This value should be a maximum of 20 characters")
      .required("This value is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This value is required"),
    password: Yup.string()
      .matches(
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "The password should be at least eight characters, including one uppercase letter, one lowercase letter, and one number or special character."
      )
      .required("This value is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("This value is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validateScheme,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      className="space-y-4 md:space-y-6 flex flex-col gap-2"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex items-center gap-10 w-full">
        <div className="flex flex-col gap-2 w-1/2">
          <label
            htmlFor="firstName"
            className="text-gray-700 text-sm tracking-wide font-bold"
          >
            First Name
          </label>
          <input
            className="bg-gray-200 bg-opacity-50 px-4 py-4 outline-none focus:bg-opacity-100 rounded-lg"
            id="firstName"
            type="text"
            name="firstName"
            autoComplete="off"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <label
            htmlFor="lastName"
            className="text-gray-700 text-sm tracking-wide font-bold"
          >
            Last Name
          </label>
          <input
            className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
            autoComplete="off"
            id="lastName"
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="signup-email"
            className="text-gray-700 text-sm tracking-wide font-bold"
          >
            Email
          </label>
          <input
            className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
            autoComplete="off"
            id="signup-email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage
            errorMessage={formik.touched.email && formik.errors.email}
          />
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-10 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="password"
              className="text-gray-700 text-sm tracking-wide font-bold"
            >
              Password
            </label>
            <input
              className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
              autoComplete="off"
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage
              errorMessage={formik.touched.password && formik.errors.password}
              height="55px"
              paddingTop="5px"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label
              className="text-gray-700 text-sm tracking-wide font-bold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              disabled={formik.errors.password}
              className="bg-gray-200 bg-opacity-50 px-3 py-4 outline-none focus:bg-opacity-100 rounded-lg"
              autoComplete="off"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage
              errorMessage={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              height="55px"
              paddingTop="5px"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="disabled:bg-opacity-80 disabled:cursor-not-allowed w-full font-bold text-white bg-black hover:bg-primary-700 focus:outline-none tracking-wide rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign up
        </button>
      </div>
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
