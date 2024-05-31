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