import { BOOKING, DELETE_TICKET, RESET } from "../Types/BookingTicketTypes";
import swal from "sweetalert";

const stateDefault = {
    danhSachGheDangDat: [],
};

export const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case BOOKING: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexChartFind = danhSachGheDangDatUpdate.findIndex(
                (gheDangDat) => gheDangDat.soGhe === action.chair.soGhe
            );
            if (indexChartFind > -1) {
                danhSachGheDangDatUpdate.splice(indexChartFind, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.chair);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state };
        }
        case DELETE_TICKET: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(
                (gheDangDat) => gheDangDat.soGhe === action.gheDangDat
            );
            if (index > -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state };
        }
        case RESET: state.danhSachGheDangDat.map((gheDangDat, index) => {
            if (gheDangDat) {
                return swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "OK!",
                });
            }
        });
            state.danhSachGheDangDat = [];
            return { ...state };

        default:
            return state;
    }
};

