import { useEffect, useState } from 'react';
import { ButtonMobilePropsType } from './ButtonMobile.type';
import useWindowSize from '../../hooks/useWindowSize';
import './ButtonMobile.style.scss';

const LG_WIDTH: number = 1024;

const ButtonMobile = ({ clickHandler }: ButtonMobilePropsType) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const toggleMenu = (): void => {
    const isOpenState = !isOpen;

    setOpen(isOpenState);
    clickHandler(isOpenState);
  };

  useEffect(() => {
    if (width >= LG_WIDTH) {
      setOpen(false);
      clickHandler(false);
    }
  }, [clickHandler, width]);

  return (
    <button className={`mobile-button ${isOpen && 'mobile-button--open'}`} onClick={toggleMenu}>
      <span className="mobile-button__line"></span>
      <span className="mobile-button__line"></span>
      <span className="mobile-button__line"></span>
    </button>
  );
};

export default ButtonMobile;
