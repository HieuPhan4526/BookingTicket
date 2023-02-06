import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/Types/AccountType";
import swal from "sweetalert";
import { history } from "../App";

export default function Login(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      //Các hàm validation của từng trường dữ liệu
      email: Yup.string()
        .required("Email is required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email invalidate"),
      //Ít nhất ký chữ, in hoa, số...
      passWord: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      await dispatch({
        type: LOGIN,
        user: values,
      });
      await swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "OK!",
      });
      history.push("/home");
    },
  });
  return (
    <div className="Sign">
      <div className="Sign-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRWWy0ic9NmIQ5ycV8ys_rMCYMpWZY2GmB4NXddUPIlsKxgNWeyhTud9hvayblFYg2bE&usqp=CAU"
          alt=""
        />
      </div>
      <div className="Sign-content">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              placeholder="Email"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="errors-Vali">{formik.errors.email}</div>
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
            Don't have account yet?
            <span>
              <NavLink to="/register">Register</NavLink>
            </span>
          </p>
          <button type="submit" className="button-Sign">
            Login
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
