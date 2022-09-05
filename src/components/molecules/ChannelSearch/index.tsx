import { Input } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchChannelContext } from "../../../context/SearchChannelContext";
import useDebounce from "../../../hooks/useDebounce";

const ChannelSearch: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { setSearchValue } = useSearchChannelContext();
  const searchValue = useDebounce({ value, delay: 1000 });

  useEffect(() => {
    setSearchValue(searchValue);
  }, [searchValue, setSearchValue]);

  return (
    <Input
      clearable
      onChange={(e) => setValue(e.target.value)}
      value={value}
      color="primary"
      labelPlaceholder="Search"
      labelRight={
        <Image src="/search.svg" width="20px" height="20px" alt="Search Icon" />
      }
    />
  );
};

export default ChannelSearch;
