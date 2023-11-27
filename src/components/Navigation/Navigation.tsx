import { useState } from 'react';
import { ButtonMobile } from '../ButtonMobile';
import { FormSearch } from '../FormSearch';
import { Logo } from '../Logo';

const Navigation = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

  console.log(isSearchMode);

  const toggleMenuHandler = (val: boolean): void => {
    setOpenMenu(val);
  };

  const toggleSearchHandler = (val: boolean): void => {
    setIsSearchMode(val);
  };

  return (
    <nav>
      <div>
        <Logo />
        <div className={`mt-7 lg:block ${isOpenMenu ? '' : 'hidden'}`}>
          <FormSearch searchModeHandle={toggleSearchHandler} />
          {/* <NavigationList /> */}
        </div>
      </div>
      <ButtonMobile clickHandler={toggleMenuHandler} />
    </nav>
  );
};

export default Navigation;
