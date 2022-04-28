import { AppProps, NextWebVitalsMetric } from 'next/app';

import '../styles/global.css';
import CartProvider from '@store/Cart';

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
  //analytics - calibre
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component { ...pageProps } />
    </CartProvider>
  );
};

export default MyApp;
