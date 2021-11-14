import { createAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

import actionTypes from "./phonebook-types";

//const addContact = ({ name, number }) => ({
//  type: actionTypes.ADD,
//  payload: {
//    id: uuidv4(),
//    name: name,
//    number: number,
//  },
//});
//export const addContact = (value) => ({
//  type: actionTypes.ADD,
//  payload: value,
//});

//const deleteContact = (contactId) => ({
//  type: actionTypes.DELETE,
//  payload: contactId,
//});
//export const deleteContact = (value) => ({
//  type: actionTypes.DELETE,
//  payload: value,
//});

//const changeFilter = (value) => ({
//  type: actionTypes.CHANGE_FILTER,
//  payload: value,
//});

const addContact = createAction(actionTypes.ADD, ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));
const deleteContact = createAction(actionTypes.DELETE);
const changeFilter = createAction(actionTypes.CHANGE_FILTER);

const phoneBookActions = { addContact, deleteContact, changeFilter };

export default phoneBookActions;
