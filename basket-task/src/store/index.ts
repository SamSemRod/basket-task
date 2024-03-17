import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    items: productsReducer,
  },
});

// Тип RootState для использования в хуках useSelector
export type RootState = ReturnType<typeof store.getState>;

// Тип AppDispatch для использования в хуке useDispatch
export type AppDispatch = typeof store.dispatch;
