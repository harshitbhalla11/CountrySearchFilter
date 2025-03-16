import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  }
);

const countrySlice = createSlice({
  name: 'countries',
  initialState: { data: [], loading: false, error: null },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
