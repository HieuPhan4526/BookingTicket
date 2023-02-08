import React from "react";
import { useSelector } from "react-redux";
import { history } from "../App";
import ChairRow from "../components/ChairRow";
import InfoTicket from "../components/InfoTicket";
import { USER_LOGIN } from "../redux/Types/AccountType";
import { Redirect } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const user = JSON.parse(localStorage.getItem(USER_LOGIN));
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="bgMovie">
      <div className="container">
        <div>
          <h2 className="text-warning text-center mt-4">ĐẶT VÉ XEM PHIM</h2>
          <div className="d-flex flex-wrap justify-content-between">
            <h3 className="text-light font-weight-bold">Email: {user.email}</h3>
            <span className="text-light">Username: {user.displayName}</span>
            <button
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                signOut(auth);
                history.push("/login");
              }}
              className="btn btn-danger"
            >
              Logout
            </button>
          </div>
          <hr />
          <h4 className="text-light text-center mt-4">Màn Hình</h4>
          <div className="d-flex justify-content-center">
            <div className="screen"></div>
          </div>
          <ChairRow />
        </div>
        <div>
          <InfoTicket />
        </div>
      </div>
    </div>
  );
}
