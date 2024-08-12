// COMBINE REDUCER

import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";

export const reducer = combineReducers({ productData: productReducer });

/*
    => Combine Reducers are going to combine multiple reducer funtions into single reducer function.
*/