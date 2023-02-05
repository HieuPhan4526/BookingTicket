import React, { Fragment } from "react";
import { CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { BOOKING } from "../redux/Types/BookingTicketTypes";

export default function Chairs(props) {
  const { danhSachGheDangDat } = useSelector(
    (rootReducer) => rootReducer.BookingTicketReducer
  );
  const dispatch = useDispatch();
  const renderChairs = () => {
    return props.chairRow.danhSachGhe.map((chair, index) => {
      let gheVipCss = chair.loaiGhe === "Vip" ? "gheVip" : "";
      let gheDaDatCss = chair.daDat === true ? "gheDuocChon" : "";
      let gheDangDatCss = "";
      let gheDaDuocDatCss = "";
      let indexDSGheDangDat = danhSachGheDangDat?.findIndex(
        (gheDangDat) => gheDangDat.soGhe === chair.soGhe
      );
      if (indexDSGheDangDat > -1) {
        gheDangDatCss = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            dispatch({
              type: BOOKING,
              chair: chair,
            });
          }}
          disabled={gheDaDatCss}
          key={index}
          className={`ghe ${gheVipCss} ${gheDaDatCss} ${gheDangDatCss}`}
        >
          {chair.daDat ? (
            gheDaDuocDatCss != "" ? (
              <UserOutlined className="text-warning" />
            ) : (
              <CloseCircleOutlined />
            )
          ) : (
            chair.soGhe
          )}
        </button>
      );
    });
  };
  return <div>{renderChairs()}</div>;
}
