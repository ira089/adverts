import { configureStore } from '@reduxjs/toolkit';
import {camperReducer} from './camperClice';
import filterReducer from './filterSlice';

export const store = configureStore({
    reducer: {
        campers: camperReducer,
        filter: filterReducer,
    }
})