import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import * as Yup from "yup";
import { REGISTER } from "../redux/Types/AccountType";
import { history } from "../App";
export default function SignUp() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      dislayName: "",
      email: "",
      phoneNumber: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      //Các hàm validation của từng trường dữ liệu
      dislayName: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email invalidate"),
      phoneNumber: Yup.string().required("PhoneNumber is required"),
      passWord: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      await await swal({
        title: "Good job",
        text: "You clicked the button!",
        icon: "success",
        button: "OK!",
      });
      history.push("/login");
    },
  });
  return (
    <div className="SignUp">
      <div className="Sign-content">
        <h1>Register CyberBugs</h1>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-user"></i>
            </span>
            <input
              placeholder="Name"
              id="dislayName"
              name="dislayName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.dislayName}
            />
          </div>
          {formik.touched.dislayName && formik.errors.dislayName ? (
            <div className="errors-Vali">{formik.errors.dislayName}</div>
          ) : null}
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="errors-Vali">{formik.errors.email}</div>
          ) : null}
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-phone"></i>
            </span>
            <input
              placeholder="Phone number"
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="errors-Vali">{formik.errors.phoneNumber}</div>
          ) : null}
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-lock"></i>
            </span>
            <input
              placeholder="Password"
              id="passWord"
              name="passWord"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.passWord}
            />
          </div>
          {formik.touched.passWord && formik.errors.passWord ? (
            <div className="errors-Vali">{formik.errors.passWord}</div>
          ) : null}
          <p>
            Already have an account?
            <span>
              <NavLink to="/login">Login Now</NavLink>
            </span>
          </p>
          {/* <div className="addAvatar">
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <i className="fa fa-file-image"></i>
              <span>Add avatar</span>
            </label>
          </div> */}
          <button type="submit" className="button-Sign">
            Register
          </button>
        </form>
        <div className="icon-contact">
          <span>
            <i className="fab fa-facebook"></i>
          </span>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
