import { useLayoutEffect, useState } from 'react';

const getWindowSize = () => {
  const { innerWidth: width } = window;

  return { width };
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
