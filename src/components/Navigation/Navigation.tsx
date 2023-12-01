import { useState } from 'react';
import { FormSearch } from '../FormSearch';
import { Logo } from '../Logo';
import { ButtonMobile } from '../ButtonMobile';
import { EquipmentList } from '../Equipment';

const Navigation = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

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
        <div className={`mt-4 lg:block lg:mt-7 ${isOpenMenu ? '' : 'hidden'}`}>
          <FormSearch searchModeHandle={toggleSearchHandler} />
          <EquipmentList isSearchMode={isSearchMode} />
        </div>
      </div>
      <ButtonMobile clickHandler={toggleMenuHandler} />
    </nav>
  );
};

export default Navigation;
