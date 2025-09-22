import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice.js';
import heroSlice from './hero.slice.js';
import aboutSlice from './about.slice.js';
import educationSlice from './education.slice.js';
import skillsSlice from './skills.slice.js';
import projectSlice from './project.slice.js';
import servicesSlice from './services.slice.js';

export const store = configureStore({
      reducer: {
            auth: authSlice,
            hero: heroSlice,
            about: aboutSlice,
            education: educationSlice,
            skills: skillsSlice,
            project: projectSlice,
            services: servicesSlice
      },
});
