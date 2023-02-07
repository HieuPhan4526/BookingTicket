import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { USER_LOGIN } from "../redux/Types/AccountType";
import { history } from "../App";
import swal from "sweetalert";

export default function Login(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          await localStorage.setItem(
            USER_LOGIN,
            JSON.stringify(user.providerData[0])
          );
          await swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });
          history.push("/");
          // ...
        })
        .catch((error) => {
          swal({
            title: "Something went wrong",
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
    <div className="Sign">
      <div className="Sign-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRWWy0ic9NmIQ5ycV8ys_rMCYMpWZY2GmB4NXddUPIlsKxgNWeyhTud9hvayblFYg2bE&usqp=CAU"
          alt=""
        />
      </div>
      <div className="Sign-content">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-envelope"></i>
            </span>
            <input placeholder="Email" type="text" />
          </div>

          <div className="form-input">
            <span className="iconForm">
              <i className="fa fa-lock"></i>
            </span>
            <input placeholder="Password" type="password" />
          </div>
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
