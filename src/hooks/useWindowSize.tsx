import { useLayoutEffect, useState } from 'react';

const LG_WIDTH: number = 1024;

const getWindowSize = () => {
  const { innerWidth: width } = window;
  let isMobile = false;

  if (width) {
    isMobile = LG_WIDTH >= width;
  }

  return { width, isMobile };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useLayoutEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
