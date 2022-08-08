import { createTheme, styled } from '@mui/material/styles';
import MuiButton from "@mui/material/Button";

export const customTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(to right, #FED570, #FE96B0)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }
      }
    }
  },
  palette: {
    text: {
      primary: '#FFFFFF',
      secondary: '#666666'
    },
    primary: {
      main: '#FFFFFF'
    }
  }
});

export const StyledButton = styled(MuiButton)(props => ({
  background: "#FFFFFF",
  fontWeight: 400,
  fontSize: "1.5rem",
  color: "#666666",
  textAlign: "center",
  borderRadius: "40px",
  padding: "20px 80px",
  fontFamily: 'DM Serif Display',
  textTransform: 'none',
  margin: '1rem',
  "&:hover": {
    background: "#F0A49D"
  }
}));
