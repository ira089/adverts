import { createSlice } from '@reduxjs/toolkit';
import * as camperOperations from './camperOperations'
import {
    handleFulfilled,
    handlePending,
    handleRejected,
  } from '../functions/functions';

  const handleFulfilledGet = (state, { payload }) => {
    handleFulfilled(state);
    state.items = payload;
  };

  export const camperSlice = createSlice({
    name: 'campers',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
  
    extraReducers: builder => {
      builder
        .addCase(camperOperations.getCampersThunk.pending, handlePending)
        .addCase(camperOperations.getCampersThunk.fulfilled, handleFulfilledGet)
        .addCase(camperOperations.getCampersThunk.rejected, handleRejected)
        // .addCase(addContactsThunk.pending, handlePending)
        // .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
        // .addCase(addContactsThunk.rejected, handleRejected)
        // .addCase(deleteContactsThunk.pending, handlePending)
        // .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
        // .addCase(deleteContactsThunk.rejected, handleRejected)
        // .addCase(changeContactsThunk.pending, handlePending)
        // .addCase(changeContactsThunk.fulfilled, handleFulfilledChange)
        // .addCase(changeContactsThunk.rejected, handleRejected);
    },
  });
  
  export const camperReducer = camperSlice.reducer; 
