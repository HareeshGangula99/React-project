// STORE

import { createStore } from "redux";
import { reducer } from "../product-reducer/reducer";

export const Store = createStore(reducer, {});

/*
    => Store will create an Redux store and it will have all the data which are requried for application.
*/