import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStockData = createAsyncThunk('stocks/fetchStockData', async (page) => {
  const response = await fetch(`/api/stocks?page=${page}`);
  const data = await response.json();
  return { data: data.results, count: data.count };
});

const stockSlice = createSlice({
  name: 'stocks',
  initialState: {
    stockData: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.loading = false;
        state.stockData = action.payload.data;
        state.totalPages = Math.ceil(action.payload.count / 10);
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage } = stockSlice.actions;

export default stockSlice.reducer;
