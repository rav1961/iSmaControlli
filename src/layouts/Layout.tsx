import { Outlet } from 'react-router-dom';
import { Navigation } from '../components';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
