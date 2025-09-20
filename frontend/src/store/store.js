import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice.js';
import heroSlice from './hero.slice.js';

export const store = configureStore({
      reducer: {
            auth: authSlice,
            hero: heroSlice,
      },
});