import { Navigation } from '../components';
import Footer from './Footer';
import type { LayoutPropsType } from './Layout.type';

const Layout = ({ header, children }: LayoutPropsType) => {
  return (
    <>
      <Navigation />
      <main>
        {header && <h1 className="font-light mb-0 text-[1.75rem] lg:text-[2.375rem]">{header}</h1>}
        <section
          className="flex flex-col gap-4 p-4 border-1 border-navy-500 rounded-[0.625rem]
            bg-navy-900 lg:gap-8 lg:max-w-6xl lg:px-[1.75rem] lg:p-8"
        >
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
