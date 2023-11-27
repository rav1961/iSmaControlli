import type { PropsWithChildren } from 'react';
import { Navigation } from '../components';
import Footer from './Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <main>
        <section
          className="flex flex-col gap-4 p-4 border-1 border-navy-500 rounded-[10px]
            bg-navy-900 lg:gap-8 lg:max-w-6xl lg:px-[28px] lg:p-8"
        >
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
