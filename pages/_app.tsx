import type { AppProps } from 'next/app';
import { identity } from 'lodash';

/** Main application component */
const MyApp = ({ Component, pageProps }: AppProps) => {

  // Use the layout defined at the page level, if available
  type LayoutComponent = typeof Component
    & { getLayout?: (child: React.ReactElement) => React.ReactElement };
  const MyComponent = Component as LayoutComponent;
  const getLayout = MyComponent.getLayout ?? identity;

  return getLayout(<MyComponent {...pageProps} />);
};

export default MyApp;
