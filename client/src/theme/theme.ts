import { createMuiTheme, Theme } from '@material-ui/core/styles';

const lightTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFCCF7',
      light: '#B7D962'
    },
    secondary: {
      main: '#B7D962'
    }
  }
});

export default lightTheme;
