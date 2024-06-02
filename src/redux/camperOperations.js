import { createAsyncThunk } from '@reduxjs/toolkit';
import * as campersApi from '../api/campersApi';

export const getCampersThunk = createAsyncThunk(
    'campers/get',
    async (_, thunkAPI) => {
      try {
        const contacts = campersApi.fetchCampersAll();
        return contacts;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const toggleFavoritesThunk = createAsyncThunk(
    'campers/toggle',
    async (camper, thunkAPI) => {
      try {
        const camperToggle = campersApi.fetchCCampersToggle(camper);
        return camperToggle;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );