import { combineReducers, createStore, applyMiddleware } from "redux";
import { BookingTicketReducer } from "./reducer/BookingTicketReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    BookingTicketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));