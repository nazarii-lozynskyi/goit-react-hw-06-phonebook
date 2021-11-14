//import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//import { composeWithDevTools } from "redux-devtools-extension";

import contactsReducer from "./phonebook/phonebook-reducer";

//const rootReducer = combineReducers({
//  contacts: contactsReducer,
//});

//const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
