import React, { useState } from "react";
import Icon from "../Icon";

function SuperHeader({ updateSearch }) {
  return (
    <>
      <div className="xs:h-1 xs:bg-custom-gray-900 lg:hidden"></div>
      <div className="xs:hidden bg-custom-gray-900 h-10  text-sm  text-custom-gray-300 lg:flex items-center gap-6 px-8">
        <div className="text-white flex-1">
          Free shipping on domestic orders over $75!
        </div>
        <SearchInput updateSearch={updateSearch} />
        <button>Help</button>
        <button>
          <Icon id="shopping-bag" />
        </button>
      </div>
    </>
  );
}
export default SuperHeader;

function SearchInput({ updateSearch }) {
  const [isInput, setIsInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    updateSearch(isInput);
    setIsInput("");
  }

  return (
    <>
      <form className="relative" onSubmit={handleSubmit}>
        <label htmlFor="search-shoe" className="sr-only">
          Search
        </label>
        <Icon id="search" className="absolute" size={16} />
        <input
          className="pl-6 bg-inherit border-b border-current outline-offset-[6px]"
          type="text"
          name="search-shoe"
          placeholder="Search..."
          id="search-shoe"
          value={isInput}
          onChange={(event) => setIsInput(event.target.value)}
        />
      </form>
    </>
  );
}
