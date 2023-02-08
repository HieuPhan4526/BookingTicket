import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_TICKET, RESET } from "../redux/Types/BookingTicketTypes";
import swal from "sweetalert";

export default function InfoTicket() {
  const { danhSachGheDangDat } = useSelector(
    (rootReducer) => rootReducer.BookingTicketReducer
  );
  const dispatch = useDispatch();
  const renderDSGheDangDat = () => {
    return danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <tr className="text-warning" key={index}>
          <td>{gheDangDat.soGhe}</td>
          <td>{gheDangDat.gia.toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                swal({
                  title: "Are you sure?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    swal("Delete complete", {
                      icon: "success",
                    });
                    dispatch({
                      type: DELETE_TICKET,
                      gheDangDat: gheDangDat.soGhe,
                    });
                  } else {
                    swal("Your imaginary file is safe!");
                  }
                });
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="info-booking">
      <hr />
      <table
        style={{
          marginTop: "50px",
        }}
        className="table table-dark table-bordered"
      >
        <thead>
          <tr className="text-center">
            <th scope="col">Ghế</th>
            <th scope="col">Giá Ghế</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">{renderDSGheDangDat()}</tbody>
        <tfoot>
          <tr>
            <th></th>
            <th className="text-right">
              Tổng tiền:{" "}
              {danhSachGheDangDat
                .reduce((tongTien, gheDangDat, index) => {
                  return (tongTien += gheDangDat.gia);
                }, 0)
                .toLocaleString()}
              VND
            </th>
          </tr>
        </tfoot>
      </table>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({
            type: RESET,
          });
        }}
      >
        Đặt vé
      </button>
    </div>
  );
}
