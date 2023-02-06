import { combineReducers, createStore, applyMiddleware } from "redux";
import { BookingTicketReducer } from "./reducer/BookingTicketReducer";
import thunk from "redux-thunk";
import { AccoutReducer } from "./reducer/AccoutReducer";
const rootReducer = combineReducers({
    BookingTicketReducer,
    AccoutReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));