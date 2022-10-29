import Link from "next/link"
import { useState } from "react";
const Search = ({ toggleSearch, handleSearch }) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      {
        toggleSearch && 
        <div className="w-full h-28 bg-black/80 absolute z-10 flex justify-center items-center">
          <div class="relative w-1/2">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm rounded-r-lg border-l-2 border" placeholder="Search Meal" required onChange={handleChange}></input>
            <Link href={`/search/${searchText}`}>
              <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-myellow rounded-r-lg border border-myellow hover:bg-amber-500" onClick={handleSearch}>
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
              </button>
            </Link>
          </div>
        </div>
      }
    </>

  );
}
 
export default Search;