import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout, theme } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppBar />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};
