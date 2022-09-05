import React, { createContext, useContext, useMemo, useState } from "react";

type ContextProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchChannelContext = createContext({} as ContextProps);

export const useSearchChannelContext = () => useContext(SearchChannelContext);

const SearchChannelContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const values = useMemo(
    () => ({
      searchValue,
      setSearchValue,
    }),
    [searchValue]
  );

  return (
    <SearchChannelContext.Provider value={values}>
      {children}
    </SearchChannelContext.Provider>
  );
};

export default SearchChannelContextProvider;
