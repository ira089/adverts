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

  const handleFulfilledToggle = (state, {payload}) => {
    handleFulfilled(state);
    const index = state.items.findIndex(
      item => item.id === payload.id
    );
    state.items.splice(index, 1, payload);
  }

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
        .addCase(camperOperations.toggleFavoritesThunk.pending, handlePending)
        .addCase(camperOperations.toggleFavoritesThunk.fulfilled, handleFulfilledToggle)
        .addCase(camperOperations.toggleFavoritesThunk.rejected, handleRejected);
    },
  });
  
  export const camperReducer = camperSlice.reducer; 
