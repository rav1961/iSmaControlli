import { useCallback, useEffect, useState } from 'react';
import { FormSearchPropsType } from './FormSearch.type';
import type { ChangeEvent } from 'react';
import { PLACEHOLDER_SEARCH_FORM } from '../../consts/labels';

const FormSearch = ({ searchModeHandle }: FormSearchPropsType) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const searchHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  useEffect(() => {
    searchModeHandle(searchValue.length > 0);
  }, [searchModeHandle, searchValue]);

  return (
    <form className="relative mb-2 lg:mb-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute top-1/2 -translate-y-1/2 left-4"
      >
        <path
          d="M10.4286 19.8571C15.6358 19.8571 19.8571 15.6358 19.8571 10.4286C19.8571 5.22131 15.6358 1 10.4286 1C5.22131 1 1 5.22131 1 10.4286C1 15.6358 5.22131 19.8571 10.4286 19.8571Z"
          stroke="#8193B1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 17.5L23 23"
          stroke="#8193B1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="search"
        placeholder={PLACEHOLDER_SEARCH_FORM}
        value={searchValue}
        onChange={searchHandle}
        className="m-0 w-full bg-navy-700 rounded-[0.625rem] text-yellow text-lg font-normal 
          bg-search bg-no-repeat bg-[1.25rem] focus-within:outline-none 
          placeholder:text-navy-400 placeholder:text-lg placeholder:font-normal
          py-[0.875rem] pl-[3.75rem] px-[1.188rem]"
      />
    </form>
  );
};

export default FormSearch;
