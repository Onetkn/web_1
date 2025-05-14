import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
  language: 'zh' | 'en';
}

const initialState: ThemeState = {
  isDarkMode: false,
  language: 'zh',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setLanguage: (state, action: PayloadAction<'zh' | 'en'>) => {
      state.language = action.payload;
    },
  },
});

export const { toggleDarkMode, setLanguage } = themeSlice.actions;
export default themeSlice.reducer; 