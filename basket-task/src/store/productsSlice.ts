import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Item, ItemsState } from '../types/Types';

export const fetchProducts = createAsyncThunk<Item[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Item[] = await response.json();
      return data.map(product => ({ ...product, count: 1 }));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const initialState: ItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCount(state, action) {
        const chosed = state.items.find(item => item.id === action.payload.id);
        console.log(action.payload.id);
        if (chosed) {
            chosed.count = chosed.count + 1
        }
    },
    removeCount(state, action) {
      const { id } = action.payload;
      const chosen = state.items.find(item => item.id === id);
      if (chosen) {
        if (chosen.count > 0) {
          chosen.count = chosen.count - 1;
        } else {
          chosen.count = 0;
        }
      }
    },
    deleteItem(state, action) {
      const { id } = action.payload;
        state.items = state.items.filter(item => item.id !== id);
        console.log(action.payload.id);
    },
    setCount(state, action) {
      const { id, count } = action.payload;
      const chosen = state.items.find(item => item.id === id);
      if (chosen) {
        chosen.count = count;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {addCount, removeCount, deleteItem, setCount} = productsSlice.actions

export default productsSlice.reducer;
