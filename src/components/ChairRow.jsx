import React from "react";
import { CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import dataDSGhe from "../utils/data.json";
import Chairs from "./Chairs";

export default function ChairRow() {
  const renderChairRow = () => {
    return dataDSGhe.map((chairRow, index) => {
      return (
        <div key={index}>
          <Chairs chairRow={chairRow} indexChairRow={index} />
        </div>
      );
    });
  };
  return (
    <div>
      <div>
        <ul className="d-flex  justify-content-between flex-wrap">
          <li className="d-flex align-items-center">
            <button className="ghe chair-reponsive mx-0"></button>
            <span className="ml-2 font-weight-bold text-light">Ghế thường</span>
          </li>
          <li className="d-flex align-items-center my-2">
            <button className="gheDangChon chair-reponsive "></button>
            <span className="ml-2 font-weight-bold text-light">
              Ghế Đang Chọn
            </span>
          </li>
          <li className="d-flex align-items-center my-2">
            <button className="gheVip chair-reponsive"></button>
            <span className="ml-2 font-weight-bold text-light">Ghế Vip</span>
          </li>
          <li className="d-flex align-items-center my-2">
            <button className="gheDuocChon  chair-reponsive2">
              <CloseCircleOutlined />
            </button>
            <span className="ml-2 font-weight-bold text-light">
              Ghế Đã Được Đặt
            </span>
          </li>
          <li className="d-flex align-items-center my-2">
            <button className="gheDaDuocDat chair-reponsive2 ">
              <UserOutlined className="text-warning" />
            </button>
            <span className="ml-2 font-weight-bold text-light">
              Ghế Mình Đặt
            </span>
          </li>
        </ul>
      </div>
      <hr />
      <div>{renderChairRow()}</div>
    </div>
  );
}
