import { configureStore } from '@reduxjs/toolkit';
import {camperReducer} from './camperClice';

export const store = configureStore({
    reducer: {
        campers: camperReducer,
    }
})