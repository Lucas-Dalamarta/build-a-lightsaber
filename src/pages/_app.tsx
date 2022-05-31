import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { SaberProvider } from '../context/Saber'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={darkTheme}>
    <SaberProvider>
      <Component {...pageProps} />
    </SaberProvider>
  </ThemeProvider>
)
export default MyApp
