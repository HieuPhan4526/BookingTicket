import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { history } from "../App";
export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[3].value;
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          await swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });
          await history.push("login");
          // ...
        })
        .catch((error) => {
          swal({
            title: "Something went wrong!",
            text: "You clicked the button!",
            icon: "warning",
            button: "OK!",
          });
        });
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="SignUp">
      <div className="Sign-content">
        <h1>Register CyberBugs</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-user"></i>
            </span>
            <input placeholder="Name" type="text" />
          </div>
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-envelope"></i>
            </span>
            <input placeholder="Email" type="text" />
          </div>
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-phone"></i>
            </span>
            <input placeholder="Phone number" type="number" />
          </div>
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-lock"></i>
            </span>
            <input placeholder="Password" type="password" />
          </div>
          <button type="submit" className="button-Sign">
            Register
          </button>
          <p>
            Already have an account?
            <span>
              <NavLink to="/login">Login Now</NavLink>
            </span>
          </p>
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
