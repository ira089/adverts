import { createSlice } from '@reduxjs/toolkit';

const filterClice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (_, { payload }) => {
      return payload;
    },
  },
});

export const { addFilter } = filterClice.actions;
export default filterClice.reducer;