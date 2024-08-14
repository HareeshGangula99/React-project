// ACTION CREATOR

import { ACTION_TYPE } from "../types/ActionTypes";

export const addToCart = (product) => {
  return { type: ACTION_TYPE.ADD_TO_CART, payload: product };
};

export const remoeFromCart = (id) => {
  return { type: ACTION_TYPE.REMOVE_FROM_CART, payload: id };
};




/*
    => Action creators are plain javascript function which will return type and payload.
    => This cretors will recive type from action type and payload will be recived from dispatch. (in the prticular componenet)
*/