import { BOOKING, DELETE_TICKET } from "../Types/BookingTicketTypes";

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
        default:
            return state;
    }
};

