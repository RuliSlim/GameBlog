import { useState } from 'react';
import lightTheme from '../theme/theme';

export default () => {
  const [ theme, setTheme ] = useState(lightTheme);
  console.log('masuk 1');

  const toggleDarkTheme = () => {
    const { palette: { type, primary, secondary } } = theme;
    const updateTheme = {
      ...theme,
      palette: {
        primary,
        secondary,
        type: type === 'dark' ? 'light' : 'dark'
      }
    };
    setTheme(updateTheme);
  };
  return { theme, toggleDarkTheme };
};
