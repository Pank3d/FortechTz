import React from "react";
import { SearchInputProps } from "../../../../shared/type/type";



const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value || ""}
      onChange={onChange}
      placeholder="Search Pokemon"
      className="search_input"
    />
  );
};

export default SearchInput;
