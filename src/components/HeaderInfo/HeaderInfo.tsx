type HeaderInfoPropsType = {
  header?: string | null;
};

const HeaderInfo = ({ header }: HeaderInfoPropsType) => {
  if (!header) {
    return null;
  }

  return <h1 className="font-light mb-4 text-[1.75rem] lg:text-[2.375rem] lg:mb-0">{header}</h1>;
};

export default HeaderInfo;
