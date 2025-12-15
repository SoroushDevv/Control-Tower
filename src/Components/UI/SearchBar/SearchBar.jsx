import { useEffect, useRef } from "react";
import { useSearch } from "../../../Contexts/SearchContext";
const SearchBar = () => {
  const { query, setQuery, isSearchOpen, setIsSearchOpen } = useSearch();

  ;

  return (
    <div className="relative w-fit ">


      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جستجو..."
        className="p-2 h-10 w-52 rounded-full outline-none
  focus:ring-2
  focus:ring-light-border-focus  transition-all ease-in-out duration-200
  
  dark:bg-dark-bg-surfaceAlt dark:text-dark-text-mutedSoft
      dark:placeholder:text-dark-text-secondarySoft

      dark:outline-none
      dark:ring-1 dark:ring-dark-border
      dark:focus:ring-2
      focus:ring-indigo-500/60

  "/>


      <div className="absolute flex justify-center items-center w-10 h-10 left-5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:border-none cursor-pointer" onClick={() => setIsSearchOpen(true)}>🔍</div>
    </div>
  );
};

export default SearchBar;
