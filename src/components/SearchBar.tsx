import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("");

  // console.log(value);
  return (
    <div>
      <input
        value={value}
        className="focus:outline focus:outline-2 focus:outline-gray-500 border-none rounded-[5px] text-white text-sm bg-[#2b3844] ps-5 pe-20 py-5 pl-10 pr-4 sm:w-full sm:mb-10 lg:w-2/4"
        placeholder="Search for a country..."
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
