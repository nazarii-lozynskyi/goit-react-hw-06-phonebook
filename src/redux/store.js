import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//import { createStore, combineReducers } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import logger from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension";

import contactsReducer from "./phonebook/phonebook-reducer";

const contactsPersistConfig = {
  key: "Contacts",
  storage,
  blacklist: ["filter"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

//const rootReducer = combineReducers({
//  contacts: contactsReducer,
//});

//const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export default { store, persistor };
