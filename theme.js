import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[200], 
    },
    secondary: {
      main: blue[900], 
    },
    customColors: {
      white: "#F0F8FF", // สีที่กำหนดเอง
    },
  },
});
