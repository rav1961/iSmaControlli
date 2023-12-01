import { useEffect, useState } from 'react';
import { ButtonMobilePropsType } from './ButtonMobile.type';
import useWindowSize from '../../hooks/useWindowSize';
import './ButtonMobile.style.scss';

const ButtonMobile = ({ clickHandler }: ButtonMobilePropsType) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isMobile } = useWindowSize();

  const toggleMenu = (): void => {
    const isOpenState = !isOpen;

    setOpen(isOpenState);
    clickHandler(isOpenState);
  };

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
      clickHandler(false);
    }
  }, [clickHandler, isMobile]);

  return (
    <button
      role="button"
      aria-label="Toggle menu"
      className={`mobile-button ${isOpen && 'mobile-button--open'}`}
      onClick={toggleMenu}
    >
      <span className="mobile-button__line"></span>
      <span className="mobile-button__line"></span>
      <span className="mobile-button__line"></span>
    </button>
  );
};

export default ButtonMobile;
